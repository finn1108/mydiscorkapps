import { Tooltip } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import { useNavigate } from "react-router-dom"
import { RedirectInfo } from '../../components/shared/RedirectInfo'
export const LoginFooter = ({ handleLogin, isFormValid }) => {
    const history = useNavigate();
    const handlePushToRegisterPage = () => {
        history("/register")
    }
    return (
        <>
            <Tooltip
                title={isFormValid ? "Press to log in" : "Enter correct email and Password"}
            >
                <div>
                    <CustomButton
                        label="Log in"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip >

            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>




    )
}
