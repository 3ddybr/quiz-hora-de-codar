import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Quiz from "../../img/quiz.svg";
import "./styles.css";

export function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  // console.log(quizState);
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão pra começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
}
