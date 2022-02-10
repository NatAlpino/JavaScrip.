import React, { Component } from "react";
import CardNota from "./CardNota";


class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <di>trabalho</di>
          <CardNota/>
        </li>
        <li>
        <di>trabalho</di>
          <CardNota/>
        </li>
        <li>
        <di>estudos</di>
          <CardNota/>
        </li>
      </ul>
    );
  }
}

export default ListaDeNotas;
