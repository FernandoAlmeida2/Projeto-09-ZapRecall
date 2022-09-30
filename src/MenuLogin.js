import styled from "styled-components";
import logo from "./assets/img/logo.png";

export default function MenuLogin({ setDeck, deckList }) {
  let optionSelected = "";
  return (
    <MenuStyle>
      <img src={logo} alt={"logo"} />
      <h1>ZapRecall</h1>
      <select onChange={(e) => (optionSelected = e.target.value)}>
        <option data-identifier="deck-selector" value="">
          Escolha seu deck
        </option>
        {deckList.map((deckName) => (
          <option key={deckName} data-identifier="deck-option" value={deckName}>
            {deckName}
          </option>
        ))}
      </select>
      <button
        data-identifier="start-btn"
        onClick={() =>
          optionSelected !== ""
            ? setDeck(optionSelected)
            : alert("deck não selecionado")
        }
      >
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

  select {
    width: 246px;
    height: 43px;
    color: #adadad;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }
`;
