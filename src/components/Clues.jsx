import React, { useState } from "react"
import { Button, Col, message, Row, Space } from "antd"
import splitArray from "split-array"
import Clue from "./Clue"

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

    const showAll = show => setShownClues(Array(12).fill(show))

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
                <Button onClick={() => showAll(true)}>Reveal All</Button>
                <Button onClick={() => showAll(false)}>Hide All</Button>
                <Button onClick={nextQuestion}>Next Question</Button>
            </Space>
        </div>
    </>
}

export default Clues
