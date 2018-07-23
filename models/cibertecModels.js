var mysql = require("mysql");
var config = require("./../utils/Constantes");
var pool = mysql.createPool(config.BD_MYSQLPublic);
class cibertecModels {
    /*obtener Los usuarios*/
    static getUsuarios(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("select ??  from ?? where ??=?", ["*", "usuariosWeb", "id_usu", 1], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(data);
                conexion.release();
            })
        })
    }

    /*Grabar Notificaciones en la BD de la web */
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

     // actualizamod usuario Validado con la WebService de cibertec
    static actualizarUsuarioWS(id,data, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("update usuariosmessenger set correo_usu=?,carrera_usu=?,sede_usu=?,estado=2 where id_usu=?", 
                [data.correo,data.carrera,data.sede,id], function(err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                callback(true);
                conexion.release();
            })
        })
    }

     // registramos usuario de  Messenger
    static registrarUsuario(x, callback) {
        pool.getConnection(function(err, conexion) {
            conexion.query("insert into usuariosmessenger(id_usu,firstname_usu,lastname_usu,perfil_usu,tipo_usu) values(?,?,?,?,?) ", 
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
                console.log(78965);
                callback(data[0]);
                conexion.release();
            })
        })
    }

}
module.exports = cibertecModels;