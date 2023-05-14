import React, { useEffect, useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { CustomPrimaryButton } from '../../components/shared/CustomPrimaryButton';
import { InputWithLabel } from "../../components/shared/InputWithLabel"
import { validateEmail } from '../../components/utils/Validator';
import { getActions } from '../../redux/actions/friendsActions';
import { connect } from "react-redux";
import { sendFriendInvitationAction } from '../../redux/apiClient'; const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => { }, }) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");

    const handleSendInvitation = () => {
        sendFriendInvitation(
            {
                targetMailAddress: mail,
            },
            handleCloseDialog
        );
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("");
    };

    useEffect(() => {
        setIsFormValid(validateEmail(mail));
    }, [mail, setIsFormValid]);
    //console.log(isDialogOpen)
    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter e-mail address of friend which you would like to invite
                        </Typography>
                    </DialogContentText>

                    <InputWithLabel
                        label="Mail"
                        type="text"
                        value={mail}
                        setValue={setMail}
                        placeholder="Enter mail address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        additionalStyles={{
                            marginLeft: "15px",
                            marginRight: "15px",
                            marginBottom: "10px",
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);