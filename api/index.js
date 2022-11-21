//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require ('axios');
const { post } = require('./src/app.js');
// Syncing all the models at once.
conn.sync({ force: true }).then( () => {
  server.listen(3001, async() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
   
await axios(`http://localhost:3001/countries`)
await axios.post(`http://localhost:3001/activities`, {
  name:'marti',
  duration:2,
  difficulty: 3,
  season: 'spring',
  countriesAct: ['Brazil','Colombia','Argentina']
})
await axios.post(`http://localhost:3001/activities`, {
  name:'asereje',
  duration:2,
  difficulty: 5,
  season: 'summer',
  countriesAct: ['Italy','Romania','Argentina']
})
await axios.post(`http://localhost:3001/activities`, {
  name:'deje',
  duration:3,
  difficulty: 1,
  season: 'winter',
  countriesAct: ['Venezuela','Colombia','Argentina']
})
  });
});
