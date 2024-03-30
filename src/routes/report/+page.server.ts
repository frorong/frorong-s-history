import { redirect } from '@sveltejs/kit'
// import type { PageServerLoad } from './$types'

import { GOOGLE_EMAIL } from '$env/static/private'
import transporter from '$lib/emailSetup.server.js'

// export const load: PageServerLoad =
//   async (event) => {
//     const session =
//       await event.locals.auth()
//     if (!session?.user)
//       throw redirect(303, '/auth')
//     return {}
//   }

export const actions = {
  default: async ({
    request,
  }: {
    request: any
  }) => {
    try {
      const formData =
        await request.formData()
      const subject =
        formData.get('subject')
      const email = formData.get(
        'userEmail'
      )
      const name =
        formData.get('userName')
      const body = formData.get('body')
      let html = `<h2>문의가 도착했습니다.</h2><pre>${body}</pre><span>보낸이 : ${name}, 이메일 : ${email}</span>`

      if (
        body.length < 5 ||
        subject.length < 5
      )
        return

      const message = {
        from: email ?? GOOGLE_EMAIL,
        to: 'frorong0727@gmail.com',
        bcc: 'https://www.frorong.shop',
        subject: subject,
        text: body,
        html: html,
      }

      const sendEmail = async (
        message: any
      ) => {
        await new Promise(
          (resolve, reject) => {
            transporter.sendMail(
              message,
              (
                err: any,
                info: unknown
              ) => {
                if (err) {
                  // eslint-disable-next-line no-console
                  console.error(err)
                  reject(err)
                } else {
                  resolve(info)
                }
              }
            )
          }
        )
      }

      await sendEmail(message)

      redirect(200, '/report/success')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
}
