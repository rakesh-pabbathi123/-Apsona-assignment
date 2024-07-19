const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
