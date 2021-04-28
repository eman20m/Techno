
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../../store/actions/userActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { USER_UPDATE_RESET } from '../../store/types/userConstants';
import {useTranslation} from 'react-i18next';


export default function UserEdit(props){
  const userId = props.match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push('/userslist');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsSeller(user.isSeller);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  const {t,i18n} = useTranslation();

    return(
      <div>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
        <div className="container text-center">
          <div className="text-center text-white">
            <h1>{t("user Details")}</h1>
            <h1 className="mt-5">{t("Edit Product")} : {userId}</h1>
          </div>
          {loadingUpdate && <LoadingBox></LoadingBox>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
      </div>
      <form className="form container w-50" onSubmit={submitHandler}>
        {loading? (<LoadingBox/>)
        :error?(<MessageBox variant="danger">{error}</MessageBox>)
        :(
          <>
            <div className="form-group">
              <label For="name" dir="auto" style={{textAlign: 'start'}}><strong>{t("Name")}</strong></label>
              <input id="name" className="form-control" type="text" placeholder={t("Enter name")} value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="email"><strong>{t("Email")}</strong></label>
              <input id="email" className="form-control" type="text" placeholder={t("enteremail")} value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="form-group">
              <label For="isSeller"><strong>{t("Is Seller")}</strong></label>
              <input id="isSeller" className="form-control" type="checkbox" checked={isSeller} onChange={(e) => setIsSeller(e.target.checked)}></input>
            </div>
            <div className="form-group">
              <label For="isAdmin"><strong>{t("Is Admin")}</strong></label>
              <input id="isAdmin" className="form-control" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}></input>
            </div>
            
            <div className="form-group text-center mb-5">
              <label></label>
              <button className="btn btn-warning w-50" type="submit"><strong>{t("Update")}</strong></button>
            </div>
          </>
        )}
      </form>
    </div>
  
    )
}