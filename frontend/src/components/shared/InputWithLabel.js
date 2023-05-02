import React from 'react'
import { styled } from '@mui/material'

const Wrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"

})

const Label = styled('p')({
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "16px"

})
const Input = styled('input')({
    flexGrow: 1,
    height: "40px",
    border: "1px solid black",
    borderRadius: "5px",
    color: "#b9bbb5",
    background: "#35393f",
    margin: 0,
    padding: "0 5px",
    fontSize: "16px"
})
export const InputWithLabel = (props) => {
    const { value, setValue, type, label, placeholder } = props;
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                value={value}
                onChange={handleOnChange}
                placeholder={placeholder}
                type={type}

            />
        </Wrapper>
    )
}
