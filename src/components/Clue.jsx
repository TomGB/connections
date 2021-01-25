import React from "react"
import { Card } from "antd"
import Textfit from 'react-textfit'
import ReactCardFlip from "react-card-flip"
import isUrl from "../utils/isUrl"

/** @type {React.CSSProperties} */
const showSideStyle = {
    padding: '5px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
}

/** @type {React.CSSProperties} */
const cardCoverStyle = {
    textAlign: 'center',
    fontSize: '30px',
    height: '100px',
    cursor: 'pointer',
}

/** @type {React.CSSProperties} */
const cardBodyStyle = {
    height: '100px',
    padding: '24px 0px',
    color: 'white',
    background: '#3a3d3e',
}

const Clue = ({ text, index, show, setShow }) => {
    const isImage = isUrl(text)

    const image = isImage ? { backgroundImage: `url(${text})` } : {}
    return (
        <ReactCardFlip isFlipped={show}>
            <Card
                style={cardCoverStyle}
                bodyStyle={cardBodyStyle}
                onClick={() => setShow(true)}
            >{index + 1}</Card>
            <Card
                style={{ textAlign: 'center', height: '100px' }}
                bodyStyle={{ ...image, ...showSideStyle }}
                onClick={() => setShow(false)}
            >{!isImage && <Textfit mode="single" max={30}>{text}</Textfit>}</Card>
        </ReactCardFlip >
    )
}

export default Clue
