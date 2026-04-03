# DevOps-MiniProject

## 🚀 DevOps Student Management System

### 📋 Thông tin cá nhân

- Sinh viên: Phạm Nguyễn Như Quỳnh
- MSSV: 2251220133
- Lớp: 22CT1
- Môn học: DevOps

---

## 📝 Mô tả dự án

Ứng dụng quản lý sinh viên kết hợp đầy đủ: Backend API, Frontend, Database và container hóa (Docker). Mục tiêu là thực hành chuỗi công cụ DevOps với cấu trúc rõ ràng, dễ triển khai và mở rộng.

### Công nghệ sử dụng

- Backend: Node.js + Express
- Frontend: HTML5 + CSS3 + JavaScript thuần
- Database: MySQL
- Container: Docker + Docker Compose

---

## ✨ Tính năng chính

1. Quản lý sinh viên:
   - Xem danh sách
   - Thêm mới
   - Cập nhật
   - Xóa
2. API REST đầy đủ với 7 endpoint
3. Kiểm tra trạng thái hệ thống (`/health`)
4. Thông tin project (`/about`)
5. CORS/Environment variable hỗ trợ và persistent storage

---

## 📦 Cấu trúc dự án

```
DevOps-MiniProject/
├── baiKiemTra/
│   ├── backend/
│   │   ├── server.js
│   │   ├── package.json
│   │   ├── .env
│   │   └── Dockerfile
│   ├── frontend/
│   │   ├── index.html
│   │   └── Dockerfile
│   ├── database/
│   │   ├── init.sql
│   │   └── Dockerfile
│   ├── docker-compose.yml
│   └── .gitignore
└── README.md
```

---

## 🚀 Cách chạy

### Yêu cầu

- Docker Desktop
- Git
- Port: 80, 3000, 3306

### 1. Docker Compose (khuyến nghị)

```bash
git clone https://github.com/QuynhPham204/DevOps-MiniProject.git
cd DevOps-MiniProject/baiKiemTra
docker-compose up --build
```

- Frontend: `http://localhost`
- Backend: `http://localhost:3000`

### 2. Chạy local tách từng service

- Backend:
  ```bash
  cd baiKiemTra/backend
  npm install
  npm start
  ```
- Frontend: mở `baiKiemTra/frontend/index.html` bằng trình duyệt
- MySQL: import `baiKiemTra/database/init.sql`

---

## 📡 API Endpoints

- `GET /health` → Server status
- `GET /about` → Info sinh viên/hệ thống
- `GET /api/students` → Danh sách sinh viên
- `GET /api/students/:id` → Sinh viên theo ID
- `POST /api/students` → Thêm mới
- `PUT /api/students/:id` → Cập nhật
- `DELETE /api/students/:id` → Xóa

### Ví dụ `/about`

```json
{
  "studentName": "Pham Nguyen Nhu Quynh",
  "studentId": "2251220133",
  "class": "22CT1",
  "appName": "DevOps Student API"
}
```

### Ví dụ request tạo sinh viên

```json
{
  "name": "Nguyen Van A",
  "email": "a@example.com",
  "phone": "0123456789",
  "major": "CNTT"
}
```

---

## ✅ Tiêu chí hoàn thành

- [x] Backend + Frontend + Database
- [x] Docker + Docker Compose
- [x] REST API đầy đủ (GET, POST, PUT, DELETE)
- [x] `/health`, `/about`
- [x] Persistent data MySQL

---

## 🌐 Thông tin liên quan

- GitHub: https://github.com/QuynhPham204/DevOps-MiniProject
- Docker Hub:
  - `quynhpnn/devops-backend`
  - `quynhpnn/devops-frontend`

- [x] Environment Variables
- [x] Dockerfile cho tất cả services
- [x] Docker Compose file
- [x] Git repository với commits
- [x] 3 branches (main, develop, feature)
- [x] Responsive UI

---

## 👨‍💻 Author

**Phạm Nguyễn Như Quỳnh**  
MSSV: 2251220133  
Lớp: 22CT1

---

## 📄 License

MIT
