export function Hola(){
    function sumar(a,b){
        return a+b;
    }
    return <h1> {sumar(10,9)}</h1>
}

export function Hola2(){
    function resta(a,b){
        return a-b;
    }
    return <h1> {resta(10,9)}</h1>
}
export default Hola