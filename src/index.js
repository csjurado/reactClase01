import React from "react";
import ReactDOM from "react-dom/client";
import Hola,{Hola2} from './Sumar.js'
import Producto from "./Producto.js";
import { Posts } from "./Posts.js";

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1> Hola Mundo mi Nombre es Carlos Jurado</h1>);

// function Hola() {
//     const aprobado = false
//     return <h1>{aprobado?'Aprobado':'Reprobado'}</h1>
// }

// function Hola() {
//     const aprobado = false
//     return (<div>
//         <h1> {aprobado.toString()}</h1>
//     </div>)
// }

// function Hola() {
//     const user = {
//         nombre:'Carlos',
//         apellido:'Jurado'
//     }
//     return (<div>
//         <h1> {user.nombre}</h1>
//         <h3> {user.apellido}</h3>
//     </div>)
// }

// function Hola(){
//     function sumar(a,b){
//         return a+b;
//     }
//     return (<div>
//         <h1> {sumar(5,9)}</h1>
//     </div>)
// }


root.render(
    <div>
        <Hola/>
        <Hola2/>
        <Producto/>
        <Producto titulo ="titulo 1 " descripcion ="Esta es una descripción"/>
        <Producto y={13}/>
        <Producto a={[1,4,9,6,0,-8]}/>
        <Posts/>

    </div>
)