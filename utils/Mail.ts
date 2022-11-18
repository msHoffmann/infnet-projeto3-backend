require("dotenv").config();
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
export default class Mail {
  transporter: any;

  constructor(rootDir: string | null) {
    this.transporter = nodemailer.createTransport({
      port: process.env.EMAIL_PORT,
      host: process.env.EMAIL_SMTP,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    const options = {
      extName: ".hbs",
      viewPath: `${rootDir}/views/email`,
      layoutsDir: `${rootDir}/views/email`,
      defaultLayout: "",
    };
    this.transporter.use("compile", hbs(options));
  }
  async sendEmail(
    to: string,
    subject: string,
    template: string,
    context: any
  ): Promise<any> {
    const data = {
      from: process.env.EMAIL,
      to,
      subject,
      template,
      context,
    };

    try {
      return await this.transporter.sendMail(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Mail;
