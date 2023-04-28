CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE IF NOT EXISTS mytable (
    id INT PRIMARY KEY,
    name VARCHAR(20)
);

INSERT INTO mytable (id, name) VALUES (1, 'Alice');
INSERT INTO mytable (id, name) VALUES (2, 'Bob');
