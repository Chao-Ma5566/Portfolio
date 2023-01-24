const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, ()=> console.log("Server Running at 5000"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "******@gmail.com",
        //can't use personnel password. need go to accound security -> application -> password
        pass: ""
    }

})

contactEmail.verify((error) => {
    if (error){
        console.log(error)
    }else{
        console.log("Ready to send")
    }
})
//request, response
router.post("/contact", (req, res)=>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message
    const phone = req.body.phone
    const mail = {
        from: name,
        to: "******@gmail.com",
        subject: "Contact form submission - portfolio",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
            `
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        }else {
            res.json({ code: 200, state: "Message Send" })
        }
    })
})