import styled from "styled-components";
import logo from "./assets/img/logo.png";

export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="Logo" />
        <h1>ZapRecall</h1>
      </div>   
    </HeaderStyle>
  );
}

// Styled components

const HeaderStyle = styled.header`
  width: 100vw;
  height: 80px;
  background-color: var(--cor-fundo);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  font-family: "Righteous", cursive;
  font-size: 36px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(164,64,75,0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 256px;
  }
`;