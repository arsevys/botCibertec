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
-- Dumping events for database 'ciberbot'
--

--
-- Dumping routines for database 'ciberbot'
--
/*!50003 DROP PROCEDURE IF EXISTS `existeUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `existeUsuario`( cod text)
BEGIN

   if ((select count(*) from usuariosmessenger where id=cod) > 0) then 
     select 1 as result;
   else  select 2 as result;
   
   end if;

  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `test` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `test`()
BEGIN


  DECLARE ahora datetime;
  DECLARE done INT DEFAULT 0;
  DECLARE cantidadFilas int;
  DECLARE contador int;
  DECLARE idnot int;
  declare tipousuario int;
  Declare total int;
  
 declare  csr_mgr_id cursor for (Select n.id_noti, n.dirigido_noti from  notificaciones as n  where 
(date(now() ) between date(n.fechini_noti) and date(n.fechfin_noti)) and n.estado='I');
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
   
  set ahora=now() ;
  
  /* tabla temporal para poner los usuariosa quien vamos a enviar*/
    DROP TEMPORARY TABLE IF EXISTS listado_usuario;
  create temporary table listado_usuario(id_usu text,descri text ) ;
    SET SQL_SAFE_UPDATES = 0;
     set contador=1;
  /*select id_noti as 'codigo' from idnoti;*/
  select count(*)  into total  from  notificaciones as n  where
  (date(ahora) between date(n.fechini_noti) and date(n.fechfin_noti)) and n.estado='I';
  
    OPEN csr_mgr_id;
      while contador<=total DO
         FETCH csr_mgr_id INTO idnot,tipousuario;
         
         
         if(select count(*) from notificacionesregistros where id_noti=idnot and date(fecha)=date(ahora))=0 then
            begin
            declare c int;
            declare t int;
            declare  usu text;
            declare des text;
             declare  obtenerusu cursor for  select u.id,n.descri_noti  from  notificaciones n inner join usuariosmessenger u
            where n.id_noti=idnot ;
            set c=1;
             select count(*) into total from  notificaciones n inner join usuariosmessenger u
            where n.id_noti=idnot ;
            open obtenerusu;
            while(total >=c) do
            Fetch obtenerusu into usu,des;
            insert into listado_usuario values(usu,des);
            set c=c+1;
            end while;
            close obtenerusu;
            
            
         insert into notificacionesregistros values(idnot,ahora);
              
           end;
         end if;
        
         
        
      
           
	     set contador=contador+1;
        END WHILE;
        close csr_mgr_id;
        
        select *  from listado_usuario;

  END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-05 12:20:52
