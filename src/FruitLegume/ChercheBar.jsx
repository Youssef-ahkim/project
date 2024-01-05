import React  from "react";



export default function ChercheBar(props){
    const handleOnchange=(e)=>{
        props.setType(e.target.value)
    }

    const stylehercheBar = {
        textAlign : 'center',
        backgrounfColor : 'pink',
        width : '400px',
        margin : 'auto',
        padding : '10px',
    }

    return(
        <div style={stylehercheBar} onChange={(e)=>handleOnchange(e)}>
            Choisir un type de produit :
            <select>
                <option value="rien" key="rien" selected>Choisir un type</option>
                <option value="legume" key="legume" >legume</option>
                <option value="fruit" key="fruit" >fruit</option>
            </select>
        </div>
    )


    
}