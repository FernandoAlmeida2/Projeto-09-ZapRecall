import styled from "styled-components";
import deck from "./deck";
import { useState } from "react";
import flipIcon from "./assets/img/setinha.png";

export default function Main(props) {
  const { completedCounter, completeCard, deckArrayState, changeLayoutCard } =
    props;
  function FlashCard(props) {
    const { question, answer, index } = props;
    switch (deckArrayState[index]) {
      case "begin":
        return (
          <CardInicio
            key={index}
            onClick={() => changeLayoutCard(index, "question")}
          >
            Pergunta {index + 1}
            <ion-icon name="play-outline"></ion-icon>
          </CardInicio>
        );
      case "question":
        return (
          <CardQuestion>
            {question}
            <div>
              <img
                src={flipIcon}
                alt="flip down icon"
                onClick={() => {
                  changeLayoutCard(index, "answer");
                  completeCard(completedCounter + 1);
                }}
              />
            </div>
          </CardQuestion>
        );
      case "answer":
        return <CardAnswer>{answer}</CardAnswer>;
      default:
        return <h1>Erro na lógica do cartão</h1>;
    }
  }
  return (
    <MainStyle>
      {deck.map((card, index) => (
        <FlashCard
          question={card.question}
          answer={card.answer}
          index={index}
        />
      ))}
    </MainStyle>
  );
}

// Styled components

const MainStyle = styled.main`
  margin: 24vw 0 70px 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardInicio = styled.section`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: "Recursive", cursive;
`;
const CardQuestion = styled.div`
  width: 300px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--cor-fundo-card);
  cursor: default;
  padding: 20px 10px;
  margin: 10px 0px;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  img {
    cursor: pointer;
  }
`;
const CardAnswer = styled.div`
  width: 300px;
  min-height: 130px;
  display: flex;
  background-color: var(--cor-fundo-card);
  padding: 20px 10px;
  margin: 10px 0px;
`;
