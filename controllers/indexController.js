
const fs = require("fs")
module.exports = {
    index: (req,res) => {
   
        res.render('index')
    },
    about : (req,res) => {
        
        res.render('about')
    },
    portfolio : (req,res) => {
        
        res.render('protfolio')
    },
    servicios : (req,res) => {
        
        res.render('servicios')
    },
    contact : (req,res) => {
        
        res.render('contact')
    },
    pagesTypes: (req,res) => {

        const {tipo} = req.params.tipo;
        const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
       const tipoPagina=  data.find(tipo => tipo == tipo)
        
         res.render("pagesTypes",{
           tipo:  tipoPagina.Tipo,
           descripcion:  tipoPagina.Descripción,
           especificaciones : tipoPagina.Especificaciones,
           beneficios: tipoPagina.Beneficios
         })
         
         

}
}