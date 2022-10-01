import styled from "styled-components";
import flipIcon from "./assets/img/seta_virar.png";
import playIcon from "./assets/img/seta_play.png";
import errorIcon from "./assets/img/icone_erro.png";
import almostIcon from "./assets/img/icone_quase.png";
import checkIcon from "./assets/img/icone_certo.png";
import { useState, useRef } from "react";

const actions = [
  { action: "Não lembrei", id: "forgot-btn" },
  { action: "Quase não lembrei", id: "almost-forgot-btn" },
  { action: "Zap!", id: "zap-btn" },
];

function displayIcon(result) {
  switch (result) {
    case "Não lembrei":
      return errorIcon;
    case "Quase não lembrei":
      return almostIcon;
    case "Zap!":
      return checkIcon;
    default:
      return playIcon;
  }
}

export default function FlashCard({ card, index, result, finishActionCard, ifAllAnswered }) {
  const { question, answer } = card;
  const [cardState, setCardState] = useState("begin");
  const cardRef = useRef();

  function chosenAction(index, chosenOption) {
    finishActionCard(index, chosenOption);
    setCardState("begin");
    if(!ifAllAnswered()){
      cardRef.current.scrollIntoView({ behavior: 'smooth' })
    } 
      


  }
  switch (cardState) {
    case "begin":
      return (
        <CardInicio data-identifier="flashcard-index-item" result={result}>
          Pergunta {index + 1}
          <img
            data-identifier={
              result === "none" ? "flashcard-show-btn" : "flashcard-status"
            }
            src={displayIcon(result)}
            alt={displayIcon(result)}
            onClick={() => (result === "none" && setCardState("question"))}
          />
        </CardInicio>
      );
    case "question":
      return (
        <CardQuestion>
          <span>{question}</span>
          <div>
            <img
              data-identifier="flashcard-turn-btn"
              src={flipIcon}
              alt="flip down icon"
              onClick={() => setCardState("answer")}
            />
          </div>
        </CardQuestion>
      );
    case "answer":
      return (
        <CardAnswer ref={cardRef}>
          <span data-identifier="flashcard-answer" >{answer}</span>    
          <div>
            {actions.map((a) => (
              <ActionButton
                key={a.id}
                data-identifier={a.id}
                value={a.action}               
                onClick={() => chosenAction(index, a.action)}
              >
                {a.action}
              </ActionButton>
            ))}
          </div>
        </CardAnswer>
      );
    default:
      return <h1>Erro na lógica do cartão</h1>;
  }
}

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

//Styles

const CardInicio = styled.section`
  width: 300px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: ${(props) => resultColorEffect(props.result)};
  text-decoration: ${(props) =>
    props.result === "none" ? "none" : "line-through 2px"};
  border-radius: 5px;
  font-weight: 700;
  margin: 10px 0px;
  padding: 10px 10px;

  img {
    width: 23px;
    height: 23px;
    cursor: pointer;
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
