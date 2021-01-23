import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button, Card, Col, Layout, Menu, message, Result, Row, Space } from 'antd';
import { Route, Switch, HashRouter as Router, Link as NavLink } from 'react-router-dom'
import { PlayCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Textfit } from 'react-textfit';
import 'antd/dist/antd.css';
import './index.css';
import arrayShuffle from 'array-shuffle'
import ReactCardFlip from 'react-card-flip';
import splitArray from 'split-array'
import { useParams } from 'react-router-dom'
import { decompressFromEncodedURIComponent as lzDecode } from 'lz-string'

import questions from './questions.json'
import Create from './Create';

const { Footer, Content } = Layout;

const Clue = ({ text, index, show, setShow }) => {
  return <ReactCardFlip isFlipped={show}>
    <Card
      style={{ textAlign: 'center', fontSize: '30px', height: '100px' }}
      bodyStyle={{ padding: '24px 0px', color: 'white', background: '#3a3d3e' }}
      onClick={() => setShow(true)}
    >{index + 1}</Card>
    <Card
      style={{ textAlign: 'center', height: '100px' }}
      bodyStyle={{ padding: '5px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      onClick={() => setShow(false)}
    ><Textfit mode="single" max={30}>{text}</Textfit></Card>
  </ReactCardFlip >
}

const Clues = ({ clues, setActiveQuestionIndex = null, activeQuestionIndex = null }) => {
  const [shownClues, setShownClues] = useState(Array.from({ length: 12 }, () => false))

  const setupShow = (index) => (shown) => {
    shownClues[index] = shown
    setShownClues([...shownClues])
  }

  const cluesWithIndex = clues.map((clue, index) => ({ clue, index }))

  const rows = splitArray(cluesWithIndex, 4)

  const nextQuestion = async () => {
    setShownClues(Array.from({ length: 12 }, () => false))
    await new Promise(resolve => setTimeout(resolve, 600))
    if (activeQuestionIndex !== 0 && setActiveQuestionIndex) {
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

  return <>
    <div style={{ maxWidth: '800px', width: '100%' }}>
      <Row gutter={[16, 16]}>
        {rows.map(columns => columns.map(({ clue, index }) => (
          <Col key={index} sm={6} xs={8}>
            <Clue text={clue} index={index} show={shownClues[index]} setShow={setupShow(index)} />
          </Col>
        )))}
      </Row>
      <Space size={[8, 8]} wrap>
        <Button onClick={showAll}>Reveal All</Button>
        <Button onClick={hideAll}>Hide All</Button>
        <Button onClick={nextQuestion}>Next Question</Button>
      </Space>
    </div>
  </>
}

const DefaultQuestions = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(questions.length - 1);

  console.log(activeQuestionIndex)

  const clues = arrayShuffle(questions[activeQuestionIndex].Clues)

  while (clues.length > 12) {
    clues.pop()
  }

  return <Clues clues={clues} activeQuestionIndex={activeQuestionIndex} setActiveQuestionIndex={setActiveQuestionIndex} />
}

const UrlQuestions = () => {
  const { encodedQuestion } = useParams()

  let question

  try {
    question = JSON.parse(lzDecode(encodedQuestion))
  } catch (error) {
    console.log(error)
    return <Result
      status="error"
      title="Sorry, the URL is invalid"
      subTitle="Please check the URL has been copied correctly."
      extra={<>
        <NavLink to='/create' type="primary">
          <Button type='primary'>Create a new question</Button>
        </NavLink>
        <NavLink to='/'><Button>Play sample questions</Button></NavLink>
      </>}
    />
  }

  const shuffledClues = arrayShuffle(question.clues)

  return <Clues clues={shuffledClues} />
}

const App = () => {

  return <Layout style={{ minHeight: "100vh" }}>
    <Router>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item icon={<EditOutlined />}><NavLink to='/create'>Create your own questions</NavLink></Menu.Item>
        <Menu.Item icon={<PlayCircleOutlined />}><NavLink to='/'>Play example questions</NavLink></Menu.Item>
      </Menu>
      <Content style={{ maxWidth: '800px', width: '100%', margin: 'auto', marginTop: '100px' }}>
        <Switch>
          <Route exact path='/'>
            <DefaultQuestions />
          </Route>
          <Route exact path='/create'><Create /></Route>
          <Route path='/play/:encodedQuestion'>
            <UrlQuestions />
          </Route>
        </Switch>
      </Content>
    </Router>
    <Footer style={{ textAlign: 'center' }}>Connections ©2021 Created by <a target="_blank" href="https://github.com/tomgb/">Tom Banister</a></Footer>
  </Layout >
};

render(<App />, document.getElementById('root'));
