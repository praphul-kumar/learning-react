import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // <> is alternative of <Fragment> tag 
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples />
      </main>
    </>
  );
}

export default App;
