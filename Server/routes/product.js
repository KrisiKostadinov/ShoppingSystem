const router = require('express').Router();
const { product } = require('../controllers');

router.get('/:id', product.get.byId);
router.get('/', product.get.all);

router.post('/add', product.post.add);
router.post('/edit/:id', product.post.edit);

router.delete('/delete/:id', product.delete.byId);

module.exports = router;