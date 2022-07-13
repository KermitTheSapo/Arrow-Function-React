import React, {Component} from "react"
import "./styles.css";

export default class nome extends Component {
  Mensagem = () => {
    return (
      <p>Mensagem</p>
    )
  }
  Numero = (a) => {
    return (
      <p>{a * 2}</p>
    )
  }

  render(){
    return(
      <div>
        {this.Mensagem()}
        {this.Numero(5)}
      </div>
    )
  }
}

