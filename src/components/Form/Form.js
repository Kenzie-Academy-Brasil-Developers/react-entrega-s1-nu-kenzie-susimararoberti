import "./Form.css";
// import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  // const [listInput, setListInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const description = event.target.descricao.value;
    const value = Number(event.target.valor.value);
    const type = event.target.tipo.value;
    const transaction = { description, value, type };
    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <article className="container">
      <form className="container--formulario" onSubmit={handleSubmit}>
        <p>Descrição</p>
        <input
          className="formulario--descricao"
          name="descricao"
          type="text"
          placeholder="Digite aqui sua descrição"
        />
        <span className="formulario--exemplo">Ex: Compra de roupas</span>
        <div className="formulario--div">
          <div className="div--valor">
            <p>Valor</p>
            <input
              className="formulario--valor"
              name="valor"
              type="number"
              placeholder="R$"
            />
          </div>
          <div className="div--opcoes">
            <p>Tipo de Valor</p>
            <select className="formulario--opcoes" name="tipo" id="">
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <button className="formulario--button" type="submit">
          Inserir Valor
        </button>
      </form>
    </article>
  );
}

export default Form;
