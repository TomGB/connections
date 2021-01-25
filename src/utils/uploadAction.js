import { message } from "antd";

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

const uploadAction = (file, { imageWidth, imageHeight }) => new Promise(resolve => {
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
            // setClue(imageUrl)
            resolve(imageUrl)
        }

        imageObj.src = reader.result.toString()
    }
    reader.readAsDataURL(file)
})

export default uploadAction
