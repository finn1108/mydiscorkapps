import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system'

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${'https://res.cloudinary.com/dctb1eocj/image/upload/v1682405451/wallpaer_1_xiuui4.png'})`,
    backgroundPosition: 'center top',
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'

})
export const BoxAuth = (props) => {
    return (
        <BoxWrapper>
            <Box
                sx={{
                    width: 700,
                    height: 400,
                    backgroundColor: '#36393f',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    display: 'flex',
                    flexDirection: "column",
                    padding: "25px"
                }}
            >
                {props.children}
            </Box>
        </BoxWrapper>
    )
}
