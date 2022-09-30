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
const resultArray = []
let resultarrayCreated = false;
const deckList = ["React", "One Piece"];

function getDeck(option) {
  if (option === "React") {
    return deckReact;
  }
  return deckOnePiece;
}

export default function App() {
  const [deckSelected, setDeck] = useState("none");
  const [completedCounter, setCompletedCard] = useState(0);

  function addCompletedCounter() {
    setCompletedCard((prev) => prev + 1);
  }
  if (deckSelected === "none") {
    return (
      <Body>
        <ResetStyle />
        <GlobalStyles />
        <MenuLogin setDeck={setDeck} deckList={deckList} />
      </Body>
    );
  } else {
    if(!resultarrayCreated){
      getDeck(deckSelected).forEach(() => resultArray.push("none"));
      resultarrayCreated = true;
    }
    return (
      <Body>
        <ResetStyle />
        <GlobalStyles />
        <Header />
        <Main
          addCompletedCounter={addCompletedCounter}
          resultArray={resultArray}
          deck={getDeck(deckSelected)}
        />
        <Footer
          completedCounter={completedCounter}
          resultArray={resultArray}
          total={getDeck(deckSelected).length}
        />
      </Body>
    );
  }
}

// Styled components

const Body = styled.div`
  color: var(--preto);
  font-family: "Recursive", sans-serif;
`;
