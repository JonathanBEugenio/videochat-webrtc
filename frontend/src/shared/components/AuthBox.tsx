import React from 'react'
import { Box } from '@mui/material'
import { borderRadius, styled } from '@mui/system'

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5865F2'
});

type AuthBoxProps = {
    children: React.ReactChild | React.ReactChild[]
}

function AuthBox(props: AuthBoxProps) {
  return (
    <Wrapper>
        <Box
            sx={{
                width: 700,
                height: 400,
                padding: '25px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#36393F',
            }}
        >
            {props.children}
        </Box>
    </Wrapper>
  )
}

export default AuthBox