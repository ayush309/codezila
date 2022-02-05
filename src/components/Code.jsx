import React from 'react'
import {Box} from '@mui/material'
import Editor from './Editor'
import { useContext } from 'react';
import { styled } from '@mui/material/styles'
import { DataContext } from '../contexts/DataProvider';

const Container = styled(Box)`
    background-color: #060606;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    height: 50vh;
    display: flex;
`

const Code = () => {
    const {html, sethtml, css, setcss, js, setjs} = useContext(DataContext);
    return (
        <Container>
            <Editor heading="HTML" icon="/" color="#ff0008" language='xml' value={html} onChange={sethtml}/>
            <Editor heading="CSS"  icon="#" color="#badc58" language='css' value={css} onChange={setcss}/>
            <Editor heading="JS"  icon="{ }" color="#fcd000" language='javascript' value={js} onChange={setjs}/>
        </Container>
    )
}

export default Code
