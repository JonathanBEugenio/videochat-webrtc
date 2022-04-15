import React from 'react';
import Button from '@mui/material/Button';

type CustomButtonProps = {
  label: string,
  onClick:any,
  disabled: boolean,
  customStyles: React.CSSProperties
};

export default function CustomButton(props: CustomButtonProps) {
  return <Button
    variant='contained'
    sx={{
      bgcolor: '#5865F2',
      color: '#ffffff',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 500,
      width: '100%',
      height: '40px'
    }}
    style={props.customStyles ? props.customStyles : {}}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.label}
  </Button>
  
}
