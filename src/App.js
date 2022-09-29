import ResetStyle from "./GlobalResetStyle";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import deckReact from "./deckReact";
import deckOnePiece from "./deckOnePiece";
import MenuLogin from "./MenuLogin";
import styled from "styled-components";

function getDeck(option) {
  if (option === "React") {
    return deckReact;
  }
  return deckOnePiece;
}

export default function App() {
  const [menuSelector, changeMenu] = useState("home");
  const [deckSelected, setDeck] = useState("none");
  let deckArrayAux = [];
  const deck = getDeck(deckSelected);
  deck.forEach(() => deckArrayAux.push("none"));
  const [resultArray, setResultArray] = useState(deckArrayAux);
  const [completedCounter, setCompletedCard] = useState(0);

  function changeResultArray(index, newState) {
    const arrayAux = [...resultArray];
    arrayAux[index] = newState;
    setResultArray(arrayAux);
  }

  function increaseCompletedCounter(){
    setCompletedCard(completedCounter + 1);
  }
  if (menuSelector === "home") {
    return (
      <Body>
        <ResetStyle />
        <GlobalStyles />
        <MenuLogin
          changeMenu={changeMenu}
          deckSelected={deckSelected}
          setDeck={setDeck}
        />
      </Body>
    );
  }
  return (
    <Body>
      <ResetStyle />
      <GlobalStyles />
      <Header />
      <Main
        increaseCompletedCounter={increaseCompletedCounter}
        resultArray={resultArray}
        changeResultArray={changeResultArray}
        deck={deck}
      />
      <Footer
        completedCounter={completedCounter}
        resultArray={resultArray}
        deck={deck}
      />
    </Body>
  );
}

// Styled components

const Body = styled.div`
    color: var(--preto);
    font-family: "Recursive", sans-serif;
`;
