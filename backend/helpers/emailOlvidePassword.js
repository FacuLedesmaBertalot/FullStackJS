import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
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
            subject: 'Reestablece tu Contraseña',
            text: `Hola ${nombre}, has solicitado reestablecer tu contraseña.`,
            html: `
                <div style="background-color: #f9fafb; padding: 40px 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 12px; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
                        
                        <h1 style="color: #4f46e5; font-size: 28px; font-weight: 900; margin-bottom: 20px; text-align: center; line-height: 1.2;">
                            Administra tus <span style="color: #000000;">Pacientes</span>
                        </h1>
                        
                        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Hola <strong>${nombre}</strong>,
                        </p>
                        
                        <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                            Sigue el siguiente enlace para generar una nueva contraseña:
                        </p>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" 
                               style="background-color: #4338ca; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 12px; font-weight: bold; text-transform: uppercase; display: inline-block; font-size: 14px;">
                                Reestablecer Contraseña
                            </a>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
                        
                        <p style="color: #6b7280; font-size: 12px; text-align: center; line-height: 1.5;">
                            Si el botón no funciona, copia y pega este enlace en tu navegador:<br>
                            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style="color: #4f46e5; word-break: break-all;">
                                ${process.env.FRONTEND_URL}/olvide-password/${token}
                            </a>
                        </p>

                        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
                            Si tú no creaste esta cuenta, puedes ignorar este mensaje con seguridad.
                        </p>
                    </div>
                </div>
            `
        });

        console.log("Correo enviado: %s", info.messageId);
        
    } catch (error) {
        console.error("Error al enviar el correo:", error);
    }
};

export default emailOlvidePassword;