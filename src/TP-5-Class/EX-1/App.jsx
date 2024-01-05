import React, { Component } from "react";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            nom:'' , prenom:'' , message:''
        }
    }

    handleNomChange(e){
        this.setState({nom: e.target.value})
    }

    handlePrenomChange(e){
        this.setState({prenom: e.target.value})
    }

    handleButtonClick(){
        this.setState({message: `${this.state.prenom} ${this.state.nom}`})
    }

    render() {
        return (
            <div style={styles.container}>
                <label style={styles.label}>
                    Nom : <input type='text' value={this.state.nom} onChange={(e) => this.handleNomChange(e)} style={styles.input}/>
                </label>
                <br />
                <label style={styles.label}>
                    Prénom : <input type='text' value={this.state.prenom} onChange={(e) => this.handlePrenomChange(e)} style={styles.input}/>
                </label>
                <br />
                <button style={styles.button} onClick={() => this.handleButtonClick()}>Afficher</button>
                <h1 style={styles.message}> Message : {this.state.message}</h1>
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px'
    },
    label: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '18px'
    },
    input: {
        width: '200px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '10px'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '5px',
        marginBottom: '10px'
    },
    message: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333'
    }
}
