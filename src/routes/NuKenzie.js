// import { useState } from "react";
import "./NuKenzie.css";
import Form from "../components/Form/Form";
import { useState } from "react";
import List from "../components/List/List";
import TotalMoney from "../components/TotalMoney/TotalMoney";
import CardVazio from "../components/CardVazio";

function NuKenzie({ setPage }) {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [btnTodos, setBtnTodos] = useState(true);
  const [btnEntradas, setBtnEntradas] = useState(false);
  const [btnSaidas, setBtnSaidas] = useState(false);

  const handleFilter = (filtro) => {
    const filtrado = listTransactions.filter((item) => item.type === filtro);
    setFilteredList(filtrado);
    if (filtro === "Entrada") {
      setBtnTodos(false);
      setBtnSaidas(false);
      setBtnEntradas(true);
    } else {
      setBtnTodos(false);
      setBtnSaidas(true);
      setBtnEntradas(false);
    }
  };

  const showAll = () => {
    setBtnTodos(true);
    setBtnSaidas(false);
    setBtnEntradas(false);
    setFilteredList([]);
  };

  return (
    <>
      <header className="Header--NuKenzie">
        <div className="Header--logo">
          <h1>Nu</h1>
          <h2>Kenzie</h2>
        </div>
        <button className="Header--button" onClick={() => setPage(false)}>
          Início
        </button>
      </header>
      <main>
        <section className="form">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setFilteredList={setFilteredList}
          />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <section className="lista">
          <article className="resumo">
            <h4 className="resumo--titulo">Resumo Financeiro</h4>
            <div className="resumo--buttons">
              <button
                className={`resumo--button--todos ${btnTodos && "ativo"}`}
                onClick={showAll}
              >
                Todos
              </button>
              <button
                className={`resumo--button--entrada ${btnEntradas && "ativo"}`}
                onClick={() => handleFilter("Entrada")}
              >
                Entradas
              </button>
              <button
                className={`resumo--button--saída ${btnSaidas && "ativo"}`}
                onClick={() => handleFilter("Saída")}
              >
                Saídas
              </button>
            </div>
          </article>
          {listTransactions[0] ? (
            <List
              id="lista"
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              setFilteredList={setFilteredList}
              listaExibida={filteredList[0] ? filteredList : listTransactions}
            />
          ) : (
            <>
              <p className="card--vazio">
                Você ainda não possui nenhum lançamento
              </p>
              <CardVazio />
              <CardVazio />
              <CardVazio />
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default NuKenzie;
