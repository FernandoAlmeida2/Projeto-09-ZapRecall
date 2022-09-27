import styled from "styled-components";
import deck from "./deck";

export default function Footer(props) {
  const completedCounter = props.completedCounter;
  return (
    <FooterStyle>
      <div>
        {completedCounter}/{deck.length} CONCLUÍDOS
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
  align-items: center;
  justify-content: center;
`;
