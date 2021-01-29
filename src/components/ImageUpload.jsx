import { Upload } from "antd"
import { PictureOutlined } from '@ant-design/icons';
import ImgCrop from "antd-img-crop"
import React from "react"
import uploadAction from "../utils/uploadAction"

const imageWidth = 186 * 3
const imageHeight = 100 * 3

const ImageUpload = ({ setClue }) => (
    <ImgCrop
        rotate
        aspect={imageWidth / imageHeight}
        minZoom={0.5}
        cropperProps={{ restrictPosition: false }}
    >
        <Upload
            name='file'
            action={async file => {
                const imageUrl = await uploadAction(file, { imageWidth, imageHeight })
                setClue(imageUrl)
                return imageUrl
            }}
            listType='picture'
            showUploadList={false}
        >
            <PictureOutlined style={{ cursor: 'pointer', padding: '8px 10px' }} />
        </Upload>
    </ImgCrop>
)

export default ImageUpload
