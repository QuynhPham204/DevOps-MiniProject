CREATE DATABASE IF NOT EXISTS devops_mini_project_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  email VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci UNIQUE NOT NULL,
  phone VARCHAR(20),
  major VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO students (name, email, phone, major) VALUES
('Pham Nguyen Nhu Quynh', 'quynh@example.com', '0123456789', 'Cong Nghe Thong Tin'),
('Nguyen Van An', 'nguyenan@example.com', '0123123123', 'Khoa Hoc May Tinh'),
('Tran Thi Bich', 'tranbich@example.com', '0111222333', 'Khoa Hoc Du Lieu');
