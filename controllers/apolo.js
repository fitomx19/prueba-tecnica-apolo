let Token,Id,obj,ObjGlobal

const axios = require("axios")
exports.index = async  (req,res) => {
        res.render("index")
}

exports.getToken = async(req,res) =>{
    let Persona = {
        Correo: "prueba0704758@osiris.com",
        Password: "123456"  
    }

    let url = "https://api.apoloservice.com/api/Sesion/RevisaSesion"
   
    const checkToken = await axios.post(url,Persona).then(e=>{
        Token = e.data.Sesion.token
        let usr = e.data.Sesion.contacto
        Id = e.data.Sesion.personaId
        obj = e.data.Sesion
       
        res.render("index",{Token,usr})
    }).catch(error => {
        console.log(error.message)
        console.error('Hay un error!', error);
    });
    

    
}

exports.getKeyWords = async  (req,res) => {
    let url = "https://api.apoloservice.com/api/Alertas/NewListadoKeywords"

    const checkKeywprds = await axios.post(url,obj).then(e=>{
        let data = e.data.keywords
        ObjGlobal = e.data
        
        res.render("keyWords",{data})
    }).catch(error => {
        console.log(error.message)
        console.error('Hay un error!', error);
    });
    
}

exports.addKeyWords = async  (req,res) => {
  
   let url =  "https://api.apoloservice.com/api/Alertas/IngresaKeyword"

    const addKeyWords = await axios.post(url,ObjGlobal).then(e=>{
    let data = e.data.keywords
  
    res.render("keyWords",{data})
    }).catch(error => {
        console.log(error.message)
    });
}



