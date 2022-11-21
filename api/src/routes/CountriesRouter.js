const { Router } = require ('express');
const { countryById,  getAllCountry, getByName} =require ('../controllers/controllers')
const {Op, Country}= require('../db');
const router = Router()
 
// const getApy = async()=>{
//     const dataBase = await Country.findAll()
//     if(!dataBase.length){
//    const response= await axios.get('https://restcountries.com/v3.1/all')
//         const apInf = response.data.map(e =>{
//             return {
//              name: e.name.common,
//              id: e.cca3,
//              capital : e.capital ? e.capital[0].toLowerCase() : 'not capital', 
//              region: e.region,
//              subregion: e.subregion,
//              area:e.area,
//              population: e.population,
//              continent: e.continents[0],
//              flags: `${e.flags.png}` 
//         }
//         })
//         await Country.bulkCreate(apInf);
//         const db = Country.findAll()
//         return db;
//     }
//     return dataBase
    
// }
router.get('/', getAllCountry);
router.get('/', getByName);
router.get('/:id',countryById);






module.exports = router;