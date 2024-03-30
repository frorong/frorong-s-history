import nodemailer from 'nodemailer'
import {
  GOOGLE_EMAIL,
  GOOGLE_EMAIL_PASSWORD,
} from '$env/static/private'

let transporter =
  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: GOOGLE_EMAIL,
      pass: GOOGLE_EMAIL_PASSWORD,
    },
  })

transporter.verify(function (
  error: any
) {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } else {
    // eslint-disable-next-line no-console
    console.log(
      'Server is ready to take our messages'
    )
  }
})

export default transporter
