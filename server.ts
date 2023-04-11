process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception!! Shutting Down the server");
  console.log(err.name, err.message);
  process.exit();
});

import app from "./app";

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Server is function on  http://localhost:${port}`)
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! shutting down");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
