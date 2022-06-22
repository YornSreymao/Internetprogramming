const app = require("express")();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello World MY BABE!!!");
})

app.listen(port, () => {
    console.log('app is running');
})