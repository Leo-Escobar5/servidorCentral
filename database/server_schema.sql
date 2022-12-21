


CREATE DATABASE IF NOT EXISTS biblioteca_universal;

USE biblioteca_universal;

CREATE TABLE `universidad` (
	`universidad_id` VARCHAR(20) NOT NULL COMMENT 'La universidad debería ser la matrícula de cada alumno',
	`password` VARCHAR(50) NOT NULL,
	`nombre_universidad` VARCHAR(100) NOT NULL,
	`url_recuperacion_libro` TEXT NOT NULL,
	`grupo` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`universidad_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

CREATE TABLE `libros` (
	`universidad_id` VARCHAR(20) NOT NULL,
	`universidad_libro_id` VARCHAR(30) NOT NULL,
	`libro_nombre` VARCHAR(200) NOT NULL,
	`tema` VARCHAR(200) NOT NULL,
	PRIMARY KEY (`universidad_id`, `universidad_libro_id`),
	CONSTRAINT `FK_libros_universidad` FOREIGN KEY (`universidad_id`) REFERENCES `universidad` (`universidad_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;


INSERT INTO universidad (universidad_id,password,nombre_universidad,url_recuperacion_libro) VALUES 
('eduardo',123,'Universidad 1','http://localhost:3000/api/recuperar-libro-universal');


