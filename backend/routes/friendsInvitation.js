const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const { verifyToken } = require('../middleware/auth')

const { postInvite, postAccept, postReject } = require("../controllers/friendsInvitation/friendInvitation");

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),
});

router.post("/invite", verifyToken, validator.body(postFriendInvitationSchema), postInvite);
router.post("/accept", verifyToken, validator.body(inviteDecisionSchema), postAccept);
router.post("/reject", verifyToken, validator.body(inviteDecisionSchema), postReject);



module.exports = router;