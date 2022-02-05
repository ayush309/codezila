import React from 'react'

import {Box} from "@mui/material"
import CloseFullscreenRoundedIcon from '@mui/icons-material/CloseFullscreenRounded';
import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { useState } from 'react';

import { styled } from '@mui/material/styles'
const Heading = styled(Box)`
    background: #242529;
    color:#fff;
    cursor:pointer;
    /* border-radius: 6px; */
    display: flex;
    padding: 10px 13px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Editor = ({heading,icon, color, language, value, onChange}) => {
    const handleChange = (editor, data, value) => {
        onChange(value);

    }

    const [open, setopen] = useState(true);
    return (
        <Container style={open ? null: {flexGrow:0}}>
        
        
        <Header>
            <Heading>
                <Box component="span" style={{
                    background: color,
                    height: 20,
                    width: 20,
                    color: '#000',
                    display: 'flex',
                    placeContent: 'center',
                    cursor: 'pointer',
                    paddingBottom: '2px',
                    // border: '2px solid red',

                    borderRadius: 5,
                }}>
                    {icon}
                </Box>
                {heading}
            </Heading>
            <CloseFullscreenRoundedIcon
            onClick={()=>setopen(prevState=> !prevState)}
            style={{alignSelf: 'center', cursor:'pointer'}}
            
            
            />
        </Header>
        <ControlledEditor
            value={value}
            onBeforeChange={handleChange}
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'material'
            }}
        />
        </Container>

    )
}

export default Editor
