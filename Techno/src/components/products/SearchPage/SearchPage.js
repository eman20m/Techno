import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../../store/actions/ProductActions';
import LoadingBox from '../../LoadingBox';
import MessageBox from '../../MessageBox';
import ProductItem from '../productItem/productItem';

export default function SearchPage(props) {
  const { name = 'all' } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({ name: name !== 'all' ? name : '' }));
  }, [dispatch, name]);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="font-weight-bold">{products?.length}: Results</div>
        )}
      </div>
      <div className="row top">
        <div className="col-2">
          <p className="font-weight-bold">Department</p>
          {
            products?.map((product)=>{
              return(
                <p key={product}>{product.category}</p>
              )
            })
          }
        </div>
        <div className="col-10">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row ml-5">
                {products?.map((product) => (
                  <ProductItem key={product._id} product={product} className="col-3 col-lg-3 col-sm-12 col-md-3 m-3"></ProductItem>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}