const axios = require('axios')
const { Country, Activity }= require('../db')


const getAllCountry = async(req, res, next) => {
    try {
        if(req.query.name) return next()
        let dataBase = await Country.findAll({ attributes: ["name", "flags", "continent", "id", "population"], include : Activity})
        if(!dataBase.length){
            const response= await axios.get('https://restcountries.com/v3.1/all')
                 const apInf = response.data.map(e =>{
                     return {
                      name: e.name.common,
                      id: e.cca3,
                      capital : e.capital ? e.capital[0].toLowerCase() : 'not capital', 
                      region: e.region,
                      subregion: e.subregion,
                      area:e.area,
                      population: e.population,
                      continent: e.continents[0],
                      flags: `${e.flags.png}` 
                 }
                 })
                 await Country.bulkCreate(apInf);
                 dataBase =await Country.findAll({ attributes: ["name", "flags", "continent","id","population"],include: Activity})
        }
        return res.json(dataBase );
    } catch (err) {
        return res.status(404).json({msj : err.message, err});
    }
}

const getByName = async(req, res) => {
    try {
        const infName=( await axios(`https://restcountries.com/v3/name/${req.query.name}`))
        .data
        .map(e => {
            return {
                name: e.name.common,
                id: e.cca3,
                capital : e.capital ? e.capital[0].toLowerCase() : 'not capital', 
                region: e.region,
                subregion: e.subregion,
                area:e.area,
                population: e.population,
                continent: e.continents[0],
                flags: e.flags[0] 
           }
        })
        if(!infName) res.send({error:"No existe pais con ese nombre"})
        return res.json(infName);
    } catch (err) {
        return res.status(404).json({error: err.message});
    }
}

const countryById = async (req,res) =>{
    try{
       
    const byId = await Country.findByPk(req.params.id, {include: Activity})
    if(byId) return res.json(byId)
    return res.status(404).send({error: 'No se encontro pais con ese id'})
}catch(error){
    return res.status(400).json({error: error.message})
}
}



const postActiv = async (req, res)=>{
    const { name, difficulty, duration, season, countriesAct}= req.body
  try{
   
    let newAct = await Activity.create({  name, difficulty, duration, season})
    countriesAct.forEach( async (e)=>{
        let findCountry = await Country.findAll({where: {name: e} });
         await newAct.addCountry(findCountry)
     })
    return res.status(201).send("Nueva actividad creada")
   }catch(error){
    return res.status(400).json({error: error.message})
    
   }
}

const getActivity = async(req, res) => {
    try {
        const getAct= await Activity.findAll({attributes:["id", "name", "season", "difficulty", "duration"], include: Country})
        return res.json(getAct);
    } catch (err) {
        console.log(err.message);
        return res.status(404).json({msj : err.message, err});
    }
}


module.exports={
    getAllCountry,
    countryById,
    getByName,
    postActiv,
    getActivity 
}






