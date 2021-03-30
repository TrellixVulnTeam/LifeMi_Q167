-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: localhost    Database: mimisahe
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `T_FUNCTION`
--

DROP TABLE IF EXISTS `T_FUNCTION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_FUNCTION` (
  `ID_FUNCTION` int unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `CODE` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `STATUS` int NOT NULL,
  `CREATIONDATE` timestamp NOT NULL,
  `MODIFICATIONDATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID_FUNCTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_FUNCTION`
--

LOCK TABLES `T_FUNCTION` WRITE;
/*!40000 ALTER TABLE `T_FUNCTION` DISABLE KEYS */;
/*!40000 ALTER TABLE `T_FUNCTION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `T_ROLE`
--

DROP TABLE IF EXISTS `T_ROLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_ROLE` (
  `ID_ROLE` int unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `CODE` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `STATUS` int NOT NULL,
  `CREATIONDATE` timestamp NOT NULL,
  `MODIFICATIONDATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID_ROLE`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_ROLE`
--

LOCK TABLES `T_ROLE` WRITE;
/*!40000 ALTER TABLE `T_ROLE` DISABLE KEYS */;
INSERT INTO `T_ROLE` VALUES (1,'AA','ADM-1',0,'2021-03-28 21:50:01','2021-03-29 01:47:19'),(2,'Administrador','ADM',0,'2021-03-29 01:48:17','2021-03-29 01:48:17');
/*!40000 ALTER TABLE `T_ROLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `T_USER`
--

DROP TABLE IF EXISTS `T_USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `T_USER` (
  `ID_USER` int unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LAST_NAME` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `CODE_USER` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `STATUS` int NOT NULL,
  `CREATIONDATE` timestamp NOT NULL,
  `MODIFICATIONDATE` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID_USER`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `T_USER`
--

LOCK TABLES `T_USER` WRITE;
/*!40000 ALTER TABLE `T_USER` DISABLE KEYS */;
INSERT INTO `T_USER` VALUES (1,'a','a last','a',1,'2021-03-26 00:44:40','2021-03-26 00:51:03'),(2,'TestName','testLast','testcode',0,'2021-03-29 04:18:38','2021-03-29 04:18:38');
/*!40000 ALTER TABLE `T_USER` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mimisahe'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-30 16:35:38
