import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        const info = await transporter.sendMail({
            from: '"APV - Administrador de Pacientes de Veterinaria" faculedesmabertalot@gmail.com',
            to: email, 
            subject: 'Confirma tu cuenta',
            text: `Hola ${nombre}, comprueba tu cuenta.`,
            html: `
                <p>Hola ${nombre}, comprueba tu cuenta en APV.</p>
                <p>Tu cuenta ya está casi lista, solo debes confirmarla en el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
                <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje.</p>
            `
        });

        console.log("Correo enviado: %s", info.messageId);
        
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    }
};

export default emailRegistro;