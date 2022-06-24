import React from 'react'

const estados = ['MG', 'SP', 'RJ', 'RN', 'AC', 'AM', 'DF']

class PersonInfo extends React.Component {
  render() {
    const { handleInfo, initNumber } = this.props
    const { state: {nome, email, cpf, endereco, cidade} } = this.props
    return (
      <fieldset>
        <label>
          Nome:
          <input type='text' required name='nome' maxLength='40' value={nome} onChange={handleInfo}></input>
        </label>

        <label>
          Email:
          <input type='email' required name='email' maxLength='50' value={email} onChange={handleInfo}></input>
        </label>

        <label>
          CPF:
          <input type='text' required name='cpf' maxLength='11' value={cpf} onChange={handleInfo}></input>
        </label>

        <label>
          Endereço:
          <input type='text' required name='endereco' maxLength='28' value={endereco} onChange={handleInfo}></input>
        </label>

        <label>
          Cidade:
          <input type='text' required name='cidade' maxLength='28' onBlur={initNumber} value={cidade} onChange={handleInfo}></input>
        </label>

        <label>
          Estado:
          <select required name='estado' onChange={ handleInfo }>
            <option>Selecione</option>
            {estados.map((estado, index) => {
              return (<option key={index}>{estado}</option>)
            })}
          </select>
        </label>

        <label htmlFor='casa'>
          Casa:
          <input type='radio' name='tipo' id='casa' value='casa' onChange={handleInfo}></input>
        </label>

        <label htmlFor='ap'>
          Apartamento:
          <input type='radio' name='tipo' id='ap' value='ap' onChange={handleInfo}></input>
        </label>
      </fieldset>
    )
  }
}

export default PersonInfo