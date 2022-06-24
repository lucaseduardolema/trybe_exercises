import React from "react";

class ProfessionalInfo extends React.Component {
  
  cautionAlert = () => {
    alert('Preencha com cuidado esta informação.')
  }

  render() {
    const { handleInfo } = this.props
    return (
      <fieldset>
        <label>
          Resumo do currículo:
          <input type="text" maxLength='1000' name="resumo" required onChange={handleInfo}></input>
        </label>

        <label>
          Cargo:
          <input type="text" maxLength='40' name="cargo" required onMouseEnter={this.cautionAlert} onChange={handleInfo}></input>
        </label>

        <label>
          Descrição do cargo:
          <input type="text" maxLength='500' name="descricao" required onChange={handleInfo}></input>
        </label>
      </fieldset>
    )
  } 
}

export default ProfessionalInfo