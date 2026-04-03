CREATE DATABASE IF NOT EXISTS devops_mini_project_db;
USE devops_mini_project_db;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  major VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, phone, major) VALUES
('Phạm Nguyễn Như Quỳnh', 'quynh@example.com', '0123456789', 'Công Nghệ Thông Tin'),
('Nguyễn Văn An', 'nguyenan@example.com', '0123123123', 'Khoa Học Máy Tính'),
('Trần Thị Bích', 'tranbich@example.com', '0111222333', 'Khoa Học Dữ Liệu');
