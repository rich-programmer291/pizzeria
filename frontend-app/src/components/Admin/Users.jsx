import React, {useEffect} from 'react'
import { Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getAllUsers } from '../../actions/userAction';
import { RiDeleteBin6Line } from "react-icons/ri";
import Loader from '../Loader';
import Error from '../Error';

const Users = () => {

  const dispatch = useDispatch();
  const usersState = useSelector(state => state.getAllUsersReducer);
  const {loading, users, error } = usersState;

  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])

  return (
    <>
    {loading && (<Loader />)}
    {error && (<Error error={error} />)}
    {
      <>
      <Table striped bordered hover >
          <thead>
            <tr >
              <th>S/No.</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th style={{textAlign:'center'}}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice().reverse().map((user, index) => (
              <tr key={user._id} style={{fontSize:'0.85rem'}}>
                <td>{index+1}</td>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{textAlign:'center'}}>
                  <div onClick={()=>{dispatch(deleteUser(user._id))}}>
                    <RiDeleteBin6Line style={{color: '#EE4E4E'}}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    }
    </>
  )
}

export default Users