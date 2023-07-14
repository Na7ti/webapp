CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE IF NOT EXISTS mytable (
    id INT PRIMARY KEY,
    text VARCHAR(20),
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

INSERT INTO mytable (id, text, latitude, longitude) VALUES (1, 'kawahara', 33.834341698192844, 132.76585985132317);
