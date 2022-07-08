import React from 'react'

// const ApiKey= 'NO6SeM0Wp0Pq73lMl7XrkoOW8HPlcLRn'

export const GifGrid = ({category}) => {
 const getGif = async () =>{
    const url =`http//:api.giphy.com/v1/gifs/search?api_key=NO6SeM0Wp0Pq73lMl7XrkoOW8HPlcLRn&q=${category}&limit=20`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    

    console.log(data);
 }

 getGif();

  return (
    <>
        <h3>{category}</h3>
    </>
  )
}
