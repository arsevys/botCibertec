

create database ciberbot;

use ciberbot;
create table tipousuarios(
id_tipusu int auto_increment primary key,
descri varchar(350)
);

insert into tipousuarios values(1,'Docente'),(2,'Alumno');


/*usuarios para el acceso ala web*/
create table usuarios(
id_usu int auto_increment primary key,
firstname_usu varchar(250) , 
lastname_usu varchar(250),
usuario_usu varchar(250),
pass_usu varchar(250),
tipo_usu int references id_tipusu

);

insert into usuarios(firstname_usu,lastname_usu,usuario_usu,pass_usu,tipo_usu)
values('Andy Javier','Robers Javier','arsevys','arsevys',2),
('Juan Flores','Campos Lopez','juan','juan',1);

/*
drop table usuariosMessenger;
*/

select u.id,n.descri_noti from usuariosmessenger as u
inner join notificaciones as n
where n.id_noti=5 ;

create table usuariosMessenger(
id varchar(100) primary key,
first_name varchar(250),
last_name varchar(250),
perfil text,
correo_usu varchar(256)  null,
tipo_usu int references id_tipusu
);
select * from usuariosMessenger;
insert into usuariosMessenger(id,first_name,last_name,perfil,tipo_usu) values('123456895','Lulu Lopez','Aurora Campos','http://',1)
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



create table notificacionesRegistros(
id_noti int references notificaciones ,
fecha datetime );

insert into notificacionesRegistros values(4,now());

select u.id,n.descri_noti from usuariosmessenger as u inner join notificaciones as n order  by n.id_noti desc limit 1;


create table notificaciones(
id_noti int auto_increment primary key,
titulo_noti varchar(350) not null,
descri_noti text not null,
fechini_noti datetime not null,
fechfin_noti datetime not null,
tipo_noti int default 1,
dirigido_noti int ,
estado char(1) default 'I'  /*I= incompleto C=completado*/
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

select * from usuarios
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

select date(now());
where  N.fechini between
 time(NOW()-INTERVAL 2 MINUTE) AND TIME(NOW()+INTERVAL 2 MINUTE) or 
  N.fechfin between
 time(NOW()-INTERVAL 2 MINUTE) AND TIME(NOW()+INTERVAL 2 MINUTE) 

select N.* from notificaciones AS N
BETWEEN  N.fechini_noti ;select * from  notificaciones as n  
left join notificacionesRegistros as nr 
on n.id_noti=nr.id_noti
where !(date(nr.fecha)=date(now()) or nr.fecha is null);


