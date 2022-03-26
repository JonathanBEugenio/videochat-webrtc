import React from 'react'
import { Box } from '@mui/material'
import { borderRadius, styled } from '@mui/system'

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5865F2'
});

type AuthBoxProps = {
    children: React.ReactChild
}

function AuthBox(props: AuthBoxProps) {
  return (
    <BoxWrapper>
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
    </BoxWrapper>
  )
}

export default AuthBox