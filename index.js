const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();
const PORT = 3000 || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.send("hello world !!");
});

app.listen(PORT, () => {
	console.log(`listening on ${PORT}, http://localhost:${PORT}`);
});
