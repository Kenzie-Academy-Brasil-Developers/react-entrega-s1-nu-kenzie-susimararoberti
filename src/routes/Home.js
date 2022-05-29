import "./Home.css";
import HomeImage from "../assets/home.svg";

function Home({ setPage }) {
  return (
    <main className="home">
      <section className="home--container">
        <article className="home--logo">
          <h1>Nu</h1>
          <h2>Kenzie</h2>
        </article>
        <article className="home--texto">
          <h3>Centralize o controle das suas finanças</h3>
          <p>de forma rápida e segura</p>
          <button className="home--button" onClick={() => setPage(true)}>
            Iniciar
          </button>
        </article>
      </section>
      <section className="imagem--container">
        <img className="home--imagem" src={HomeImage} alt="" />
      </section>
    </main>
  );
}

export default Home;
