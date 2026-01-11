package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/mattn/go-sqlite3" // Драйвер SQLite
)

func main() {
	// 1. Открываем (или создаем) файл базы данных
	db, err := sql.Open("sqlite3", "./messages.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Создаем таблицу, если её еще нет
	statement, _ := db.Prepare(`
		CREATE TABLE IF NOT EXISTS messages (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			contact TEXT,
			message TEXT,
			created_at DATETIME
		)
	`)
	statement.Exec()

	mux := http.NewServeMux()

	mux.HandleFunc("/api/contact", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		r.ParseForm()

		// Защита Honeypot
		if r.FormValue("website") != "" {
			log.Printf("[SECURITY] Bot ignored")
			w.WriteHeader(http.StatusOK)
			return
		}

		name := r.FormValue("name")
		contact := r.FormValue("contact")
		message := r.FormValue("message")

		// 3. Сохраняем в базу данных
		ins, err := db.Prepare("INSERT INTO messages (name, contact, message, created_at) VALUES (?, ?, ?, ?)")
		if err != nil {
			log.Printf("[ERROR] DB Prepare failed: %v", err)
			http.Error(w, "Internal Server Error", 500)
			return
		}
		_, err = ins.Exec(name, contact, message, time.Now())
		if err != nil {
			log.Printf("[ERROR] DB Exec failed: %v", err)
		}

		log.Printf("[DB] Saved message from: %s", name)
		w.Write([]byte("Message received in Acid Jazz rhythm!\n"))
	})

	server := &http.Server{
		Addr:         ":8090",
		Handler:      mux,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	fmt.Println("Backend srgazh + SQLite starting on :8090...")
	log.Fatal(server.ListenAndServe())
}
