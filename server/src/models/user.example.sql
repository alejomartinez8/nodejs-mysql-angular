CREATE DATABASE IF NOT EXISTS node_mysql DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE node_mysql;

CREATE TABLE IF NOT EXISTS `user` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` BOOLEAN NOT NULL,
  PRIMARY KEY (`id`)
) 
ENGINE=InnoDB

INSERT INTO `node_mysql`.`user` (`username`, `password`, `active`) VALUES ('comunicaciones', 'Reg1234', false);

INSERT INTO `node_mysql`.`user` (`username`, `password`, `active`) VALUES ('gestion', 'Ges1234', true);
