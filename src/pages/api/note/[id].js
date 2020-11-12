import nc from "next/connect";
import notes from "../../../data/data";

const handler = nc()
  .post((req, res) => {
    const note = {
      id: Date.now(),
      ...req.body,
    };

    notes.push(note);
    res.json({ data: note });
  })
  .get((req, res) => {
    res.json({ data: notes });
  });

export default handler;
