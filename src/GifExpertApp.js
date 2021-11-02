import React, {useState} from 'react'; 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// RAFC para crear el componente y la importacion automatiCA!!
 const GifExpertApp = (  ) => {

    //const categories = [ 'Surfing', 'Coding', 'David Lynch'];
    
    const [categories, setCategories] = useState(['Surfing']);

//    const handleAdd = () =>{
        //alert("LLAMA");
//        setCategories( ['Dreams', ...categories] ); // con el spread (...) se agregan componentes al objeto, arreglo sin convertirlo en un string!!  
//   }

    return( 
            //<Fragment> // EL FRAJMENT LO QUE JACE ES REEMPLAZAR EL DIV, JAY QUE IMPORTARLO; LA OTRA FORMA ES ESTA: 
            // <pre>{ JSON.stringify(yo, null, 3 ) }</pre>  FORMA DE MOSTRAR UN OBJECTO!

                <>
            
                    
                    <h2>GifExpertApp</h2>

                    <AddCategory setCategories={ setCategories } />
                    <ul>
                        {
                            categories.map( category => 
                                <GifGrid 
                                    key={ category }
                                    category={ category } />

                            )

                        }
                    </ul>
                </>
            );

} 


export default GifExpertApp;
