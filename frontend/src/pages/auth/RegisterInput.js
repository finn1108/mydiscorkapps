import React from 'react'
import { InputWithLabel } from '../../components/shared/InputWithLabel'

export const RegisterInput = ({ email, setEmail, password, setPassword, username, setUsername }) => {
    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
                label="E-mail address"
                type="text"
                placeholder="Enter e-mail address"
            />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label="Username"
                type="text"
                placeholder="Enter a username"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Password"
                type="password"
                placeholder="Enter password"
            />
        </>
    )
}
