import "/src/pages/Home.css";
import Logo from "../components/Logo/logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";

function Accueil() {
  return (
    <>
      <header>
        <Logo />
        <h1>
          CHERCHEZ PARMIS PLUS DE 15000 RECETTES DU QUOTIDIEN, SIMPLES ET
          DELICIEUSES
        </h1>
        <SearchBar />
      </header>
      <main>
        <section className="filter-container">
          <Filter />
        </section>
        {/* <section className="search-bar"></section> */}
        <section className="cards"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default Accueil;
