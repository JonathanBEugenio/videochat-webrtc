import React from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%'
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px'
});

type InputLabelProps = {
  type: string,
  value: string,
  label: string,
  placeholder: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function InputLabel(props: InputLabelProps) {
  const { value, setValue, label, type, placeholder } = props;

  const handleValueChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={handleValueChange} />
    </Wrapper>
  )
}
