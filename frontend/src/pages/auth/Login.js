import React, { useEffect, useState } from 'react'

import { BoxAuth } from '../../components/shared/BoxAuth'
import { LoginHeader } from './LoginHeader'
import { LoginInput } from './LoginInput';
import { LoginFooter } from './LoginFooter';
import { validatorLogin } from '../../components/utils/Validator';
import { connect } from "react-redux"
import { getActions } from '../../redux/actions/authActions';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({ loginAction }) => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false)
    const handleLogin = () => {
        const userDetails = {
            email,
            password
        };
        loginAction(userDetails, history)
    }
    useEffect(() => {
        setIsFormValid(validatorLogin(email, password))
    }, [email, password, isFormValid])
    return (
        <BoxAuth >
            <LoginHeader />
            <LoginInput
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </BoxAuth>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(Login);