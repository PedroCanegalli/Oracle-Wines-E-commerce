-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oracle_wines
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Andino'),(2,'Andino'),(4,'Andino'),(5,'Andino'),(6,'Andino'),(7,'Andino'),(8,'Andino'),(9,'Patagonico'),(12,'Andino'),(13,'Andino');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_product`
--

DROP TABLE IF EXISTS `image_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_product` (
  `id` int(11) NOT NULL,
  `archivo` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,'id1.png'),(2,'id2.png'),(4,'id4.jpg'),(5,'id5.jpg'),(6,'id6.png\"'),(7,'image-1657248221087.png'),(8,'image-1657250308745.png'),(9,'image-1657251084823.png'),(12,'image-1657575784743.png'),(13,'image-1657926798005.png');
/*!40000 ALTER TABLE `image_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest` (
  `idinterest` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idinterest`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,'factura A'),(2,'factura B'),(3,'factura C');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictureuser`
--

DROP TABLE IF EXISTS `pictureuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pictureuser` (
  `idpictureUser` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`idpictureUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictureuser`
--

LOCK TABLES `pictureuser` WRITE;
/*!40000 ALTER TABLE `pictureuser` DISABLE KEYS */;
INSERT INTO `pictureuser` VALUES (5,'picture-1658598304517.jpg'),(6,'picture-1659010135397.jpg');
/*!40000 ALTER TABLE `pictureuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `descriptionExtra` varchar(200) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Mosquita Muerta Black',5000,10,20,1,'BLEND DE CABERNET 750cc','del valle de Uco en barrica de roble de 12 añ',4,1),(2,'Ruttini Rose De Malbec 750 cc',6899,15,0,1,'Malbec, año 2020','Del valle de Uco, en barrica de roble de 12 años',5,2),(4,'CAELUM CHARDONNAY 750cc',1100,35,0,1,'Vino fresco y ligero de color dorado con reflejos verdosos y aromas a frutas blancas como banana y pera, y cítricas como lima, acompañada de algunas notas minerales','Vino fresco y ligero de color dorado con reflejos verdosos y aromas a frutas blancas como banana y pera, y cítricas como lima, acompañada de algunas notas minerales',3,4),(5,'La Celia La Consulta Cabernet Franc',18000,10,0,1,'Cabernet Franc 2017','Elaborado con uvas del Polígono 5,acá la hacedora demuestra su experiencia para con el varietal. De aromas equilibrados y expresivos, con leves dejos herbales. Paladar mordiente fino y fresco, con bue',5,5),(6,'ANGÉLICA ZAPATA MALBEC ALTA 750cc',6000,5,0,1,'Angélica Zapata Malbec es un 100% malbec pero de 5 viñedos distintos','Es un blend de altitudes, es un representante notable del Malbec mendocino que nos hace únicos en el mundo, ideal para acompañar con tus platos preferidos o beberlo solo. Nicasia cuartel 2, aporta fru',5,6),(7,'DON MALBEC 750cc',9240,10,30,1,'ESCORIAHUELA DON',NULL,NULL,7),(8,'CADUS FINCA VIÑA VIDA MALBEC 750cc',10899,10,0,1,'750 cc CADUS FINCA',NULL,NULL,8),(9,'ALTA VISTA TERROIR',2048,12,0,2,'SELECCION MALBEC 750cc','',NULL,9),(12,'EL ESTECO OLD VINES',3565,15,10,1,'750cc MALBEC EL ESTECO OLD VINES',NULL,4,12),(13,'SAINT FELICIEN BONARDA 750cc',4160,5,10,1,'750cc  SAINT FELICIEN',NULL,3,13);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `userName` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `bday` datetime NOT NULL,
  `invoice_id` int(11) DEFAULT NULL,
  `interest_id` varchar(45) DEFAULT NULL,
  `picture_id` varchar(200) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Homero Simpson','homero','hsimpson@gmail.com','1970-10-10 00:00:00',3,'4','5','$2a$10$0VQLMFpPwb5xtJcClSfOJev4zwBxGGR9nMhGc7TIJvOjnrgM7p47O'),(6,'Rocky','Balboa','elsemental@italiano.com','1890-12-31 00:00:00',1,'1','6','$2a$10$veRb3rKfwGVUIYaUD7J84.YRqyGdhC.rbjQ/1bb.IHYNa363xfYf.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'oracle_wines'
--

--
-- Dumping routines for database 'oracle_wines'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-02 13:15:55
