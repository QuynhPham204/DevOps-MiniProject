require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "devops_mini_project_db",
  },
  app: {
    name: process.env.APP_NAME || "DevOps Student API",
    studentName: process.env.STUDENT_NAME || "Unknown",
    studentId: process.env.STUDENT_ID || "Unknown",
    studentClass: process.env.STUDENT_CLASS || "Unknown",
  },
};
