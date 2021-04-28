import "./AdminOrderList.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../../store/actions/orderActions';
import { ORDER_DELETE_RESET } from '../../store/types/orderConstants';
import {useTranslation} from 'react-i18next';

export default function AdminOrderList(props) {
  const sellerMode = props.match.path.indexOf('./seller') >= 0;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const { loading: loadingDelete, error: errorDelete, success: successDelete, } = orderDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders({seller:sellerMode ? userInfo._id:''}));
  }, [dispatch, sellerMode ,successDelete]);
  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  const {t,i18n} = useTranslation();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectionT">
        <div className="container text-center">
          <div className="mb-5 text-center text-white">
            <h1>{t("Orders List")}</h1>
          </div>
          {loadingDelete && <LoadingBox></LoadingBox>}
          {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        </div>
      </div>
      {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox variant="danger">{error}</MessageBox>)
        : (
          <div className="mx-5 text-center mt-5">
            <table className="table table-striped table-bordered table-dark mb-5">
              <thead>
                <tr>
                  <th className="h5">{t("ID")}</th>
                  <th className="h5">{t("USER")}</th>
                  <th className="h5">{t("DATE")}</th>
                  <th className="h5">{t("TOTAL")}</th>
                  <th className="h5">{t("PAID")}</th>
                  <th className="h5">{t("DELIVERED")}</th>
                  <th className="h5">{t("ACTIONS")}</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order?.user?.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                    <td>{order.grandPrice.toFixed(2)}</td>
                    <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                    <td>
                      <button type="button" className="btn btn-primary mr-2" onClick={() => { props.history.push(`/order/${order._id}`); }}>
                       {t("Details")}
                  </button>
                      <button type="button" className="btn btn-danger" onClick={() => deleteHandler(order)}>
                      {t("Delete")}
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  );
}
