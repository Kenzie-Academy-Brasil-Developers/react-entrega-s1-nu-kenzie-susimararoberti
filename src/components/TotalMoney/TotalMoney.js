import "./TotalMoney.css";

function TotalMoney({ listTransactions }) {
  //usar um reduce na list para retornar o total ->
  return (
    <article className="money">
      <div className="container--money">
        <div className="money--total">
          <p className="total--texto">Valor Total:</p>
          <p className="total--valor">
            R$
            {listTransactions.reduce(
              (acc, { value, type }) =>
                type === "Entrada" ? acc + value : acc - value,
              0
            )}
          </p>
        </div>
        <span className="money--texto">O valor se refere ao saldo</span>
      </div>
    </article>
  );
}

export default TotalMoney;
