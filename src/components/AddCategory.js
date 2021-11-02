import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {
        setinputValue( e.target.value );
        
    };
 
    const handleSubmit = (e) => {
        
        //alert('valll');
        //setCategories( [...setCategories, inputValue] );
        e.preventDefault(); //evita que el submit del formulario reinicie la pajina
        
        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats  ] );        
            setinputValue('');
        }

    };
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                />    
            </form>        
        </>
    )
}

AddCategory.protTypes = {
    setCategories: PropTypes.func.isRequired //De esta forma obligamos a otros usuarios o programadores a enviar las propiedades necesarias!  
}
