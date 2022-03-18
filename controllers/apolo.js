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
        console.log(e.data.Sesion)
        res.render("index",{Token,usr})
    }).catch(error => {
        console.log(error.message)
        console.error('Hay un error!', error);
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
    let url = "https://api.apoloservice.com/api/Alertas/NewListadoKeywords"

    const checkKeywprds = await axios.post(url,obj).then(e=>{
        
        let data = e.data.keywords
        ObjGlobal = e.data.keywords
        res.render("keyWords",{data})
    }).catch(error => {
        console.log(error.message)
        console.error('Hay un error!', error);
    });
    
}

exports.addKeyWords = async  (req,res) => {
  
   let url =  "https://api.apoloservice.com/api/Alertas/IngresaKeyword"
   console.log(ObjGlobal)
   console.log(obj)
   let obj2 = {
    
    id: ObjGlobal[0].id,
    keywordId: ObjGlobal[0].keywordId,
    keyword: 'Adolfo',
    coincidencias: ObjGlobal[0].coincidencias,
    creado: ObjGlobal[0].creado,
    eliminado: ObjGlobal[0].eliminado,
    fechaEliminado: ObjGlobal[0].fechaEliminado,
    personaId: ObjGlobal[0].personaId,
    especial: ObjGlobal[0].especial,
    especialId: ObjGlobal[0].especialId,
    alertaNoLeida: ObjGlobal[0].alertaNoLeida,
    id :obj.id,
    PersonaID: obj.personaId ,
    Contacto: obj.contacto ,
    Correo: obj.correo,
    Password: "123456",
    Token:obj.token ,
    TipoSesion:obj.tipoSesion ,
    TokenSubscription: obj.tokenSubscription 
   }
   console.log(obj2)

    const addKeyWords = await axios.post(url,obj2).then(e=>{
    let data = e.data.keywords
  
    res.render("keyWords",{data})
    }).catch(error => {
        console.log(error.message)
        console.error('Hay un error!',error);
    });
}

