import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../../Techno/src/data.js'
import Product from '../models/productModel.js';
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

const productRouter = express.Router();
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const category = req.query.category || '';
    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const products = await Product.find({
      ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
    }).populate('seller', 'seller.name seller.logo');
    res.send(products);
  })
);

productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);
//details product aPi
productRouter.get('/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    );
    if (product) { res.send(product); }
    else { res.status(404).send({ message: 'Product Not Found' }); }
  })
);

productRouter.post(
  '/', isAuth, isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample name ' + Date.now(),
      nameAr: 'نموذج إسم' + Date.now(),
      seller: req.user._id,
      image: '../assets/Products/pro-1.jpg',
      brand: 'sample brand',
      brandAr: 'نموذج براند',
      category: 'sample category',
      categoryAr: 'نموذج الفئة',
      description: 'sample description',
      descriptionAr: 'نموذج وصف',
      price: 0,
      discount: 0,
      countInStock: 0,
      rating: 0,
      numReviews: 0,
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created', product: createdProduct });
  })
);

productRouter.put(
  '/:id',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    );
    if (product) {
      product.name = req.body.name;
      product.nameAr = req.body.nameAr;
      product.price = req.body.price;
      product.image = req.body.image;
      product.category = req.body.category;
      product.categoryAr = req.body.categoryAr;
      product.brand = req.body.brand;
      product.brandAr = req.body.brandAr;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      product.descriptionAr = req.body.descriptionAr;
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    console.log(categories);
    res.send(categories);
  })
);


//////////////review

productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      if (product.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'You already submitted a review' });
      }
      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Review Created',
        review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;
