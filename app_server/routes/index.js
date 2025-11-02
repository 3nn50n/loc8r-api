const express = require('express');
const router = express.Router();
//const ctrlMain = require('../controllers/main');

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
      .route('/location/:locationid/review/new')
      .get(ctrlLocations.addReview)
      .post(ctrlLocations.doAddReview);

router.get('/about', ctrlOthers.about);

module.exports = router;
/* GET home page. */
//router.get('/', ctrlMain.index);



/*const homepageController = (req,res)=>{
  res.render('index',{title: 'Express by 2021810013 김상원'});
};

router.get('/', homepageController);
*/
//module.exports = router;
