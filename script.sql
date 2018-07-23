

create database ciberbot;

use ciberbot;
/*------------------------------------------*/

create table tipousuarios(
id_tipusu int auto_increment primary key,
descri varchar(350)
);
insert into tipousuarios values(1,'Docente'),(2,'Alumno');

/*------------------------------------------*/
drop table carrera
create table sede (
id_sede int primary key,
descri varchar(350) );
insert into sede values(1,'Sede Miraflores'),(2,'Sede San Miguel'),
(3,'Sede Breña'),(4,'Sede Norte'),(5,'Sede Bellavista-Callao');

/*------------------------------------------*/

create table carrera (
id_carrera int primary key ,
descri varchar(350) );

insert into carrera values(1,'Computación e Informatica');

/*------------------------------------------*/




/*usuarios para el acceso ala web*/
create table usuariosweb(
id_usu int auto_increment primary key,
firstname_usu varchar(150) , 
lastname_usu varchar(150),
usuario_usu varchar(150),
pass_usu varchar(20),
sede_usu int references sede(id_sede),
tipo_usu int references tipousuarios(id_tipusu)

);

insert into usuariosweb(firstname_usu,lastname_usu,usuario_usu,pass_usu,tipo_usu)
values('Andy Javier','Robers Javier','arsevys','arsevys',2),
('Juan Flores','Campos Lopez','juan','juan',1);

/*
drop table usuariosMessenger;
*/

select u.id,n.descri_noti from usuariosmessenger as u
inner join notificaciones as n
where n.id_noti=5 ;
/*------------------------------------------*/

drop table usuariosmessenger;
create table usuariosmessenger(
id_usu varchar(100) primary key,
firstname_usu varchar(250),
lastname_usu varchar(250),
perfil_usu text,
correo_usu varchar(256)  null,
carrera_usu int references carrera(id_carrera),
sede_usu int references sede(id_sede) ,
tipo_usu int references tipousuarios(id_tipusu),
estado int default 1 -- 1=usuario sin registrar, 2 ==usuarioconectado 3== sesionserrado
);

select * from notificaciones;
select * from usuariosMessenger;
insert into usuariosmessenger(id,first_name,last_name,perfil,tipo_usu) values('123456895','Lulu Lopez','Aurora Campos','http://',1)
,('98756895','Humberto Lay','Cheetos','http://',1),
('12398756895','Damasko Aragon','Mounstro de la bicicleta','http://',2);

/*SI existe valida sino insert*/


drop procedure if exists existeUsuario;
DELIMITER //

CREATE procedure existeUsuario( cod text)

BEGIN

   if ((select count(*) from usuariosmessenger where id=cod) > 0) then 
     select 1 as result;
   else  select 2 as result;
   
   end if;

  END;
  //

 DELIMITER ;
 
 call existeUsuario('54');


/*Registro de los noticificaciones enviadas por el servidor alos usuarios*/
create table notificacionesenviadosregistros(
id_noti int references notificaciones ,
fecha datetime );

insert into notificacionesRegistros values(4,now());

select u.id,n.descri_noti from usuariosmessenger as u inner join notificaciones as n order  by n.id_noti desc limit 1;

drop table notificaciones;

create table notificaciones(
id_noti int auto_increment primary key,
titulo_noti varchar(350) not null,
descri_noti text not null,
fechini_noti datetime not null,
fechfin_noti datetime not null,
tipo_noti int default 1,
dirigido_noti int references tipousuarios(id_tipusu),
estado char(1) default 'I'  /*I= incompleto C=completado*/,
userid int 
);

alter table notificaciones add userid int not null;

select date_add(now(),interval 3 day);

select * from notificaciones;

insert into notificaciones values
(4,'tboofffffffffm','descripcionnnnnn xd',now(),date_add(now(),interval 3 day),1,1,'I'),
(1,'tituloo boom','descripcionnnnnn xd',now(),date_add(now(),interval 3 day),1,1,'I'),
(2,'xd','de145 xd',now(),date_add(now(),interval 1 day),1,1,'I');

