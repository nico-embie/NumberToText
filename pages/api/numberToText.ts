import { NextApiRequest, NextApiResponse } from "next";
import { getNumberToText } from "util/numberToTextHas";
import { convertNumberToText } from "../../util/numberToText";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { number } = req.body;
  try {
    const text = getNumberToText(number);
    //const text = convertNumberToText(number);
    res.status(200).json({ text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unexpected error" });
  }
}
