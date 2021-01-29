import React, { useEffect, useState } from "react"
import { Form, Input, Button, Col, Row } from "antd"
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import debounce from 'lodash.debounce'
import { Prompt } from "react-router-dom";

import ImageUpload from "./ImageUpload";
import isUrl from "../utils/isUrl";
import generateQuiz from "../utils/generateQuiz";

const clueInput = ({ form, setShowWarning, remove }) => (field, index) => {
    const value = form.getFieldValue('clues')[index]
    const isImage = isUrl(value)

    const setClue = text => {
        setShowWarning(true)
        console.log('setClue')
        const clues = form.getFieldValue('clues')

        clues[index] = text

        form.setFieldsValue({
            clues,
        })
    }

    return (
        <div key={field.key}>
            <LabelAndInput label={index + 1 + ':'}>
                <Form.Item {...field} style={{ marginBottom: '8px' }} >
                    <Input
                        placeholder="Clue"
                        className='clue-input'
                        onChange={debounce((e) => setClue(e.target.value), 300)}
                        addonBefore={<ImageUpload setClue={setClue} />}
                        suffix={
                            <DeleteOutlined style={{ color: '#F66' }} onClick={() => remove(field.name)} />
                        } />
                </Form.Item>
            </LabelAndInput>
            {isImage && (<LabelAndInput>
                <img
                    src={value}
                    style={{ paddingBottom: '10px', width: '186px' }}
                    alt={`clue ${index + 1}`}
                />
            </LabelAndInput>)}
        </div>
    )
}

const CluesInput = ({ form, setShowWarning }) => (
    <Form.List name="clues">
        {(fields, { add, remove }) => (
            <>
                {fields.map(clueInput({ form, setShowWarning, remove }))}
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
            </>
        )}
    </Form.List>
)

const LabelAndInput = ({ label = null, children }) => (
    <Row style={{ marginLeft: '10px', marginRight: '20px' }}>
        <Col span={8} style={{ textAlign: 'right', paddingRight: '10px', lineHeight: '32px' }}>{label}</Col>
        <Col span={24 - 8}>{children}</Col>
    </Row>
)

const Create = () => {
    const [showWarning, setShowWarning] = useState(false)
    const [form] = Form.useForm();

    useEffect(() => {
        window.onbeforeunload = () => 'Are you sure you want to leave, this page will be reset.'
    }, [])

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
                onFinish={generateQuiz}
            >
                <LabelAndInput label="Answer:">
                    <Form.Item name='answer'>
                        <Input placeholder="The connection" />
                    </Form.Item>
                </LabelAndInput>
                <CluesInput form={form} setShowWarning={setShowWarning} />
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
