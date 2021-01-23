import React from "react"
import { Form, Input, Button } from "antd"
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { compressToEncodedURIComponent as lzEncode } from 'lz-string'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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
    const encoded = lzEncode(JSON.stringify(fields))
    console.log(window.location.origin + process.env.PUBLIC_URL + '/#/play/' + encoded)
}
const Create = () => (
    <div style={{ maxWidth: '500px' }}>
        <Form {...layout}
            initialValues={{ clues: Array(12).fill("") }}
            onFinish={onFinish}
        >
            <Form.Item label="Answer" name='answer'>
                <Input placeholder="The connection" />
            </Form.Item>
            <FormList
                FormItem={({ field, index, remove }) => (
                    <Form.Item
                        {...field}
                        name={field.name}
                        fieldKey={field.fieldKey}
                        label={index + 1}
                        style={{ marginBottom: '8px' }}
                    >
                        <Input placeholder="Clue" suffix={
                            <DeleteOutlined style={{ color: '#F66' }} onClick={() => remove(field.name)} />
                        } />
                    </Form.Item>
                )}
                AddButton={({ add }) => (
                    <Form.Item {...tailLayout}>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            block icon={<PlusOutlined />}
                        >
                            Add Clue
                        </Button>
                    </Form.Item>
                )}
            />
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Start</Button>
            </Form.Item>
        </Form>
    </div>
)

export default Create
