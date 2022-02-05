import React from 'react'

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../contexts/DataProvider';


const Container = styled(Box)`
    height: 41vh;

`

const Result = () => {
    const [srccode, setsrccode] = useState('');
    const {html,css,js} = useContext(DataContext);
    const src = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(()=> {
            setTimeout(()=> {
                setsrccode(src);

            },2000)
    },[html,css,js])
    return (
        <Container style={ html || css || js ? null : {background: 'tomato'}}>

        <iframe
            srcDoc={srccode }
            title='output'
            sandbox='allow-scripts'
            frameBorder="0"
            width="100%"
            height="100%"
            
        />
        </Container>
    )
}

export default Result
