async function conexionHome() {
    try {
        // URL oficial de la API de Studio Ghibli
        const res = await fetch('https://ghibliapi.herokuapp.com/films');
        if (!res.ok) {
            throw new Error(`Error al obtener datos: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error en la conexión con la API:', error);
        return []; // Devuelve un array vacío en caso de error
    }
}

async function General() {
    try {
        const peliculas = await conexionHome();
        mostrarHome(peliculas);
    } catch (error) {
        console.error('Error al ejecutar General:', error);
    }
}
