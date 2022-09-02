-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: oraclewines
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interest` (
  `interest_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`interest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES (1,'Fiestas'),(2,'Casamientos'),(3,'Eventos Formales'),(4,'Reuniones'),(5,'Vida Sana');
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`invoice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,'Factura A'),(2,'Factura B'),(3,'Factura C');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategory`
--

DROP TABLE IF EXISTS `productcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productcategory` (
  `productCategory_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`productCategory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategory`
--

LOCK TABLES `productcategory` WRITE;
/*!40000 ALTER TABLE `productcategory` DISABLE KEYS */;
INSERT INTO `productcategory` VALUES (1,'Andino'),(2,'Patagónico'),(3,'Importado');
/*!40000 ALTER TABLE `productcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `awards` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `extra_description` text DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `productcategory` (`productCategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MOSQUITA MUERTA BLACK',5000,10,20,1,1,'BLEND DE CABERNET 750 cc','Del valle de Uco, en barrica de roble de 12 años',5,'id1.png'),(2,'RUTTINI ROSE DE MALBEC 750 cc',6899,15,0,1,2,'Malbec, año 2020','Del valle de Uco, en barrica de roble de 12 años',5,'id2.png'),(3,'DON MALBEC 750 cc',9240,15,5,2,2,'ESCORIHUELA DON','',4,'image-1661985278377.png'),(5,'ALTA VISTA TERROIR SELECTION MALBEC 750 cc',2632,20,10,1,10,'750 cc ALTA VISTA TERROIR','750 cc ALTA VISTA TERROIR',4,'image-1662067133996.png'),(6,'ANGÉLICA ZAPATA MALBEC ALTA 750cc',6000,5,2,1,0,'Angélica Zapata Malbec es un 100% malbec pero de 5 viñedos distintos',NULL,4,'id6.png'),(7,'DON MALBEC 750cc',9240,10,30,1,1,'ESCORIAHUELA DON',NULL,5,'image-1657242862826.png'),(8,'CADUS FINCA VIÑA VIDA MALBEC 750cc',10899,10,0,1,2,'750 cc CADUS FINCA',NULL,4,'image-1657250205032.png'),(9,'ALTA VISTA TERROIR',2048,12,0,2,0,'SELECCION MALBEC 750cc',NULL,4,'image-1657251084823.png'),(12,'EL ESTECO OLD VINES',3565,15,10,1,0,'750cc MALBEC EL ESTECO OLD VINES',NULL,3,'image-1657575784743.png'),(13,'SAINT FELICIEN BONARDA 750cc',4160,5,10,1,0,'750cc SAINT FELICIEN',NULL,3,'image-1657926798005.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` text NOT NULL,
  `bday` date NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `interest_id` int(11) NOT NULL,
  `picture` text NOT NULL,
  `password` text NOT NULL,
  `userCategory_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`) USING HASH,
  KEY `invoice_id` (`invoice_id`),
  KEY `interest_id` (`interest_id`),
  KEY `userCategory_id` (`userCategory_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`invoice_id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`interest_id`) REFERENCES `interest` (`interest_id`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`userCategory_id`) REFERENCES `userscategory` (`userCategory_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Homero Simpson','homero','hsimpson@gmail.com','1970-10-10',3,1,'picture-1658598304517.jpg','$2a$10$0VQLMFpPwb5xtJcClSfOJev4zwBxGGR9nMhGc7TIJvOjnrgM7p47O',1),(6,'Rocky','Balboa','elsemental@italiano.com','1890-12-31',1,3,'picture-1659010135397.jpg','$2a$10$veRb3rKfwGVUIYaUD7J84.YRqyGdhC.rbjQ/1bb.IHYNa363xfYf.',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscategory`
--

DROP TABLE IF EXISTS `userscategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userscategory` (
  `userCategory_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`userCategory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscategory`
--

LOCK TABLES `userscategory` WRITE;
/*!40000 ALTER TABLE `userscategory` DISABLE KEYS */;
INSERT INTO `userscategory` VALUES (1,'Admin'),(2,'Client');
/*!40000 ALTER TABLE `userscategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'oraclewines'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-02 17:49:54
