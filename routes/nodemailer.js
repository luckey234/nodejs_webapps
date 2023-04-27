
    const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zora16@ethereal.email',
        pass: 'NDFkemXJ5zAV9ZuC68'
    },
  });

  let info = await transporter.sendMail({
    from: '"Luckey Pandey" <luckey@gmail>', // sender address
    to: "pandeyji7705@gmail.com", // list of receivers
    subject: "Hello Surendra", // Subject line
    text: "Hello  Surendra how are you", // plain text body
    html: "<b>Hello YT Bro..</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
