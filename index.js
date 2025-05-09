const express = require("express");
const logger = require("./logger");

const app = express();
app.use(logger);

const users = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
    { id: 3, name: "Jim", age: 22 },
];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.name} (${user.age})</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});