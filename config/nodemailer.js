// import nodemailer from "nodemailer"
// import { env } from "process"

// const email = process.env.SMTP_USER;
// const pass = process.env.SMTP_PASSWORD;

// let testAccount = await nodemailer.createTestAccount();

// export const transporter = nodemailer.createTransport({
//     // service: 'gmail',
//     // auth:{
//     //     user: 'botchentzen@gmail.com',
//     //     pass: 'myvsghbvyourophe'
//     // }

//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
// });

// export const mailOptions = {
//     from: email,
//     to: email

// };