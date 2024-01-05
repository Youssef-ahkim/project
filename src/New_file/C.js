import { useEffect,useState } from "react"

export default function C(){
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [age,setAge] = useState(0)
    useEffect(() =>{
        document.title = nom +' '+prenom;
    } ,[nom,prenom])

    return(
        <>
            <input type="text" onChange={(event)=>setNom(event.target.value)} placeholder="nom"/>
                <br />
            <input type="text"  onChange={(event)=>setPrenom(event.target.value)} placeholder="prenom"/>
                <br />
            <input type="number" onChange={(event)=>setAge(event.target.value)} placeholder="age"/>
                < br />
            <h2>Salutation</h2>
            <p>salut {nom} {prenom} votre age est : {age} </p>
        </>
    )
}