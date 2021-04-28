import '../AdminProducts/AdminProducts.css'
import react, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, listUsers } from '../../store/actions/userActions'
import { USER_DETAILS_RESET } from '../../store/types/userConstants';
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import {useTranslation} from 'react-i18next';

export default function UsersList(props){
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;
    console.log(userList);
  
    const userDelete = useSelector((state) => state.userDelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = userDelete;

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch({
          type: USER_DETAILS_RESET,
        });
        dispatch(listUsers());
        
    }, [dispatch, successDelete]);

    const deleteHandler = (user) => {
        if (window.confirm('Are you sure?')) {
          dispatch(deleteUser(user._id));
        }
    };
    const {t,i18n} = useTranslation();

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
                <div className="container text-center">
                    <div className="mb-5 text-center text-white">
                        <h1>{t("Users List")}</h1>
                    </div>
                    {loadingDelete && <LoadingBox></LoadingBox>}
                    {errorDelete && <MessageBox variant="danger">{userDelete?.error}</MessageBox>}
                    {successDelete && (
                        <MessageBox variant="success">User Deleted Successfully</MessageBox>
                    )}
                </div>
            </div>

            <div className="mx-5 text-center mt-5">
                <table className="table table-striped table-bordered table-dark">
                <thead>
                    <tr>
                    <th className="h5">{t("#No")}</th>
                    <th className="h5">{t("ID")}</th>
                    <th className="h5">{t("NAME")}</th>
                    <th className="h5">{t("Email")}</th>
                    <th className="h5">{t("Is Seller")}</th>
                    <th className="h5">{t("Is Admin")}</th>
                    <th className="h5">{t("ACTIONS")}</th>
                    </tr>
                </thead>
                <tbody>
                    {loading? (<LoadingBox/>)
                    :error?(<MessageBox variant="danger">{error}</MessageBox>)
                    :(
                        users?.map((user,index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isSeller? 'Yes': 'No'}</td>
                            <td>{user.isAdmin? 'Yes': 'No'}</td>
                            <td>
                            <button type="button" className="btn btn-primary mr-2" onClick={()=>props.history.push(`/user/${user._id}/edit`)}>{t("Edit")}</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(user)}>{t("Delete")}</button>
                            </td>
                        </tr>
                        )
                    })
                    )}
                </tbody>
                </table>
            </div>

        </div>
    )
}