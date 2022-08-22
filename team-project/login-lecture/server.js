const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8090"
};

app.use(cors(corsOptions));

// 요청구문 - application/json
app.use(express.json());

// 요청구문 - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// 데이터베이스
const db = require("./app/models");
const Role = db.role;

db
    .sequelize
    .sync();
app.get("/", (req, res) => {
    res.json({message: "아령하세연"});
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// 포트 설정, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({id: 1, name: "user"});

    Role.create({id: 2, name: "moderator"});

    Role.create({id: 3, name: "admin"});
}

db