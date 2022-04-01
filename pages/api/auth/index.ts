import { sendCode } from "lib/controllers/auth";
import { NextApiRequest, NextApiResponse} from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { email } = req.body;
    await sendCode(email);

    res.send({ message: "Mail enviado" });
}