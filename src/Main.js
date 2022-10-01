import styled from "styled-components";
import FlashCard from "./Flashcard";

export default function Main({ addCompletedCounter, resultArray, deck, changeLayout }) {

  function finishActionCard(index, chosenOption) {
    resultArray[index] = chosenOption;
    addCompletedCounter();
  }

  function ifAllAnswered (){
    if(resultArray.filter((r) => r === "none").length === 0){
      changeLayout("Ending message");
    }
  }

  return (
    <MainStyle>
      {deck.map((card, index) => (
        <FlashCard
          key={index}
          card={card}
          index={index}
          result={resultArray[index]}
          finishActionCard={finishActionCard}
          ifAllAnswered={ifAllAnswered}
        />
      ))}
    </MainStyle>
  );
}

// Styled components

const MainStyle = styled.main`
  overflow-y: auto;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;
