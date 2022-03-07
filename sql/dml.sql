CREATE DATABASE luandb;
USE luandb;

CREATE TABLE user(
u_id INT PRIMARY KEY AUTO_INCREMENT,
u_first_name VARCHAR(50) NOT NULL,
u_last_name VARCHAR(50) NOT NULL,
u_email VARCHAR(100) NOT NULL,
u_password VARCHAR(50) NOT NULL,
u_phone VARCHAR(12) NOT NULL,
u_gender BOOLEAN NOT NULL,
u_birthdate DATE,
u_fLdate DATETIME,
u_lLDate DATETIME,
u_option VARCHAR(50) ,
u_note VARCHAR(100)
);