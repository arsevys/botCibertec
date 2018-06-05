var mysql = require("mysql");
var config = require("./../utils/Constantes");
var pool = mysql.createPool(config.BD_MYSQL);
class cibertecModels {
    static getUsuarios(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("select ??  from ?? where ??=?", ["*", "usuarios", "id_usu", 1], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(data);
                conexion.release();
            })
        })
    }
    static insertarNotificaciones(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query(`insert into notificaciones(titulo_noti ,descri_noti ,fechini_noti ,fechfin_noti ,tipo_noti ,dirigido_noti,estado,userid)
             values(?,?,?,?,?,?,?,?)`, [x.titulo, x.descri, x.fini, x.ffin, x.tiponoti, x.dirigido, "I", 1], (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(data);
                conexion.release();
            })
        })
    }

    // si existe usuario en messenger para validar si es nuevo
    static existeUsuario(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("call existeUsuario(?)", [x], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(data[0][0].result);
                conexion.release();
            })
        })
    }


     // registramos usuario de  Messenger
    static registrarUsuario(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("insert into usuariosMessenger(id,first_name,last_name,perfil,tipo_usu) values(?,?,?,?,?) ", 
            	[x.id,x.first_name,x.last_name,x.profile_pic,2], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(null,data);
                conexion.release();
            })
        })
    }

 // metodo Clave para obtener los usuarios
    static enviarNotificaciones(callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("call test()", [], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(data[0]);
                conexion.release();
            })
        })
    }

}
module.exports = cibertecModels;