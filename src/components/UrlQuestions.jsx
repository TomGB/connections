import { useParams, Link } from 'react-router-dom'
import { decompressFromEncodedURIComponent as lzDecode } from 'lz-string'
import React from 'react'
import { Button, Result } from 'antd'
import arrayShuffle from 'array-shuffle'
import Clues from './Clues'

const UrlQuestions = () => {
    /** @type {{encodedQuestion: string}}*/
    const { encodedQuestion } = useParams()

    let clues

    try {
        const question = JSON.parse(lzDecode(encodedQuestion))

        const shuffledClues = arrayShuffle(question.clues)


        while (shuffledClues.length > 12) {
            shuffledClues.pop()
        }

        clues = shuffledClues
    } catch (error) {
        console.log(error)
        return <Result
            status="error"
            title="Sorry, the URL is invalid"
            subTitle="Please check the URL has been copied correctly."
            extra={<>
                <Link to='/create' type="primary">
                    <Button type='primary'>Create a new question</Button>
                </Link>
                <Link to='/'><Button>Play sample questions</Button></Link>
            </>}
        />
    }

    return <Clues clues={clues} />
}

export default UrlQuestions
