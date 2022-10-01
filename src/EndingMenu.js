import styled from "styled-components";
import fail from "./assets/img/sad.png";
import success from "./assets/img/party.png";

export default function EndingMenu({ resultArray, zapsGoal, restartRecallApp }) {
  const hits = resultArray.filter((r) => r === "Zap!").length;
  const achieved = (hits >= Number(zapsGoal));
  return (
    <MenuContainer>
      <img src={achieved ? success : fail} alt={"logo"} />
      <TitleMessage achieved={achieved}>
        {achieved ? "Parabéns!" : "Putz!"}
      </TitleMessage>
      <h1>
        Você obteve {hits} zaps de {resultArray.length} perguntas.
      </h1>
      <button onClick={restartRecallApp}>Voltar ao menu inicial</button>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
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
  background-color: rgb(247, 163, 163);
  gap: 30px;
  font-family: "Righteous", cursive;

  img {
    width: 136px;
  }

  h1 {
    font-size: 36px;
    color: white;
    text-align: center;
    margin: 0 20px;
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

const TitleMessage = styled.div`
  font-size: 36px;
  color: ${(props) => (props.achieved ? "#2FBE34" : "#FF3030")};
`;
