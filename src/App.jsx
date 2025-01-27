import Home from "./pages/Home";
import Loader from "./components/loader/Loading";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
        </>
      )}
    </>
  );
}

// Esse condigo de concerta colocando O COMPONENTE HEADER dentro do componente
// Home, porém, esse n é o jeito correto de se fazer ( ao meu ver )

// link do site para me inspirar no loading  : https://www.stefanobartoletti.it/
export default App;
