// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// }
// )

// const  mailOptions =  {
//     from: "andrey.zhukov001@gmail.com",
//     to: "andrey.zhukov001@gmail.com",
//     subject: "Форма акций",
//     text: "Тестовый текст"
// }

// transporter.sendMail(mailOptions)

const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.ursencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
    let { text } = req.body;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: "andrey.zhukov001@gmail.com",
        to: "andrey.zhukov001@gmail.com",
        subject: "Форма акций",
        text: {text}
    }

    await transport.sendMail(mailOptions)
})

app.listen(4000, () => {
    console.log("server listening on 4000 port")
})