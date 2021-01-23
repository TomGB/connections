import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button, Card, Col, DatePicker, message, Row } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import arrayShuffle from 'array-shuffle'
import ReactCardFlip from 'react-card-flip';

import questions from './questions.json'
import splitArray from 'split-array'

console.log(questions)

const Clue = ({ text, index, show, setShow }) => {
  return <ReactCardFlip isFlipped={show}>
    <Card
      style={{ textAlign: 'center', fontSize: '30px' }}
      bodyStyle={{ padding: '24px 0px', color: 'white', background: '#3a3d3e' }}
      onClick={() => setShow(true)}
    >{index + 1}</Card>
    <Card
      style={{ textAlign: 'center', fontSize: '30px' }}
      bodyStyle={{ padding: '24px 0px' }}
      onClick={() => setShow(false)}
    >{text}</Card>
  </ReactCardFlip>
}

const Clues = ({ clues, setActiveQuestionIndex, activeQuestionIndex }) => {
  const [shownClues, setShownClues] = useState(Array.from({ length: 12 }, () => false))

  const setupShow = (index) => (shown) => {
    shownClues[index] = shown
    setShownClues([...shownClues])
  }

  const cluesWithIndex = clues.map((clue, index) => ({ clue, index }))

  const rows = splitArray(cluesWithIndex, 4)

  const nextQuestion = async () => {
    setShownClues(Array.from({ length: 12 }, () => false))
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (activeQuestionIndex !== 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1)
    } else {
      message.success('That\'s all folks');
    }
  }

  const hideAll = () => {
    setShownClues(Array.from({ length: 12 }, () => false))
  }

  const showAll = () => {
    setShownClues(Array.from({ length: 12 }, () => true))
  }

  return <div style={{ width: '800px', margin: 'auto' }}>
    <div style={{ width: '800px' }}>{
      rows.map(columns => <Row gutter={[16, 16]}>{
        columns.map(({ clue, index }) => <Col span={6}>
          <Clue text={clue} index={index} show={shownClues[index]} setShow={setupShow(index)} />
        </Col>)
      }</Row>)
    }</div>
    <Button onClick={showAll}>Reveal All</Button>
    <Button onClick={hideAll}>Hide All</Button>
    <Button onClick={nextQuestion}>Next Question</Button>
  </div>
}

const App = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(questions.length - 1);

  console.log(activeQuestionIndex)

  const clues = arrayShuffle(questions[activeQuestionIndex].Clues)

  while (clues.length > 12) {
    clues.pop()
  }

  return <>
    <Clues clues={clues} activeQuestionIndex={activeQuestionIndex} setActiveQuestionIndex={setActiveQuestionIndex} />
  </>
};

render(<App />, document.getElementById('root'));
