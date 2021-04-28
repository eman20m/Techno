import "./AdminEditProducts.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProducts, updateProduct } from '../../store/actions/ProductActions';
import { PRODUCT_UPDATE_RESET } from '../../store/types/productConstants';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useTranslation } from "react-i18next";

export default function AdminEditProducts(props) {
  const [name, setName] = useState('');
  const [nameAr, setNameAr] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [categoryAr, setCategoryAr] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [brand, setBrand] = useState('');
  const [brandAr, setBrandAr] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionAr, setDescriptionAr] = useState('');
  const [discount, setDiscount] = useState('');

  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate, } = productUpdate;
  const { product } = productDetails;

  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProducts(productId));
      setName(productDetails?.product?.data?.name);
      setNameAr(productDetails?.product?.data?.nameAr);
      setPrice(productDetails?.product?.data?.price);
      setImage(productDetails?.product?.data?.image);
      setCategory(productDetails?.product?.data?.category);
      setCategoryAr(productDetails?.product?.data?.categoryAr);
      setCountInStock(productDetails?.product?.data?.countInStock);
      setBrand(productDetails?.product?.data?.brand);
      setBrandAr(productDetails?.product?.data?.brandAr);
      setDescription(productDetails?.product?.data?.description);
      setDescriptionAr(productDetails?.product?.data?.descriptionAr);
      setDiscount(productDetails?.product?.data?.discount);
    }

  }, [dispatch, productId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        nameAr,
        price,
        image,
        category,
        categoryAr,
        brand,
        brandAr,
        countInStock,
        description,
        descriptionAr,
      })
    );
    props.history.push('/AdminProducts')
  };
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
        <div className="container text-center">
          <div className="text-center text-white">
            <h1>{t("Product Details")}</h1>
            <h1 className="mt-5">{t("Edit Product")}: {productId}</h1>
          </div>
        </div>
      </div>
      <form className="form container w-50" onSubmit={submitHandler}>
        {productDetails?.loading ? (<LoadingBox />)
        : productDetails?.error ? (<MessageBox variant="danger">{productDetails?.error}</MessageBox>)
        : (
          <>
            <div className="form-group">
              <label For="name" dir="auto" style={{textAlign: 'end'}}><strong>{t("Name")}</strong></label>
              <input id="name" className="form-control" type="text" placeholder={t("Enter name")} value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-group" dir="rtl">
              <label For="nameAr" dir="auto" style={{textAlign: 'end'}}><strong>{t("Arabic Name")}</strong></label>
              <input id="nameAr" className="form-control" type="text" placeholder={t("Enter name")} value={nameAr} onChange={(e) => setNameAr(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="price"><strong>{t("Price")}</strong></label>
              <input id="price" className="form-control" type="text" placeholder={t("Enter price")} value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="image"><strong>{t("Image")}</strong></label>
              <input id="image" className="form-control" type="text" placeholder={t("Enter image")} value={image} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="category"><strong>{t("Category")}</strong></label>
              <input id="category" className="form-control" type="text" placeholder={t("Enter category")} value={category} onChange={(e) => setCategory(e.target.value)}></input>
              <select class="form-control" id="category" placeholder={t("Enter category")} onChange={(e) => setCategory(e.target.value)}>
                <option>computer accessories</option>
                <option>computer pc</option>
                <option>laptop</option>
                <option>smart screen</option>
                <option>mobile phones</option>
                <option>computer parts</option>
              </select>
            </div>
            <div className="form-group" dir="rtl">
              <label For="categoryAr"><strong>{t("CategoryAr")}</strong></label>
              <input id="categoryAr" className="form-control" type="text" placeholder={t("Enter categoryAr")} value={categoryAr} onChange={(e) => setCategoryAr(e.target.value)}></input>
              <select class="form-control" id="categoryAr" placeholder={t("Enter categoryAr")} onChange={(e) => setCategoryAr(e.target.value)}>
                <option>ملحقات الكمبيوتر</option>
                <option>كمبيوتر مكتبى</option>
                <option>لاب توب</option>
                <option>شاشه ذكيه</option>
                <option>موبايل</option>
              <option>الكترونيات</option>
              </select>
            </div>
            <div className="form-group">
              <label For="brand"><strong>{t("Brand")}</strong></label>
              <input id="brand" className="form-control" type="text" placeholder={t("Enter brand")} value={brand} onChange={(e) => setBrand(e.target.value)}></input>
            </div>
            <div className="form-group" dir="rtl">
              <label For="brandAr"><strong>{t("BrandAr")}</strong></label>
              <input id="brandAr" className="form-control" type="text" placeholder={t("Enter brandAr")} value={brandAr} onChange={(e) => setBrandAr(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="countInStock"><strong>{t("Count In Stock")}</strong></label>
              <input id="countInStock" className="form-control" type="text" placeholder={t("Enter countInStock")} value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="description"><strong>{t("Description")}</strong></label>
              <textarea id="description" className="form-control" rows="2" type="text" placeholder={t("Enter description")} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <label For="descriptionAr"><strong>{t("DescriptionAr")}</strong></label>
              <textarea id="descriptionAr" className="form-control" rows="2" type="text" placeholder={t("Enter descriptionAr")} value={descriptionAr} dir="rtl" onChange={(e) => setDescriptionAr(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <label For="discount" ><strong>{t("Discount")}</strong></label>
              <input id="discount" className="form-control" type="discount" placeholder={t("Enter discount")} value={discount} onChange={(e) => setDiscount(e.target.value)}></input>
            </div>
            <div className="form-group text-center mb-5">
              <label></label>
              <button className="btn btn-warning w-50" type="submit"><strong>{t("Update")}</strong></button>
            </div>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
          </>
        )}
      </form>
    </div>
  );
}
