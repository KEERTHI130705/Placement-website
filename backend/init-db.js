const Database = require('better-sqlite3');
const db = new Database('credentials.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  );
`);

db.prepare(`INSERT INTO students (username, password) VALUES (?, ?)`).run('admin1', 'admin123');

const createRecruitersTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS recruiters (
      username TEXT PRIMARY KEY,
      password TEXT NOT NULL
    );
  `);
  
  // Insert some sample recruiter data
  const insertRecruiters = db.prepare(`
    INSERT OR IGNORE INTO recruiters (username, password) VALUES
    ('recruiter1', 'password123'),
    ('recruiter2', 'password456')
  `);
  
  insertRecruiters.run();
  
  
  createRecruitersTable.run();
  insertRecruiters.run();
  
  console.log("Recruiters table initialized");
console.log('DB initialized.');


