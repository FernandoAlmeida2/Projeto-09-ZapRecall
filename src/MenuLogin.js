import styled from "styled-components";
import logo from "./assets/img/logo.png";

export default function MenuLogin({
  setDeck,
  deckList,
  setZapsGoal,
  changeLayout,
}) {
  let optionSelected = "";
  let zapsGoalAux;
  function verifyOptions() {
    if (
      deckList.filter((d) => d.name === optionSelected && zapsGoalAux <= d.size)
        .length === 1
    ) {
      if (zapsGoalAux > 0) {
        setDeck(optionSelected);
        changeLayout("principal");
        setZapsGoal(zapsGoalAux);
      } else {
        alert("Meta de zaps deve ser maior ou igual a 1");
      }
    } else {
      alert(
        "deck não selecionado ou meta de zaps maior do que o tamanho do deck"
      );
    }
  }

  return (
    <MenuStyle>
      <img src={logo} alt={"logo"} />
      <h1>ZapRecall</h1>
      <select onChange={(e) => (optionSelected = e.target.value)} data-identifier="deck-selector" >
        <option value="">
          Escolha seu deck
        </option>
        {deckList.map((deck) => (
          <option
            key={deck.name}
            data-identifier="deck-option"
            value={deck.name}
          >
            {deck.name}
          </option>
        ))}
      </select>
      <input
        data-identifier="goals-input"
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => (zapsGoalAux = e.target.value)}
      ></input>
      <button data-identifier="start-btn" onClick={verifyOptions}>
        Iniciar Recall!
      </button>
    </MenuStyle>
  );
}

const MenuStyle = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

  h1 {
    margin: 30px 0;
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
  }

  select {
    width: 246px;
    height: 43px;
    color: #adadad;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    padding: 5px;
  }
  input {
    margin-top: 20px;
    width: 246px;
    height: 43px;
    color: #d70900;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    border-radius: 5px;
    border: 1px;
    padding: 10px;

    ::placeholder {
      opacity: 1;
      color: #adadad;
    }
  }

  button {
    width: 246px;
    height: 54px;
    padding: 16px 22px;
    border-radius: 5px;
    color: #d70900;
    border: 1px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background-color: #cea2a0;
  }
`;
