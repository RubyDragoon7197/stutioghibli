async function General() {
    try {
        // URL oficial de la API de Studio Ghibli
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }
        const peliculas = await response.json();
        mostrarPeliculas(peliculas); // Renderiza las películas en la página
    } catch (error) {
        console.error('Error al cargar la API:', error);
        const app = document.getElementById('app');
        app.innerHTML = '<p>Error al cargar las películas. Intenta nuevamente más tarde.</p>';
    }
}

function mostrarPeliculas(peliculas) {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    // Renderiza las películas en tarjetas
    app.innerHTML = peliculas.map(pelicula => `
        <div class="c-lista-pokemon">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}

function buscarPeliculas(query) {
    const app = document.getElementById('app');
    const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(query.toLowerCase())
    );

    if (!peliculasFiltradas.length) {
        app.innerHTML = '<p>No se encontraron películas con ese término.</p>';
        return;
    }

    app.innerHTML = peliculasFiltradas.map(pelicula => `
        <div class="c-lista-pokemon">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}

function mostrarHome(peliculas) {
    const app = document.getElementById('app');
    if (!peliculas.length) {
        app.innerHTML = '<p>No se encontraron películas.</p>';
        return;
    }

    // Renderiza las películas en tarjetas
    app.innerHTML = peliculas.map(pelicula => `
        <div class="c-lista-pokemon">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.description}</p>
        </div>
    `).join('');
}
