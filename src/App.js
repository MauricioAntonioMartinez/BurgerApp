import React from "react";
import LayOut from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <LayOut>
        <BurgerBuilder />
      </LayOut>
    </div>
  );
}

export default App;
