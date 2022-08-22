const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

const {TokenExpiredError} = jwt;

const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res
            .status(401)
            .send({message: "토큰이 만료되었습니다."});
    }

    return res
        .sendStatus(401)
        .send({message: "error!"});
}

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res
            .status(403)
            .send({message: "error! : 토큰이 없습니다!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }
        req.userId = decoded.id;
        next();
    });
};

const isAdmin = (req, res, next) => {
    User
        .findByPk(req.userId)
        .then(user => {
            user
                .getRoles()
                .then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "admin") {
                            next();
                            return;
                        }
                    }

                    res
                        .status(403)
                        .send({message: "Admin이 필요합니다."});
                    return;
                });
        });
};

const isModerator = (req, res, next) => {
    User
        .findByPk(req.userId)
        .then(user => {
            user
                .getRoles()
                .then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "moderator") {
                            next();
                            return;
                        }
                    }

                    res
                        .status(403)
                        .send({message: "Moderator가 필요합니다!"});
                });
        });
};

const isModeratorOrAdmin = (req, res, next) => {
    User
        .findByPk(req.userId)
        .then(user => {
            user
                .getRoles()
                .then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "moderator") {
                            next();
                            return;
                        }

                        if (roles[i].name === "admin") {
                            next();
                            return;
                        }
                    }

                    res
                        .status(403)
                        .send({message: "Moderator나 Admin이 필요합니다!"});
                });
        });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;
