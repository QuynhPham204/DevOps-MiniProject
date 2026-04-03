require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

// ============== ENDPOINTS ==============

// 1. Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 2. About Endpoint (Student Info)
app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8'); 
  res.json({
    studentName: process.env.STUDENT_NAME,
    studentId: process.env.STUDENT_ID,
    class: process.env.STUDENT_CLASS,
    appName: process.env.APP_NAME,
    timestamp: new Date().toISOString()
  });
});
// 3. GET - Lấy danh sách tất cả sinh viên
app.get('/api/students', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM students');
    connection.release();
    
    res.setHeader('Content-Type', 'application/json; charset=utf-8'); 
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 4. GET - Lấy sinh viên theo ID
app.get('/api/students/:id', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
    connection.release();
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. POST - Thêm sinh viên mới
app.post('/api/students', async (req, res) => {
  const { name, email, phone, major } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO students (name, email, phone, major) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, major || null]
    );
    connection.release();
    
    res.status(201).json({
      id: result.insertId,
      name,
      email,
      phone,
      major,
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. PUT - Cập nhật sinh viên
app.put('/api/students/:id', async (req, res) => {
  const { name, email, phone, major } = req.body;

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE students SET name = ?, email = ?, phone = ?, major = ? WHERE id = ?',
      [name, email, phone, major, req.params.id]
    );
    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. DELETE - Xóa sinh viên
app.delete('/api/students/:id', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM students WHERE id = ?', [req.params.id]);
    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 App Name: ${process.env.APP_NAME}`);
  console.log(`📚 Database: ${process.env.DB_NAME}`);
});
