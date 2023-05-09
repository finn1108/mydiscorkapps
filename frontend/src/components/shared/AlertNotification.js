import React from 'react'
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";
import { getActions } from '../../redux/actions/alertActions';

const AlertNotification = ({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent,
}) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity="info">{alertMessageContent}</Alert>
        </Snackbar>
    )
}
function mapStateToProps({ alert }) {
    return {
        ...alert
    }
}
function mapActionToProps(dispatch) {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(AlertNotification)