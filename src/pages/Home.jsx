import styles from "/src/pages/Home.module.css";
import Logo from "../components/Logo/logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";

function home() {
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
        <section className={styles.filterContainer}>
          <Filter />
        </section>
        {/* <section className="search-bar"></section> */}
        <section className="cards"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default home;
