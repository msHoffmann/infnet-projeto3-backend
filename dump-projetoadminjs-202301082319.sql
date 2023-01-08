-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: projetoadminjs
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Category 1','2023-01-06 01:00:30','2023-01-08 22:14:57'),(2,'Category 2','2023-01-08 23:18:41','2023-01-08 23:18:41'),(3,'Category 3','2023-01-08 23:18:44','2023-01-08 23:18:44'),(4,'Category 4','2023-01-08 23:18:47','2023-01-08 23:18:47');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`category`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Product 1',1,'2023-01-06 01:00:36','2023-01-08 22:14:39'),(2,'Product 2',1,'2023-01-08 21:58:18','2023-01-08 22:14:45'),(3,'Product 3',1,'2023-01-08 22:14:51','2023-01-08 22:14:51');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('AD9zMJDGQ0dc9KdH2YxjUEzrAyRDLOVe',1673276044,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"adminUser\":{\"id\":1,\"name\":\"Frania\",\"email\":\"franiahoffmann@gmail.com\",\"username\":\"mshoffmann\",\"password\":\"$2b$10$Fe98S.mo/YCAl/UKJeXEWOq6ErByA9b235gtkxuCu7F4hwygtUf..\",\"role\":\"admin\",\"active\":1,\"pin\":\"\",\"createdAt\":\"2022-11-09T01:04:48.000Z\",\"updatedAt\":\"2022-11-17T01:39:12.000Z\"}}'),('Kd4C56XIBmISK5ocjhyUQSGK9CdLoi2n',1673271788,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"}}'),('SrHJ9GtrFRLK1jg3xtBKcHRdb933YGgd',1673272501,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"adminUser\":{\"id\":1,\"name\":\"Frania\",\"email\":\"franiahoffmann@gmail.com\",\"username\":\"mshoffmann\",\"password\":\"$2b$10$Fe98S.mo/YCAl/UKJeXEWOq6ErByA9b235gtkxuCu7F4hwygtUf..\",\"role\":\"admin\",\"active\":1,\"pin\":\"\",\"createdAt\":\"2022-11-09T01:04:48.000Z\",\"updatedAt\":\"2022-11-17T01:39:12.000Z\"}}'),('W8wnCg0ul38z8IiCGyAGHRpnrIo3SbsC',1673300324,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"}}'),('cOE0XkUrV-bVDuAabWhSyJKBQRmI4tLg',1673306327,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"},\"adminUser\":{\"id\":1,\"name\":\"Frania\",\"email\":\"franiahoffmann@gmail.com\",\"username\":\"mshoffmann\",\"password\":\"$2b$10$Fe98S.mo/YCAl/UKJeXEWOq6ErByA9b235gtkxuCu7F4hwygtUf..\",\"role\":\"admin\",\"active\":1,\"pin\":\"\",\"createdAt\":\"2022-11-09T01:04:48.000Z\",\"updatedAt\":\"2022-11-17T01:39:12.000Z\"}}'),('r5xjjOBhD7a0zpZXkTfe6wqa2AIJY8L2',1673271511,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"}}'),('uen9RzaZ2mw_icgHzEmZTjpejv_5xfzR',1673271510,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":false,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `email` varchar(70) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `active` int DEFAULT '0',
  `pin` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Frania','franiahoffmann@gmail.com','mshoffmann','$2b$10$Fe98S.mo/YCAl/UKJeXEWOq6ErByA9b235gtkxuCu7F4hwygtUf..','admin','2022-11-09 01:04:48','2022-11-17 01:39:12',1,''),(21,'Frania Infnet','frania.lhoffmann@al.infnet.edu.br','franiainfnet','$2b$10$tzD9GBR7keIe3sA6lJBug.3Pu.dHvwSnWq/sn8deIT7ApmgLmR4m2','admin','2022-11-24 22:17:18','2022-11-24 22:20:38',1,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'projetoadminjs'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-08 23:19:54
