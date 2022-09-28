import styled from "styled-components";
import deck from "./deck";
import errorIcon from "./assets/img/icone_erro.png";
import almostIcon from "./assets/img/icone_quase.png";
import checkIcon from "./assets/img/icone_certo.png";

export default function Footer({ completedCounter, resultArray }) {
  function displayFooterIcon(result) {
    switch (result) {
      case "Não lembrei":
        return errorIcon;
      case "Quase não lembrei":
        return almostIcon;
      default:
        return checkIcon;
    }
  }
  console.log(resultArray);
  return (
    <FooterStyle>
      <div>
        {completedCounter}/{deck.length} CONCLUÍDOS
      </div>
      <div>
        {resultArray
          .filter((r) => r !== "none")
          .map((r, i) => (
            <img key={i} src={displayFooterIcon(r)} alt={displayFooterIcon(r)} />
          ))}
      </div>
    </FooterStyle>
  );
}

// Styled components

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
  min-height: 70px;
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
