import React from "react";
import PersonInfo from "./PersonInfo";
import ProfessionalInfo from "./ProfessionalInfo";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: ''
    }
  }

  initNumber = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (name === 'cidade') value = value.match(/^\d/) ? '' : value
    this.setState({
      [name] : value
    })
  }

  validaEndereco = (endereco) => endereco.replace(/[^\w\s]/gi, '')

  handleInfo = ({ target }) => {
    const { name } = target;
    let { value } = target
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = this.validaEndereco(value)
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form>
        <h1>Cadastro</h1>
        <PersonInfo 
          handleInfo={this.handleInfo} 
          validaEndereco={this.validaEndereco} 
          initNumber={this.initNumber}
          state={this.state}
        />
        <ProfessionalInfo 
          handleInfo={this.handleInfo}
        />
      </form>
    )
  }
}

export default Form