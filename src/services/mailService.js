import { createTransport   } from "nodemailer";
import config from "../config/config.js";

class MailService {

    constructor() {
        this.transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });
    }

    async sendMail(email, subject, text) {
        try {
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject,
                text
            };

            await this.transporter.sendMail(mailOptions);
            console.log('Email sent');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new MailService();