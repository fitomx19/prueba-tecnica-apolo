const axios = require("axios")
exports.index = async  (req,res) => {
        res.render("index")
}

exports.getToken = async(req,res) =>{
    let Persona = {
        Id :"",
        PersonaID: "" ,
        Contacto: "" ,
        Correo: "prueba0704758@osiris.com",
        Password: "123456",
        Token:"" ,
        TipoSesion:"" ,
        PrimeraSesion:"" ,
        TokenSubscription:"" 

    }

   
    const Token = await axios.post("https://apoloservice.com/api/Sesion/RevisaSesion",Persona).then(res=>{
        console.log("Token")
    }).catch(error => {
        console.log(error.message)
        console.error('There was an error!', error);
    });
    
  /*   {"Persona":{
	
        "Id" :"",
        "PersonaID": "" ,
        "Contacto": "" ,
        "Correo": "prueba0704758@osiris.com",
        "Password": "123456",
        "Token":"" ,
        "TipoSesion":"" ,
        "PrimeraSesion":"" ,
        "TokenSubscription":"" 

}
} */
    
}

exports.getKeyWords = async  (req,res) => {
    res.render("index")
}

exports.addKeyWords = async  (req,res) => {
    let user = {
        name:"adolfo"
    }
    res.render("index" , {user})
}

