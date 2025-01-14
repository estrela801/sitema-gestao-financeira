// criando o backend do projeto com node
const express = require('express')
const path = require("path")
const app = express()
const PORT = 3000
app.use(express.static(path.join(__dirname, "../../frontend/essentials")))

const Page = (page)=>{
    const filePath = path.join(__dirname, `../../frontend/essentials/views/${page}`)
    return filePath
    
}

app.get("/", (req,res)=>{
    const page = Page('index.html')
    res.sendFile(page, (err)=>{
        if(err){
            console.error(err)
            res.status(500).send('ero ao cvarregar')
        }
        
    }) 
})
app.get('/sla', (req,res)=>{
    res.send("sla")
})
app.listen(PORT,()=>{
    console.log(`servidor rodando na porta ${PORT}`)
})