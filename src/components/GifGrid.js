

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { useState, useEffect } from 'react/cjs/react.development';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( {category}) => {

        const { data:images, loading } = useFetchGifs( category );
        console.log(loading);
  
        return (
           
            <>
               <h3>{ category }</h3>
               { loading && <p>Loading...</p>  }  
               <div className="cardGrid">
                        {
                            images.map( img =>(
                                <GifGridItem 
                                    key={ img.id }
                                    {...img } />
                            ))
                        }   
                </div>
            
            </>
        )
   
}
