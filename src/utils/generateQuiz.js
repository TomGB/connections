import React from "react"
import { Modal } from "antd"
import { CheckCircleOutlined } from '@ant-design/icons';
import { compressToEncodedURIComponent as lzEncode } from 'lz-string'
import GoogleForm from 'google-form-send'

const generateQuiz = (fields) => {
    try {
        const form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLScqzG86l-Cp1LhTFcH_3qhIRMKCNeLglR1tXd6NbRH8bd55Iw')
        form.addField('entry.1329122340', JSON.stringify(fields))
        form.send()
    } catch (error) {
        // this always errors but google does save the answer
    }

    if (fields.order === 'sequential') {
        delete fields.order
        fields.o = true
    } else {
        delete fields.order
    }

    const encoded = lzEncode(JSON.stringify(fields))
    const gameUrl = window.location.origin + process.env.PUBLIC_URL + '/#/play/' + encoded

    Modal.confirm({
        title: 'Game successfully created',
        content: (
            <div>
                <p>Open this link to play the game</p>
                <a target='_blank' rel="noreferrer" href={gameUrl}>{gameUrl}</a>
            </div>
        ),
        icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
        maskClosable: true,
        okText: 'Play Game',
        cancelText: 'Close',
        onOk() {
            window.open(gameUrl, "_blank")
        },
        onCancel() { }
    });
}

export default generateQuiz
