const { Router }= require('express');
const { postActiv, getActivity } = require('../controllers/controllers');
const router = Router()



router.post('/', postActiv);
router.get('/', getActivity);









module.exports= router;
