import React , {useState} from "react";
import ChercheBar from "./ChercheBar";
import ResultatList from "./ResultatList";
import { ListFruitLegume } from "./data";

export default function App(){
    const [type,setType] = useState('')

    const styleApp = {
        backgroundColor : 'lightrreen',
        padding : '10px'
    }

    const liste = ListFruitLegume.filter(element => element.type === type);

    return(
        <div style={styleApp}>
            <ChercheBar setType={setType} />
            <h4>le type choisi est : {type}</h4>
            <ResultatList liste={liste} />
        </div>
    )
}