const nodemailer = require('nodemailer');

const sendEmail = (options) =>{

    const transpoter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    return transpoter.sendMail(mailOptions, function(err, info){
        if(err) {
            console.log(err);
            return false;
        }
        else {
            console.log(info);
            return true;
        }
    })
}

module.exports = sendEmail; 