const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

const username = functions.config().gmail.email;
const password = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: username,
    pass: password,
  },
});

export const contactus = functions.https.onRequest((req: any, res: any) => {
  cors(req, res, () => {
    const email = req.body.email;
    const name = req.body.name;
    const subject = 'bogal_contact: ' + req.body.subject;
    const message = req.body.message;
    const mailOptions = {
      from: `Support <${email}>`,
      to: 'bogal.consulting@gmail.com',
      subject,
      html: `
          <p>
          Vous avez été contacté par ${name} (${email})
          depuis bogal.ca
          </p>
          <p>
          <strong>Message</strong>
          <blockquote style="white-space:pre">${message}</blockquote>
          </p>
        `,
    };
    // returning result
    return transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send('sended');
    });
  });
});
