import React from "react"
import { Card } from "antd"
import Textfit from 'react-textfit'
import ReactCardFlip from "react-card-flip"

const Clue = ({ text, index, show, setShow }) => (
    <ReactCardFlip isFlipped={show}>
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
)

export default Clue
