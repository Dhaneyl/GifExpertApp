//Api del gif y resolucion
export const getGifs = async (category) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=NO6SeM0Wp0Pq73lMl7XrkoOW8HPlcLRn&q=${ category }&limit=15`;
    //Categorry es para que sea insertada por el usuario el gif que quiere buscar
    const resp = await fetch (url);
    const {data} = await resp.json();
    
  
   const gifs = data.map(img=>({
     id: img.id,
     title: img.title,
     url: img.images.downsized_medium.url
  
   }))
   console.log(gifs);
   return gifs;
  }