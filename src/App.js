import styled from "styled-components";
import ResetStyle from "./GlobalResetStyle";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [completedCounter, completeCard] = useState(0);
  return (
    <div className="pai-de-todos">
      <ResetStyle />
      <GlobalStyles />
      <Header />   
      <Main completedCounter={completedCounter} completeCard={completeCard} />
      <Footer completedCounter={completedCounter} completeCard={completeCard} />
    </div>
  );
}

// Styled components

