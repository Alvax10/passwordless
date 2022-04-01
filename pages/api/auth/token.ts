import { NextApiRequest, NextApiResponse} from "next";
import { generate } from "lib/controllers/jwt";
import { Auth } from "lib/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const auth = await Auth.findByEmailAndCode((req.query.email as string), parseInt((req.query.code as string)));

    if (!auth) {
        res.status(401).send({ message: "Email or code incorrect" });
    }
    const expires = auth.isCodeexpired();
    if (expires) {
        res.status(401).send({ message: "Code expired" });
        
    } else {
        const token = generate({ userId: auth.data.userId });
        res.send({ token });
    }
}