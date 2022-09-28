import styled from "styled-components";
import deck from "./deck";
import { useState } from "react";
import flipIcon from "./assets/img/setinha.png";

export default function Main(props) {
  const {
    completedCounter,
    completeCard,
    deckArrayState,
    changeLayoutCard,
    resultArray,
    changeResultArray,
  } = props;
  function FlashCard(props) {
    const { question, answer, index } = props;
    switch (deckArrayState[index]) {
      case "begin":
        return (
          <CardInicio
            onClick={() => changeLayoutCard(index, "question")}
            result={resultArray[index]}
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
        return (
          <CardAnswer>
            {answer}
            <div>
              <ActionButton
                value="Não lembrei"
                onClick={() => {
                  changeResultArray(index, "Não lembrei");
                  changeLayoutCard(index, "begin");
                }}
              >
                Não lembrei
              </ActionButton>
              <ActionButton
                value="Quase não lembrei"
                onClick={() => {
                  changeResultArray(index, "Quase não lembrei");
                  changeLayoutCard(index, "begin");
                }}
              >
                Quase não lembrei
              </ActionButton>
              <ActionButton
                value="Zap!"
                onClick={() => {
                  changeResultArray(index, "Zap!");
                  changeLayoutCard(index, "begin");
                }}
              >
                Zap!
              </ActionButton>
            </div>
          </CardAnswer>
        );
      default:
        return <h1>Erro na lógica do cartão</h1>;
    }
  }
  return (
    <MainStyle>
      {deck.map((card, index) => (
        <FlashCard
          key={index}
          question={card.question}
          answer={card.answer}
          index={index}
        />
      ))}
    </MainStyle>
  );
}

// Styled components

function resultColorEffect(value) {
  switch (value) {
    case "Não lembrei":
      return "#FF3030";
    case "Quase não lembrei":
      return "#FF922E";
    case "Zap!":
      return "#2FBE34";
    default:
      return "none";
  }
}

const MainStyle = styled.main`
  margin: 24vw 0 70px 0;
  overflow-y: auto;
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
  color: ${(props) => resultColorEffect(props.result)};
  text-decoration: ${(props) =>
    props.result === "none" ? "none" : "line-through"};
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: "Recursive", cursive;

  ion-icon {
    color: var(--preto);
    width: 23px;
    height: 23px;
  }
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
    color: var(--preto);
    width: 23px;
  }
`;
const CardAnswer = styled.div`
  width: 300px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--cor-fundo-card);
  padding: 20px 10px 10px 10px;
  margin: 10px 0px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  height: 40px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => resultColorEffect(props.value)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
