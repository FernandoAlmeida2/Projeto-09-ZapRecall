import styled from "styled-components";
import ResetStyle from "./GlobalResetStyle";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import deck from "./deck";


export default function App() {
  const deckArrayAux = [];
  deck.forEach(() => deckArrayAux.push("begin"));
  const [deckArrayState, setCardState] = useState(deckArrayAux);
  const [completedCounter, completeCard] = useState(0);

  function changeLayoutCard(index, newState){
    const arrayAux = [...deckArrayState];
    arrayAux[index] = newState;
    setCardState(arrayAux)
  }

  return (
    <div className="pai-de-todos">
      <ResetStyle />
      <GlobalStyles />
      <Header />
      <Main
        completedCounter={completedCounter}
        completeCard={completeCard}
        deckArrayState={deckArrayState}
        changeLayoutCard={changeLayoutCard}
      />
      <Footer completedCounter={completedCounter} />
    </div>
  );
}

// Styled components
