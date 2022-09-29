import styled from "styled-components";
import FlashCard from "./Flashcard";

export default function Main({
  increaseCompletedCounter,
  resultArray,
  changeResultArray,
  deck,
}) {
  function finishActionCard(index, chosenOption) {
    changeResultArray(index, chosenOption);
    increaseCompletedCounter();
  }
  return (
    <MainStyle>
      {deck.map((card, index) => (
        <FlashCard
          key={index}
          question={card.question}
          answer={card.answer}
          index={index}
          result={resultArray[index]}
          finishActionCard={finishActionCard}
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
