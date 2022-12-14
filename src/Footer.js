import styled from "styled-components";
import errorIcon from "./assets/img/icone_erro.png";
import almostIcon from "./assets/img/icone_quase.png";
import checkIcon from "./assets/img/icone_certo.png";

export default function Footer({ completedCounter, resultArray, total }) {
  function FooterIcon(result) {
    switch (result) {
      case "Não lembrei":
        return errorIcon;
      case "Quase não lembrei":
        return almostIcon;
      default:
        return checkIcon;
    }
  }
  return (
    <FooterStyle>
      <div data-identifier="flashcard-counter">
        {completedCounter}/{total} CONCLUÍDOS
      </div>
      <div>
        {resultArray
          .filter((r) => r !== "none")
          .map((r, i) => (
            <img key={i} src={FooterIcon(r)} alt={FooterIcon(r)} />
          ))}
      </div>
    </FooterStyle>
  );
}

// Styled components

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  height: 70px;
  font-size: 18px;
  color: black;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    margin-right: 6px;
  }
`;
