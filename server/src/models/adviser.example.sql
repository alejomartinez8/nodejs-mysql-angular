CREATE DATABASE IF NOT EXISTS node_mysql DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE node_mysql;

CREATE TABLE IF NOT EXISTS `adviser`(
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `legal_id` INT NOT NULL,
  `phone` INT NOT NULL, 
  `date_of_birth` DATETIME NOT NULL,
  `gender` VARCHAR(50) NOT NULL,
  `client` VARCHAR(255) NOT NULL,
  `headquarters` VARCHAR(255),
  `user` BIGINT UNSIGNED NOT NULL,
  `age` DECIMAL(2, 0)
CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))  
ENGINE = InnoDB

INSERT INTO `node_mysql`.`adviser` (`full_name`, `legal_id`, `phone`,`date_of_birth`, `gender`,`client`, `headquarters`, `user`, `age`) VALUE ('Alejandro Martinez', '12345678', '8888888', '1987-07-28', 'Masculino', 'Konecta', 'Ruta N', '123456789', '33');

INSERT INTO `node_mysql`.`adviser` (`full_name`, `legal_id`, `phone`,`date_of_birth`, `gender`,`client`, `headquarters`, `user`, `age`) VALUE ('Benjamin Martinez', '12345678', '8888888', '1987-07-28', 'Masculino', 'Konecta', 'Ruta N', '123456789', '33');