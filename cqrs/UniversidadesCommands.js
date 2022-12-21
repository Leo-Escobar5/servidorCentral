const _UniversidadesDAO = require('../dao/UniversidadesDAO');


exports.updatePerfil = async function (datos) {

    if(datos.nueva_contrasena == 'string') datos.nueva_contrasena = '';

    if (!datos.nombre_universidad) return { error: 'Es necesario indicar el nombre de la universidad' }
    if (!datos.grupo) return { error: 'Es necesario indicar el grupo al que perteneces' }
    if (!datos.url_recuperacion_libro) return { error: 'Es necesario indicar la url de recuperación del libro' }
    if (`${datos.nombre_universidad}`.length > 50) return { error: 'El nombre de la universidad no debe pasar de 100 caracteres' }
    if (`${datos.grupo}`.length > 50) return { error: 'El nombre del grupo no debe pasar de 50 caracteres' }
    if (datos.nueva_contrasena & `${datos.nueva_contrasena}`.length > 50) return { error: 'La contraseña no debe pasar de 50 caracteres' }


    let existente = await _UniversidadesDAO.getById(datos.universidad_id);
    if (datos.nueva_contrasena) existente.nueva_contrasena = datos.nueva_contrasena;
    existente.nombre_universidad = datos.nombre_universidad;
    existente.url_recuperacion_libro = datos.url_recuperacion_libro;
    existente.grupo = datos.grupo;

    await _UniversidadesDAO.update(existente);

    let actualizado = await _UniversidadesDAO.getById(datos.universidad_id);
    if (actualizado) delete actualizado.password;
    return actualizado;
}

