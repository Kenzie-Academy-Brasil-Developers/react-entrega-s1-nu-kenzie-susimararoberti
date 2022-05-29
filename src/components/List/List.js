import Card from "../Card/Card";
import "./List.css";

function List({ listTransactions, listaExibida, setListTransactions }) {
  function handleDelete(removeTransaction) {
    const filtrados = listTransactions.filter(
      (item) => item !== removeTransaction
    );
    setListTransactions(filtrados);
  }

  return (
    <>
      {listaExibida &&
        listaExibida.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            handleDelete={handleDelete}
          />
          // <p key={index}>{transaction.description}</p>
        ))}
    </>
  );
}

export default List;
