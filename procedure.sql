
drop procedure if exists test;


DELIMITER //
CREATE PROCEDURE test ()
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

  END;
  //

 DELIMITER ;

  call test();
  
  /*
  select * from notificacionesregistros;
    SET SQL_SAFE_UPDATES = 0;
  delete from notificacionesregistros;
  */