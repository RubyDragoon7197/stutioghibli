function mostrarFavoritos() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Películas Favoritas</h2>
        <ul>
            <li>Mi vecino Totoro</li>
            <li>El viaje de Chihiro</li>
            <li>La princesa Mononoke</li>
        </ul>
    `;
}
