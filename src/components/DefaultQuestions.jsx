import arrayShuffle from "array-shuffle";
import React, { useState } from "react";

import Clues from "./Clues";
import questions from '../questions.json'


const DefaultQuestions = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(questions.length - 1);

    const clues = arrayShuffle(questions[activeQuestionIndex].Clues)

    while (clues.length > 12) {
        clues.pop()
    }

    return <Clues clues={clues} activeQuestionIndex={activeQuestionIndex} setActiveQuestionIndex={setActiveQuestionIndex} />
}

export default DefaultQuestions
