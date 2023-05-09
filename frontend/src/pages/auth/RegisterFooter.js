import React from 'react'
import { CustomButton } from '../../components/shared/CustomButton'
import { Tooltip } from '@mui/material'
import { RedirectInfo } from '../../components/shared/RedirectInfo'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export const RegisterFooter = ({ isFormValid, handleRegister }) => {
    const history = useHistory()
    const handlePushToLoginPage = () => {
        history.push("/login")
    }
    return (
        <>

            <Tooltip
                title={isFormValid ? "Press to create account" : "Enter valid email, password or username"}
            >
                <div>
                    <CustomButton
                        label="Register"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>


            </Tooltip>
            <RedirectInfo
                text=""
                redirectText="Already have an account ?"
                additionalStyles={{ marginTop: "7px" }}
                redirectHandler={handlePushToLoginPage}
            />
        </>

    )
}
