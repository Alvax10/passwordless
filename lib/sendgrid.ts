import * as sgMail from "@sendgrid/mail";

export async function sendCodeToEmail(email: string, code: string) {

    await sgMail.setApiKey(process.env.API_KEY_SENDGRIND);
    const msg = {
        to: email,
        from: "alvaro695547@gmail.com",
        subject: `Este es tu código para loguearte`,
        text: `Este es el código: ${code}`,
        html: `<strong> Este es el código que necesitas para loguearte: ${code} </strong>`,
    }
    const enviarMail = await sgMail.send(msg)
    .then(() => {
        console.log("Email enviado! :D");
        return true;
    });
}