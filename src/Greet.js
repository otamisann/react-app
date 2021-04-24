import { render } from '@testing-library/react';
import React from 'react'

// export default function Greet() {
//     return (
//         <div>
//             <h1>Welcome to React!!</h1>
//         </div>
//     )
// }
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "center"
};
export const Greet = (props) => {
    return <h1 style={mystyle}>Welcome to {props.lang} {props.name}!!!Function component</h1>
}

// export default Greet