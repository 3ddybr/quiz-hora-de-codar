import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../img/quiz.svg";
import "./style.css";

export function Welcome() {
  const quizState = useContext(QuizContext);

  console.log(quizState);
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão pra começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
}
