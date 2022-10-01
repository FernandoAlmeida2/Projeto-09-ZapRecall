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
import EndingMenu from "./EndingMenu";

const resultArray = [];
let resultarrayCreated = false;
const deckList = [
  { name: "React", size: deckReact.length },
  { name: "One Piece", size: deckOnePiece.length },
];

function getDeck(option) {
  if (option === "React") {
    return deckReact;
  }
  return deckOnePiece;
}

export default function App() {
  const [deckSelected, setDeck] = useState("none");
  const [completedCounter, setCompletedCard] = useState(0);
  const [layout, changeLayout] = useState("home");
  const[zapsGoal, setZapsGoal] = useState(0);

  function restartRecallApp(){
    resultArray.splice(0, resultArray.length);
    resultarrayCreated = false;
    setDeck("none");
    setCompletedCard(0);
    changeLayout("home");
    setZapsGoal(0);
  }

  function addCompletedCounter() {
    setCompletedCard((prev) => prev + 1);
  }
  switch (layout) {
    case "home":
      return (
        <Body>
          <ResetStyle />
          <GlobalStyles />
          <MenuLogin
            setDeck={setDeck}
            deckList={deckList}
            setZapsGoal={setZapsGoal}
            changeLayout={changeLayout}
          />
        </Body>
      );
    case "principal":
      if (!resultarrayCreated) {
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
            changeLayout={changeLayout}
          />
          <Footer
            completedCounter={completedCounter}
            resultArray={resultArray}
            total={getDeck(deckSelected).length}
          />
        </Body>
      );
    case "Ending message":
      return(
        <Body>
          <ResetStyle />
          <GlobalStyles />
          <EndingMenu
            resultArray={resultArray}                  
            zapsGoal={zapsGoal}
            restartRecallApp={restartRecallApp}
          />
        </Body>

      )
    default:
      return(
        <h1>Deu merda!</h1>
      )
  }
}

// Styled components

const Body = styled.div`
  color: var(--preto);
  font-family: "Recursive", sans-serif;
`;
