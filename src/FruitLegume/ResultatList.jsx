import React  from "react";



export default function ResultatList(props){
    const {liste} = props;

    const styleResultatListe = {
        backgrounfColor : 'blue',
        width : '400px',
        margin : 'auto',
        padding : '5px',
        marginTop : '5px'
    }
    return(
        <div style={styleResultatListe}>
            <h3> component ResultatList </h3>
            {
                liste.lenght === 0  ? "nothing found" : 
                <ul>
                    {liste.map((element , index) => <li key={index}> {element.nom}</li>)}
                </ul>
            }
        </div>
    )
}