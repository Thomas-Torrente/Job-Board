import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="header">
        <Header title="The Job Board" />
      </div>
      <div className="contenair">
        <div className="block1">
          <Jobs
            cardTitle="Full Time Sales Associate - Sydney Boutique"
            post="CDI - Australie - Sydney"
          />
        </div>

        <div className="block2">
          <Jobs
            cardTitle="Agent de Sécurité - Pantin"
            post="CDI - France - Pantin"
          />
        </div>

        <div className="block3">
          <Jobs
            cardTitle="Responsable d'Atelier (H/F)"
            post="CDD - France - Paris"
          />
        </div>

        <div className="block4">
          <Jobs cardTitle="Chef de Projets" post="CDD - France - Paris" />
        </div>

        <div className="block5">
          <Jobs cardTitle="Développeur React.js" post="CDI - France - Paris" />
        </div>

        <div className="block6">
          <Jobs
            cardTitle="Sales Associate Stockholm"
            post="CDI - Suède - Stockholm"
          />
        </div>
        <div className="block7">
          <Jobs
            cardTitle="Vendeur/se - Crans Montana"
            post="CDI - Suisse - Crans-Montana"
          />
        </div>

        <div className="block8">
          <Jobs
            cardTitle="CRM & Data Quality Analyst"
            post="CDI - USA - New York"
          />
        </div>

        <div className="block9">
          <Jobs cardTitle="Infirmier (H/F)" post="CDI - France - Pantin" />
        </div>
      </div>
      <Footer madeBy="Thomas Torrente at Le Reacteur" />
    </>
  );
}

export default App;
