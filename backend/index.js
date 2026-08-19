import express from "express";

const app = express();
app.get("/health", (req, res) => {
  res.send("Server Is Running Perfectly!!");
});

const PORT = 4400;
app.listen(PORT, () => {
  console.log(`Server Is Running at:\nhttp://localhost:${PORT}/health`);
});

// npm init -y
// npm i express cors mongoose
// npm i nodemon -g
// npm run dev
