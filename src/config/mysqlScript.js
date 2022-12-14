const mysqlScript = `
	USE bico5vio8ujdbknloiwz;
	CREATE TABLE IF NOT EXISTS admin (
		admin_id INT AUTO_INCREMENT PRIMARY KEY,
		email VARCHAR(64) NOT NULL UNIQUE,
		name VARCHAR(64) NOT NULL,
		passwd VARCHAR(64) NOT NULL,
		rol INT NOT NULL,
		is_active BOOLEAN NOT NULL DEFAULT 0,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	);
	CREATE TABLE IF NOT EXISTS instructive (
		instructive_id INT AUTO_INCREMENT PRIMARY KEY,
		question VARCHAR(128),
		answer MEDIUMTEXT NOT NULL,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	);
	CREATE TABLE IF NOT EXISTS teacher (
		teacher_id INT AUTO_INCREMENT PRIMARY KEY,
		email VARCHAR(64) NOT NULL UNIQUE,
		name VARCHAR(64) NOT NULL,
		apellido VARCHAR(64) NOT NULL,
		rut VARCHAR(64) NOT NULL UNIQUE,
		passwd VARCHAR(64) NOT NULL,
		rol INT NOT NULL,
		is_active BOOLEAN NOT NULL DEFAULT 0,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	);
	CREATE TABLE IF NOT EXISTS student (
		student_id INT AUTO_INCREMENT PRIMARY KEY,
		email VARCHAR(64) NOT NULL UNIQUE,
		name VARCHAR(64) NOT NULL,
		
		rut VARCHAR(64) NOT NULL UNIQUE,
		passwd VARCHAR(64) NOT NULL,
		rol INT NOT NULL,
		last_connection DATETIME,
		last_disconnection DATETIME,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	);
	CREATE TABLE IF NOT EXISTS teacherStudent (
		teacherStudent_id INT AUTO_INCREMENT PRIMARY KEY,
		teacher_id INT,
		student_id INT,
		FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id),
		FOREIGN KEY (student_id) REFERENCES student(student_id)
	);
	CREATE TABLE IF NOT EXISTS course (
		course_id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(64) NOT NULL,
		period VARCHAR(64) NOT NULL,
		carrera VARCHAR(64) NOT NULL,
		final_score FLOAT(2,2),
		teacher_id INT NOT NULL,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
		FOREIGN KEY(teacher_id) REFERENCES teacher(teacher_id)
	);
	CREATE TABLE IF NOT EXISTS enrollment (
		enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
		course_id INT,
		student_id INT,
		FOREIGN KEY (course_id) REFERENCES course(course_id),
		FOREIGN KEY (student_id) REFERENCES student(student_id)
	);
	CREATE TABLE IF NOT EXISTS document (
		document_id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(64) NOT NULL,
		link TEXT NOT NULL,
		course_id INT NOT NULL,
		FOREIGN KEY (course_id) REFERENCES course(course_id)
	);
	CREATE TABLE IF NOT EXISTS exam (
		exam_id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(64) NOT NULL,
		link TEXT NOT NULL,
		is_pendient BOOLEAN NOT NULL DEFAULT 0,
		score FLOAT(2,2),
		num_of_questions INT NOT NULL,
		init_date DATETIME,
		finish_date DATETIME,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
		course_id INT NOT NULL,
		max_points INT NOT NULL,
		FOREIGN KEY (course_id) REFERENCES course(course_id)
	);
	CREATE TABLE IF NOT EXISTS studentExam (
		studentExam_id INT AUTO_INCREMENT PRIMARY KEY,
		student_id INT,
		exam_id INT,
		FOREIGN KEY (student_id) REFERENCES student(student_id),
		FOREIGN KEY (exam_id) REFERENCES exam(exam_id)
	);
	CREATE TABLE IF NOT EXISTS question (
		question_id INT AUTO_INCREMENT PRIMARY KEY,
		answer VARCHAR(64),
		is_correct BOOLEAN NOT NULL DEFAULT 0,
		exam_id INT NOT NULL,
		retro VARCHAR(2000) NOT NULL,
		points INT NOT NULL,
		FOREIGN KEY (exam_id) REFERENCES exam(exam_id)
	);
`;
// use bico5vio8ujdbknloiwz;
// drop table admin;
// drop table document;
// drop table enrollment;
// drop table teacherStudent;
// drop table question;
// drop studentExam;
// drop table exam;
// drop table course;
// drop table instructive;
// drop table student;
// drop table teacher;

module.exports = mysqlScript;
