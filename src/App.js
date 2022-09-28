import ResetStyle from "./GlobalResetStyle";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import deck from "./deck";
import MenuLogin from "./MenuLogin";


export default function App() {
  const [menuSelector, changeMenu] = useState("home");
  let deckArrayAux = [];
  deck.forEach(() => deckArrayAux.push("begin"));
  const [deckArrayState, setCardState] = useState(deckArrayAux);
  deckArrayAux = [];
  deck.forEach(() => deckArrayAux.push("none"));
  const [resultArray, setResultArray] = useState(deckArrayAux);
  const [completedCounter, completeCard] = useState(0);

  function changeLayoutCard(index, newState){
    const arrayAux = [...deckArrayState];
    arrayAux[index] = newState;
    setCardState(arrayAux)
  }

  function changeResultArray(index, newState){
    const arrayAux = [...resultArray];
    arrayAux[index] = newState;
    setResultArray(arrayAux)
  }


  if(menuSelector === "home"){
    return(
      <div>
        <ResetStyle />
        <GlobalStyles />
        <MenuLogin changeMenu={changeMenu} />
      </div>
    );
  }
    return (
    <div>
      <ResetStyle />
      <GlobalStyles />
      <Header />
      <Main
        completedCounter={completedCounter}
        completeCard={completeCard}
        deckArrayState={deckArrayState}
        changeLayoutCard={changeLayoutCard}
        resultArray={resultArray}
        changeResultArray={changeResultArray}
      />
      <Footer completedCounter={completedCounter} resultArray={resultArray} />
    </div>
  );
}

// Styled components