DROP PROCEDURE IF EXISTS prc_getNotificaciones;

DELIMITER $$

select * from usuariosmessenger
where id_usu=1

CREATE PROCEDURE prc_getNotificaciones (datetime hoy) 
BEGIN
DECLARE W_CUS INT UNSIGNED DEFAULT 0;
DECLARE W_TOT DOUBLE DEFAULT 0; -- NOT USED?
-- GET CUS_CODE
SELECT CUS_CODE INTO W_CUS 
FROM INVOICE
WHERE INVOICE.INV_NUMBER = W_IN;

-- UPDATES CUSTOMER IF W_CUS > 0
IF W_CUS > 0 THEN
    UPDATE CUSTOMER
    SET CUS_BALANCE = CUS_BALANCE + 
                (SELECT INV_TOTAL FROM INVOICE WHERE INV_NUMBER = W_IN)
    WHERE CUS_CODE = W_CUS;
END IF;

END $$

DELIMITER ;

select * from usuarios;

select * from usuariosmessenger;



select * from notificaciones


drop procedure if exists test;




select * from notificaciones;





select * from notificaciones;
select * from notificacionesregistros;
select now() ;

DELIMITER //

CREATE procedure CalcIncome ( OUT ending_value INT )

BEGIN

   DECLARE income INT;

   SET income = 50;

   label1: WHILE income <= 3000 DO
     SET income = income * 2;
   END WHILE label1;

   SET ending_value = income;

END; //

DELIMITER ;
select * from  notificaciones as n  
where 
(date(now()) between date(n.fechini_noti) and date(n.fechfin_noti)) and n.estado='I' and 
time(now())  between time(n.fechini_noti - interval 1 minute) and time(n.fechini_noti + interval 1 minute) ;



select * from  notificaciones as n  
left join notificacionesRegistros as nr 
on n.id_noti =nr.id_noti
where  !(n.id_noti = nr.id_noti)

(date(now()) between date(n.fechini_noti) and date(n.fechfin_noti));



 and nr.fecha=date(nr.fecha)

 not (date(nr.fecha)=date(now())  ) 


where (date(now()+interval 1 day) between date(n.fechini_noti) and date(n.fechfin_noti)) and
n.estado ='I' and not (nr.fecha=now())



select now() - interval 1 hour;
select N.*
from notificaciones AS N

left  join notificacionesRegistros RN
on  N.id_noti=RN.id_noti
where date(RN.fecha) != date(now()) or date(RN.fecha) =null;

select now();
where  N.fechini between
 time(NOW()-INTERVAL 2 MINUTE) AND TIME(NOW()+INTERVAL 2 MINUTE) or 
  N.fechfin between
 time(NOW()-INTERVAL 2 MINUTE) AND TIME(NOW()+INTERVAL 2 MINUTE) 

select N.* from notificaciones AS N
BETWEEN  N.fechini_noti ;select * from  notificaciones as n  
left join notificacionesRegistros as nr 
on n.id_noti=nr.id_noti
where !(date(nr.fecha)=date(now()) or nr.fecha is null);




DELIMITER //

CREATE  PROCEDURE `test`()
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
         
         
         if(select count(*) from notificacionesenviadosregistros where id_noti=idnot and date(fecha)=date(ahora))=0 then
            begin
            declare c int;
            declare t int;
            declare  usu text;
            declare des text;
             declare  obtenerusu cursor for  select u.id_usu,n.descri_noti  from  notificaciones n inner join usuariosmessenger u
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
            
            
         insert into notificacionesenviadosregistros values(idnot,ahora);
              
           end;
         end if;
        
         
        
      
           
	     set contador=contador+1;
        END WHILE;
        close csr_mgr_id;
        
        select *  from listado_usuario;

  END;
  //

DELIMITER ;