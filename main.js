
const monstruos=async()=>{
    try{
        const respuesta= await fetch('https://eldenring.fanapis.com/api/creatures?limit=100');
        console.log(respuesta);
        const datos=await respuesta.json();
    } catch(error){
        console.log(error);
    }
   
}

monstruos();