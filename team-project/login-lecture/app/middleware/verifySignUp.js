const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {

    // Username
    User
        .findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (user) {
                res
                    .status(400)
                    .send({message: "이미 사용하고있는 이름입니다"});
                return;
            }

            // Email
            User
                .findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(user => {
                    if (user) {
                        res
                            .status(400)
                            .send({message: "이미 사용하고있는 이메일 입니다."});
                        return;
                    }

                    next();
                });
        });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res
                    .status(400)
                    .send({
                        message: "Failed! Role does not exist = " + req
                            .body
                            .roles[i]
                    });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
