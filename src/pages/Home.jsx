/* eslint-disable no-unused-vars */
import styles from "/src/pages/Home.module.css";
import Logo from "../components/Logo/logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import dataLoader from "../dataLoader/dataLoader";
import { useState } from "react";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [foodSearch, setFoodSearch] = useState(""); // Pour la recherche dans Aliments
  const [applianceSearch, setApplianceSearch] = useState(""); // Pour la recherche dans Appareils
  const [ustensilsSearch, setUstensilsSearch] = useState(""); // Pour la recherche dans Ustensiles

  return (
    <>
      <header>
        <Logo />
        <h1>
          CHERCHEZ PARMIS PLUS DE 15000 RECETTES DU QUOTIDIEN, SIMPLES ET
          DELICIEUSES
        </h1>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      </header>
      <main>
        <section className={styles.filterContainer}>
          <Filter
            inputValue={inputValue}
            setInputValue={setInputValue}
            foodSearch={foodSearch}
            setFoodSearch={setFoodSearch}
            applianceSearch={applianceSearch}
            setApplianceSearch={setApplianceSearch}
            ustensilsSearch={ustensilsSearch}
            setUstensilsSearch={setUstensilsSearch}
          />
        </section>
        {/* <section className="search-bar"></section> */}
        <section className={styles.cards}>
          <Card
            inputValue={inputValue}
            foodSearch={foodSearch}
            applianceSearch={applianceSearch}
            ustensilsSearch={ustensilsSearch}
          />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
