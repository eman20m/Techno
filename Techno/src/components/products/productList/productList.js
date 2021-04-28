import { useEffect, useState } from "react";
import ProductItem from "../productItem/productItem";
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from "../../../store/actions/ProductActions";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";
import { Link } from "react-router-dom";


export default function ProductList(props) {
    const sellerMode = props.match.path.indexOf('/seller')>=0 
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)

    const userSignin = useSelector((state) =>state.userSignin);
    const {userInfo} =userSignin;
    useEffect(() => {
        dispatch(listProducts({seller:sellerMode?userInfo._id:''}));
    }, [dispatch]);


    let padgeNumpers = [];
    let pageSize = 9;
    const [currentPage, setCurrentPage] = useState(0);

    const calculateNumberOfPages = (leng) => {
        padgeNumpers = []
        for (let index = 0; index < leng / 9; index++) {
            padgeNumpers.push(index + 1)

        }
    }
     
    const getSliceArrayOfProduct=()=>{
        calculateNumberOfPages(productList.products?.length)
        const start=pageSize*currentPage;
        const list=productList.products?.slice?.(start,start+pageSize);
        return list
    }

    const [lowPrice, setLowPrice]=useState(false)
    const [highPrice, setHighPrice]=useState(false)
    const [name, setName]=useState(false)
    const sortByName=()=>{
        
        return(
            getSliceArrayOfProduct().sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
        )
    }
    const sortByHighPrice=()=>{
        return(
            getSliceArrayOfProduct().sort((a, b) => a.price-a.discount < b.price-b.discount ? -1 
            : (a.price-a.discount > b.price-b.discount ? 1 : 0))
        )
    }

    const sortByLowPrice=()=>{

        return(
            getSliceArrayOfProduct().sort((a, b) => b.price-b.discount < a.price-a.discount ? -1 
            : (b.price-b.discount > a.price-a.discount ? 1 : 0))
        )
    }

    const [search, setsearch]=useState(false)
    const [searchValue, setSearchValue]=useState('')
    const searchByCategory=(name)=>{
        let productsOfCategory=[]
        productList?.products?.forEach(element => {
            console.log(element);
            if(element.category===name){
                productsOfCategory.push(element);
            }
        });
        return productsOfCategory;
    }
    
    return (
        <>
            <hr />

            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-3 pt-1">
                        <div className="pt-3 pb-3">
                            <h6 className="pb-3 font-wight-bold">Product categories</h6>
                            <Link onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false);setsearch(true);setSearchValue('computer accessories')}}><h6>Computer Accessories</h6></Link>
                            <Link onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false);setsearch(true);setSearchValue('smart screen')}}><h6>Smart Screen</h6></Link>
                            <Link onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false);setsearch(true);setSearchValue('electronic')}}><h6>Electronic</h6></Link>
                            <Link onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false);setsearch(true);setSearchValue('laptop')}}><h6>Laptop</h6></Link>
                            <Link onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false);setsearch(true);setSearchValue('mobile')}}><h6>Mobile</h6></Link>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-12 col-lg-5 pb-5">
                                    <select className="form-control" name="" id="">
                                        <option value="1" onClick={()=>{setHighPrice(false);setName(false);setLowPrice(false); setsearch(false)}}>Featured</option>
                                        <option value="2" onClick={()=>{setHighPrice(false);setName(false);setLowPrice(true);setsearch(false)}}>Price low to high</option>
                                        <option value="3" onClick={()=>{setHighPrice(true);setName(false);setLowPrice(false);setsearch(false)}}>Price high to low</option>
                                        <option value="4" onClick={()=>{setHighPrice(false);setName(true);setLowPrice(false);setsearch(false)}}>Name</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {productList.loading ? (<LoadingBox />)
                                : productList.error ? (<MessageBox variant="danger">{productList.error}</MessageBox>)
                                : name? (
                                    sortByName().map((product, index) => {
                                        console.log(product);
                                        return (
                                        <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                        )
                                    })
                                )
                                : lowPrice? (
                                    sortByLowPrice().map((product, index) => {
                                        console.log(product);
                                        return (
                                        <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                        )
                                    })
                                )
                                : highPrice? (
                                    sortByHighPrice().map((product, index) => {
                                        console.log(product);
                                        return (
                                        <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                        )
                                    })
                                )
                                : search?(
                                    searchByCategory(searchValue)?.map((product, index) => {
                                        console.log(product);
                                        return (
                                        <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                        )
                                    })
                                )
                                :(  
                                    getSliceArrayOfProduct()?.map((product, index) => {
                                    console.log(product);
                                    return (
                                    <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                    )
                                    })
                                )}
                            </div>

                            <div className="row">
                                <ul class="pagination justify-content-end mb-0 pt-5">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">
                                            <i class="fas fa-angle-left"></i>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    {productList?.products?.length>9?
                                     padgeNumpers.map((padgeNumper, index) => {
                                        return (
                                            <li key={index} className={index === currentPage ? 'page-item active' : 'page-item'} onClick={() => { setCurrentPage(index) }}>
                                                <a className="page-link" >{padgeNumper}</a>
                                            </li>
                                        )
                                        })
                                        : searchByCategory(searchValue)?.length<9 ?(
                                        <li className='page-item active'>
                                            <a className="page-link" >1</a>
                                        </li>
                                        )
                                        :(<h></h>)
                                    }

                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            <i class="fas fa-angle-right"></i>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

