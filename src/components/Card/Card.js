import "./Card.css";
import Lixeira from "../../assets/lixeira.svg";

function Card({ transaction, index, handleDelete }) {
  return (
    <article
      className={`container--card ${transaction.type === "Entrada" && "verde"}`}
      key={index}
    >
      <div className="card--esquerda">
        <p className="description">{transaction.description}</p>
        <span className="type">{transaction.type}</span>
      </div>
      <div className="card--direita">
        <p className="value">R$ {transaction.value}</p>
        <button className="button" onClick={() => handleDelete(transaction)}>
          <img className="button--imagem" src={Lixeira} alt="Excluir" />
        </button>
      </div>
    </article>
  );
}

export default Card;
