const router = require('express').Router();
const { product } = require('../controllers');

router.get('/:id', product.get.byId);
router.get('/', product.get.all);

router.post('/add', product.post.add);

module.exports = router;