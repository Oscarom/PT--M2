import React from "react";

export default class Botones extends React.Component{
    render(){
        console.log(this.props)
        const alerta = this.props.alerts
        return(
            <div>
              <button onClick={() => alert(alerta.m1)}>Modulo 1</button>
              <button onClick={() => alert(alerta.m2)}>Modulo 2</button>
            </div>
        ) 
    }
}