import React, { useEffect, useState } from "react"
import { Form, Input, Button, Col, Row, Modal, Upload, message } from "antd"
import { DeleteOutlined, PlusOutlined, CheckCircleOutlined, PictureOutlined } from '@ant-design/icons';
import { compressToEncodedURIComponent as lzEncode } from 'lz-string'
import GoogleForm from 'google-form-send'
import ImgCrop from 'antd-img-crop'
import debounce from 'lodash.debounce'
import { Prompt } from "react-router-dom";

const isUrl = s => {
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    return regexp.test(s);
}

const FormList = ({ FormItem, AddButton }) => (
    <Form.List name="clues">
        {(fields, { add, remove }) => (
            <>
                {fields.map((field, index) => (
                    <div key={field.key}>
                        {FormItem({ field, index, remove })}
                    </div>
                ))}
                <AddButton add={add} />
            </>
        )}
    </Form.List>
)

const onFinish = (fields) => {
    try {
        const form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLScqzG86l-Cp1LhTFcH_3qhIRMKCNeLglR1tXd6NbRH8bd55Iw')
        form.addField('entry.1329122340', JSON.stringify(fields))
        form.send()
    } catch (error) {
        // this always errors but google does save the answer
    }

    const encoded = lzEncode(JSON.stringify(fields))

    console.log(fields)
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

const LabelAndInput = ({ label = null, children }) => (
    <Row style={{ marginLeft: '10px', marginRight: '20px' }}>
        <Col span={8} style={{ textAlign: 'right', paddingRight: '10px', lineHeight: '32px' }}>{label}</Col>
        <Col span={24 - 8}>{children}</Col>
    </Row>
)

const imageWidth = 186
const imageHeight = 100

const uploadToImgur = async dataUrl => {
    const data = dataUrl.split(',')[1]
    const imageBase64 = Buffer.from(data, 'base64');

    try {
        const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
                'Authorization': 'Client-ID 3efda6f1a654717',

            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: imageBase64 // body data type must match "Content-Type" header
        });
        const link = (await response.json()).data.link
        if (!link) throw Error('Image error')

        return link
    } catch (error) {
        message.error('Sorry, something went wrong uploading the image, please try again later.')
        console.log(error)
    }
}

const uploadAction = setClue => file => {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.onloadend = () => {
            var imageObj = new Image()
            var canvas = document.createElement('CANVAS')

            var ctx = canvas.getContext('2d')
            ctx.canvas.width = imageWidth
            ctx.canvas.height = imageHeight

            imageObj.onload = async () => {
                ctx.drawImage(imageObj, 0, 0, imageWidth, imageHeight)
                const dataUrl = canvas.toDataURL()
                const imageUrl = await uploadToImgur(dataUrl)
                setClue(imageUrl)
                resolve()
            }

            imageObj.src = reader.result.toString()
        }
        reader.readAsDataURL(file)
    })
}

const ImageUpload = ({ setClue }) => (
    <ImgCrop rotate aspect={imageWidth / imageHeight} minZoom={0.5} cropperProps={{ restrictPosition: false }}>
        <Upload
            name='file'
            action={uploadAction(setClue)}
            listType='picture'
            showUploadList={false}
        >
            <PictureOutlined style={{ cursor: 'pointer' }} />
        </Upload>
    </ImgCrop>
)

const Create = () => {
    const [showWarning, setShowWarning] = useState(false)
    const [form] = Form.useForm();

    useEffect(() => {
        window.onbeforeunload = () => 'Are you sure you want to leave, this page will be reset.'
    }, [])

    const setClue = index => text => {
        setShowWarning(true)
        console.log('setClue')
        const clues = form.getFieldValue('clues')

        clues[index] = text

        form.setFieldsValue({
            clues,
        })
    }

    const initialValues = Array(12).fill("")

    return (
        <div style={{ maxWidth: '500px' }}>
            <Prompt
                when={showWarning}
                message={() => 'Are you sure you want to leave, this page will be reset.'}
            />
            <Form
                form={form}
                layout='horizontal'
                initialValues={{ clues: initialValues }}
                onFinish={onFinish}
            >
                <LabelAndInput label="Answer:">
                    <Form.Item name='answer'>
                        <Input placeholder="The connection" />
                    </Form.Item>
                </LabelAndInput>
                <FormList
                    FormItem={({ field, index, remove }) => {
                        const value = form.getFieldValue('clues')[index]
                        const isImage = isUrl(value)
                        console.log(isImage)
                        return (
                            <>
                                <LabelAndInput label={index + 1 + ':'}>
                                    <Form.Item
                                        {...field}
                                        name={field.name}
                                        fieldKey={field.fieldKey}
                                        style={{ marginBottom: '8px' }}
                                    >
                                        {/* <EditOutlined /> */}
                                        <Input onChange={debounce((e) => setClue(index)(e.target.value), 300)} placeholder="Clue" addonBefore={<ImageUpload setClue={setClue(index)} />} suffix={
                                            <DeleteOutlined style={{ color: '#F66' }} onClick={() => remove(field.name)} />
                                        } />
                                    </Form.Item>
                                </LabelAndInput>
                                {isImage && <LabelAndInput><img style={{ paddingBottom: '10px' }} src={value} alt={`clue ${index + 1}`} /></LabelAndInput>}
                            </>
                        )
                    }}
                    AddButton={({ add }) => (
                        <LabelAndInput>
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block icon={<PlusOutlined />}
                                >
                                    Add Clue
                            </Button>
                            </Form.Item>
                        </LabelAndInput>
                    )}
                />
                <LabelAndInput>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Generate</Button>
                    </Form.Item>
                </LabelAndInput>
            </Form>
        </div>
    )
}
export default Create
