import React from "react"
import { Form, Input, Button, Col, Row, Modal } from "antd"
import { DeleteOutlined, PlusOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { compressToEncodedURIComponent as lzEncode } from 'lz-string'

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
    const encoded = lzEncode(JSON.stringify(fields))

    console.log(fields)
    const gameUrl = window.location.origin + process.env.PUBLIC_URL + '/#/play/' + encoded

    Modal.confirm({
        title: 'Game successfully created',
        content: (
            <div>
                <p>Open this link to play the game</p>
                <a target='_blank' href={gameUrl}>{gameUrl}</a>
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

const Create = () => (
    <div style={{ maxWidth: '500px' }}>
        <Form
            layout='horizontal'
            initialValues={{ clues: Array(12).fill("") }}
            onFinish={onFinish}
        >
            <LabelAndInput label="Answer:">
                <Form.Item name='answer'>
                    <Input placeholder="The connection" />
                </Form.Item>
            </LabelAndInput>
            <FormList
                FormItem={({ field, index, remove }) => (
                    <LabelAndInput label={index + 1 + ':'}>
                        <Form.Item
                            {...field}
                            name={field.name}
                            fieldKey={field.fieldKey}
                            style={{ marginBottom: '8px' }}
                        >
                            <Input placeholder="Clue" suffix={
                                <DeleteOutlined style={{ color: '#F66' }} onClick={() => remove(field.name)} />
                            } />
                        </Form.Item>
                    </LabelAndInput>
                )}
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

export default Create
