import React from 'react'
import { InputWithLabel } from '../../components/shared/InputWithLabel'


export const LoginInput = ({ email, setEmail, password, setPassword }) => {

    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
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
