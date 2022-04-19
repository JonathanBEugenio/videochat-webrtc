import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const RedirectText = styled('span')({
    color: '#00AFF4',
    fontWeight: 500,
    cursor: 'pointer'
})

type RedirectProps = {
    text: string,
    redirectText: string,
    redirectHandler: React.MouseEventHandler<HTMLSpanElement>,
    customStyles: React.CSSProperties
};

export default function Redirect(props: RedirectProps) {
  return <Typography
    sx={{color: '#72767D'}}
    style={props.customStyles ? props.customStyles : {}}
    variant='subtitle2'
  >
    {props.text}
    {' '} 
    <RedirectText onClick={props.redirectHandler}>
        {props.redirectText}
    </RedirectText>
  </Typography>;
}
