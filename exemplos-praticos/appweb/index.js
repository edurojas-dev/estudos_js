const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'));

app.get("/home", (req, res)=>{
    // res.send("App Node.js")
    res.render("home")
})

app.get("/helloWorld", (req, res)=>{
    // res.send("App Node.js")
    res.render("helloWorld")
})

app.get("/tiposdados", (req, res)=>{
    // res.send("App Node.js")
    res.render("tiposDados")
})

app.listen(5000, (error)=>{
    if(error){console.log(`O erro foi: ${error}`)}
})