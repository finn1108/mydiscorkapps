import React from 'react'
import { InputWithLabel } from '../../components/shared/InputWithLabel'
import { LoginFooter } from './LoginFooter'

export const LoginInput = ({ mail, setMail, password, setPassword }) => {

    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                type="text"
                label="Email"
                placeholder="Enter your email"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                type="password"
                label="Password"
                placeholder="Enter your email"
            />

        </>
    )
}
