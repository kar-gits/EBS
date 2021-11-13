//Using Algolia API in product searching

//Including the required packages and assigning it to Local Variables
const router = require('express').Router();
const config = require('../config');


const algoliasearch = require('algoliasearch');
const client = algoliasearch(config.algolia_app_id, config.algolia_api_key);
const index = client.initIndex(config.algolia_index);

//Function providing product search functionality 
router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});

//Exporting the module 
module.exports = router;

