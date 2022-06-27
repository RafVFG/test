import { EmailMethods } from "./interfaces/methods";
import { createTransport } from "nodemailer";
import "dotenv/config";

export function SendingEmail (): EmailMethods {
    async function run(email: string): Promise<void> {
        
        const transport = createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD,
            }
        })

        await transport.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: "Boas vindas",
            html: "Bem vindo a GescorpGO, seu cadastro foi realizado com sucesso"
        })

    }
    
    return {
        run
    }
}