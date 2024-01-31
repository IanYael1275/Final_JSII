
const monstruos=async()=>{
    try{
        const respuesta= await fetch('https://eldenring.fanapis.com/api/creatures?limit=70');
        console.log(respuesta);

        if(respuesta.status===200){
            const datos=await respuesta.json();
        console.log(datos); 

        } else if(respuesta.status===404){
            console.log('Han desaparecido los servidores con magia, intenta de nuevo');
        } else{
            console.log('Entro a tierras desconocidas, intente de nuevo');
        }
        
    } catch(error){
        console.log(error);
    }
   
}

monstruos();