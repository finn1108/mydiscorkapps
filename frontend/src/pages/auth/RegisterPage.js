import React, { useEffect, useState } from 'react'
import { BoxAuth } from '../../components/shared/BoxAuth'
import { Typography } from '@mui/material'
import { RegisterInput } from './RegisterInput';
import { RegisterFooter } from './RegisterFooter';
import { validatorRegister } from '../../components/utils/Validator';
import { connect } from 'react-redux';
import { getActions } from '../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';

const RegisterPage = ({ registerAction }) => {
    const history = useHistory()
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);
    const handleRegister = () => {
        const userDetails = {
            email: mail,
            password: password,
            username: username
        };
        registerAction(userDetails, history)
    }
    useEffect(() => {
        setIsFormValid(validatorRegister(mail, username, password))
    }, [mail, password, username, isFormValid])
    return (
        <BoxAuth>
            <Typography variant="h5" sx={{ color: "white " }}>
                Create an account
            </Typography>
            <RegisterInput
                email={mail}
                setEmail={setMail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </BoxAuth>
    )
}
const mapActionToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionToProps)(RegisterPage)