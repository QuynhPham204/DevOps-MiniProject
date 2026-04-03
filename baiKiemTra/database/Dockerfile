# Use official MySQL image
FROM mysql:8

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=Phamnguyennhuquynh15@
ENV MYSQL_DATABASE=devops_mini_project_db

# Copy initialization script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306