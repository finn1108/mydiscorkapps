import React, { useEffect, useState } from 'react'

import { BoxAuth } from '../../components/shared/BoxAuth'
import { LoginHeader } from './LoginHeader'
import { LoginInput } from './LoginInput';
import { LoginFooter } from './LoginFooter';
import { validatorLogin } from '../../components/utils/Validator';
export const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false)
    const handleLogin = () => {
        console.log(mail)
        console.log(password)
    }
    useEffect(() => {
        setIsFormValid(validatorLogin(mail, password))
    }, [mail, password, isFormValid])
    return (
        <BoxAuth >
            <LoginHeader />
            <LoginInput
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
            />
            <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </BoxAuth>
    )
}
