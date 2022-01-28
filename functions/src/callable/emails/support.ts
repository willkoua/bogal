const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

const username = functions.config().gmail.email;
const password = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: "gmail",
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
    const subject = req.body.subject;
    const message = req.body.message;
    const mailOptions = {
      from: `Support <${email}>`,
      to: "support@bogal.ca",
      subject,
      html: `
          <p>
          Vous avez été contacté par ${name} (${email})
          depuis la clinique juridique de Montréal-Nord
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
      return res.send("sended");
    });
  });
});
