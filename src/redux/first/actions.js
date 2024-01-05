export const increment = (pas) => {
    return{
        type : "INCREMENT", payload:pas
    }
}

export const decrement = (pas) => {
    return{
        type : "DECREMENT", payload:pas
    }
}