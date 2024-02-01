
function getCreatures(done){
    const resultado=fetch('https://eldenring.fanapis.com/api/creatures');
    resultado
    .then(response=>response.json())
    .then(data=>{
        done(data)
    });


}

/*getCreatures(data=>{ 
    console.log(data);
});*/


getCreatures(data=>{
    data.results.forEach(Creatures=>{
        const article=document.createRange().createContextualFragment(`
        <article>
            <div class="imagen">
            <img src="${Creatures.image}" alt="Criatura">
            </div>
            <h2>${Creatures.name}</h2>
            <span>${Creatures.id}<span>
        </article>
        `);
        const main=document.querySelector("main");
        main.append(article);
    });
});










// En caso de ser valida la peticion muestra los datos en consola
/*const cargarMonstruos=async()=>{
    try{
        const respuesta= await fetch('https://eldenring.fanapis.com/api/creatures?limit=80');
        console.log(respuesta);

        if(respuesta.status===200){
            const info=await respuesta.json();
            console.log(info); 
            

        } else if(respuesta.status===404){
            console.log('Han desaparecido los servidores con magia, intenta de nuevo');
        } else{
            console.log('Entro a tierras desconocidas, intente de nuevo');
        }
        
    } catch(error){
        console.log(error);
    }
   
}

cargarMonstruos();*/