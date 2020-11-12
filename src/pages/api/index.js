import nc from "next-connect";

const handler = nc()
  .get((req, res) => res.json("hi"))
  .post((req, res) => res.json("creating.."));

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "hello" }));
};
