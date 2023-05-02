import { Tooltip } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/shared/CustomButton'

import { RedirectInfo } from '../../components/shared/RedirectInfo'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
export const LoginFooter = ({ handleLogin, isFormValid }) => {
    const history = useHistory()
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
