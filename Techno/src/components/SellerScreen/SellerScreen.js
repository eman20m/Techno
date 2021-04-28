import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../../store/actions/userActions'
import { listProducts } from '../../store/actions/ProductActions'
import Rating from '../Rating/Rating'
import MessageBox from '../MessageBox';
import LoadingBox from '../LoadingBox';

import ProductItem from '../products/productItem/productItem'
export default function SellerScreen(props) {
    const sellerId = props.match.params.id;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const productList = useSelector(state => state.productList);
    const { loading: loadingProducts, error: errorProducts, products, } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(sellerId));
        dispatch(listProducts({ seller: sellerId }));
    }, [dispatch, sellerId]);
    return (
        <div className="row top">
            <div className="col-1">
                {loading ? (
                    <loadingBox></loadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                            <ul className="card card-body">
                                <li>
                                    <div className="row start">
                                        <div className="p-1">
                                            <img className="small" src={user.seller.logo} alt={user.seller.name} ></img>
                                        </div>
                                        <div className="p-1">
                                            <h1>
                                                {user.seller.name}
                                            </h1>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Rating rating={user.seller.rating} numReviews={user.seller.numReviews}></Rating>
                                </li>
                                <li>
                                    <a href={`mailto:${user.email}`}>Contact Seller</a>
                                </li>
                                <li>
                                    {user.seller.description}
                                </li>
                            </ul>
                        )
                }
            </div>
            <div className="col-3">
                {loadingProducts ? (
                    <loadingBox></loadingBox>
                ) : errorProducts ? (
                    <MessageBox variant="danger">{errorProducts}</MessageBox>
                ) : (
                            <>
                                {products.length === 0 && (<MessageBox>No Product Found</MessageBox>)}
                                <div className="row center">
                                {productList?.products?.data?.slice(1, 5).map((product, index) => {
                                    return (
                                      <div className="c-product-thumb" key={index}>
                                        <ProductItem product={product} />
                                      </div>
                                    )
                                  })}
                                    

                                </div>
                            </>
                        )}
            </div>

        </div>
    )
}
