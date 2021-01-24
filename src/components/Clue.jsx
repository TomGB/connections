import React from "react"
import { Card } from "antd"
import Textfit from 'react-textfit'
import ReactCardFlip from "react-card-flip"

const isUrl = s => {
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    return regexp.test(s);
}

const Clue = ({ text, index, show, setShow }) => {
    const isImage = isUrl(text)

    const image = isImage ? { backgroundImage: `url(${text})` } : {}
    return (
        <ReactCardFlip isFlipped={show}>
            <Card
                style={{ textAlign: 'center', fontSize: '30px', height: '100px' }}
                bodyStyle={{ height: '100px', padding: '24px 0px', color: 'white', background: '#3a3d3e' }}
                onClick={() => setShow(true)}
            >{index + 1}</Card>
            <Card
                style={{ textAlign: 'center', height: '100px' }}
                bodyStyle={{ ...image, padding: '5px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                onClick={() => setShow(false)}
            >{!isImage && <Textfit mode="single" max={30}>{text}</Textfit>}</Card>
        </ReactCardFlip >
    )
}

export default Clue
