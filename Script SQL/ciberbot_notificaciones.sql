CREATE DATABASE  IF NOT EXISTS `ciberbot` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ciberbot`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: ciberbot
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `notificaciones`
--

DROP TABLE IF EXISTS `notificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notificaciones` (
  `id_noti` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_noti` varchar(350) NOT NULL,
  `descri_noti` text NOT NULL,
  `fechini_noti` datetime NOT NULL,
  `fechfin_noti` datetime NOT NULL,
  `tipo_noti` int(11) DEFAULT '1',
  `dirigido_noti` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT 'I',
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id_noti`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificaciones`
--

LOCK TABLES `notificaciones` WRITE;
/*!40000 ALTER TABLE `notificaciones` DISABLE KEYS */;
INSERT INTO `notificaciones` VALUES (5,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"asda\",\"buttons\":[{\"type\":\"web_url\",\"title\":\"asdasd\"}]}}}}','2018-05-31 12:52:00','2018-05-25 12:52:00',1,2,'I',1),(6,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"Probandoooooo\"}}','2018-06-01 12:56:00','2018-05-15 07:59:00',1,0,'I',1),(7,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"media\",\"elements\":[{\"media_type\":\"image\",\"url\":\"http://expopostulante.com/img/GUIA-INSTITUTOS/CIBERTEC/logo2.jpg\",\"buttons\":[{\"type\":\"web_url\",\"title\":\"holaaaa\"}]}]}}}}','2018-06-01 12:56:00','2018-05-15 07:59:00',1,0,'I',1),(8,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"media\",\"elements\":[{\"media_type\":\"image\",\"url\":\"http://expopostulante.com/img/GUIA-INSTITUTOS/CIBERTEC/logo2.jpg\",\"buttons\":[{\"type\":\"web_url\",\"title\":\"asdasd\"}]}]}}}}','2018-06-01 12:56:00','2018-05-15 07:59:00',1,1,'I',1),(9,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"fsddasdsgdasf\"}}','2018-05-30 10:00:00','2018-05-31 10:01:00',1,2,'I',1),(10,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"Probando 1234\"}}','2018-05-30 02:35:00','2018-05-30 04:05:00',1,1,'I',1),(11,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"Probando 789\"}}','2018-05-30 02:35:00','2018-05-30 04:05:00',1,1,'I',1),(12,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"desde node\"}}','2018-05-30 02:35:00','2018-05-31 04:05:00',1,1,'I',1),(13,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"...Gano PERU\"}}','2018-05-30 02:35:00','2018-05-30 04:05:00',1,1,'I',1),(14,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://s4.eestatic.com/2018/03/09/ciencia/Ciencia_290732628_69096352_1706x960.jpg\"}}}}','2018-05-30 13:47:00','2018-05-31 14:15:00',1,1,'I',1),(15,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.gratistodo.com/wp-content/uploads/2016/11/pikachu-1-800x533.jpg\"}}}}','2018-05-30 13:47:00','2018-05-31 14:15:00',1,1,'I',1),(16,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\"}}}}','2018-05-30 13:47:00','2018-05-31 14:15:00',1,1,'I',1),(17,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\"}}}}','2018-05-30 13:47:00','2018-05-31 14:15:00',1,1,'I',1),(18,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\"}}}}','2018-05-30 13:47:00','2018-05-31 14:15:00',1,1,'I',1),(19,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\"}}}}','2018-05-30 12:23:00','2018-05-31 12:03:00',1,1,'I',1),(20,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"image\",\"payload\":{\"is_reusable\":true,\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\"}}}}','2018-05-30 12:23:00','2018-05-31 12:03:00',1,1,'I',1),(21,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"hola\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\",\"title\":\"dsfsdf\"}]}}}}','2018-05-30 12:45:00','2018-05-30 12:02:00',1,1,'I',1),(22,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"hola\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\",\"title\":\"dsfsdf\"}]}}}}','2018-05-30 12:45:00','2018-05-30 12:02:00',1,1,'I',1),(23,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"Seleccionar Opcion :\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\",\"title\":\"Cibercorp\"},{\"type\":\"web_url\",\"url\":\"https://youtu.be/aCLuAd_lh7I\",\"title\":\"Chatbots\"},{\"type\":\"element_share\"}]}}}}','2018-05-30 12:45:00','2018-05-30 12:02:00',1,1,'I',1),(24,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"attachment\":{\"type\":\"template\",\"payload\":{\"template_type\":\"button\",\"text\":\"Seleccionar Opcion :\",\"buttons\":[{\"type\":\"web_url\",\"url\":\"https://www.lomasnuevo.net/wp-contentupl/2016/11/dockericon.png\",\"title\":\"Cibercorp\"},{\"type\":\"web_url\",\"url\":\"https://youtu.be/aCLuAd_lh7I\",\"title\":\"Chatbots\"},{\"type\":\"element_share\"}]}}}}','2018-05-30 12:45:00','2018-05-30 12:02:00',1,1,'I',1),(25,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"Este es un comunicado.....\"}}','2018-05-30 12:56:00','2018-05-30 12:56:00',1,0,'I',1),(26,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"132456Holaaaaa\"}}','2018-05-30 07:59:00','2018-05-30 12:25:00',1,1,'I',1),(27,'Probandoo','{\"recipient\":{\"id\":\"\"},\"message\":{\"text\":\"(Y) bien hechoooooo\"}}','2018-05-30 07:59:00','2018-05-30 12:25:00',1,1,'I',1);
/*!40000 ALTER TABLE `notificaciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-05 12:20:52
