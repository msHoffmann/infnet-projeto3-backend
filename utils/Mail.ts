// import nodemailer from "nodemailer";

export default class Mail {
  //   transporter: any;
  //   constructor() {
  //     this.transporter = nodemailer.createTransport({
  //       port: process.env.EMAIL_PORT,
  //       host: process.env.EMAIL_SMTP,
  //       auth: {
  //         user: process.env.EMAIL,
  //         pass: process.env.EMAIL_PASSWORD,
  //       },
  //       secure: true,
  //     });
  //   }
  async sendEmail(to: string, subject: string, html: string) {
    console.log(to);
    console.log(subject);
    console.log(html);
    console.log("Email enviado!");
  }
}

module.exports = Mail;
