import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./styles.css";

export function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>Pergunta atualizado</h2>
      <div id="options-container">
        <p>Opções</p>
        <button>Continuar</button>
      </div>
    </div>
  );
}
