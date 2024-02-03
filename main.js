



//respuesta dependiendo del servidor
function getCreatures(done) {
    const results = fetch("https://eldenring.fanapis.com/api/creatures?limit=100");

    results
        .then(response => response.json())
        .then(data => {
            if (data && data.success && Array.isArray(data.data)) {
                done(data.data);
            } else {
                console.error("La respuesta de la API no tiene la estructura esperada.");
            }
        })
        .catch(error => {
            console.error("Error al obtener datos:", error);
        });
}

//Acomoda los datos para mostrarlos en la pagina 
getCreatures(creatures => {
    if (Array.isArray(creatures)) {
        creatures.forEach(creature => {
            const article = document.createRange().createContextualFragment(
                `<article>
                    <h2>${creature.name}</h2>
                    <img src="${creature.image}" alt="${creature.name}">
                    <p>${`"`}${creature.description}${`"`}</p>
                    <p>Location: ${creature.location}</p>
                    <p>Drops: ${creature.drops}</p>
                </article>`
            );

            const main = document.querySelector("main");

            main.append(article);
        });
    } else {
        console.error("No se pudo obtener datos válidos para mostrar.");
    }
});
