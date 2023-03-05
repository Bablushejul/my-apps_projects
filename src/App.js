import React,{useState} from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUserList((preUserList)=>{
      return [...preUserList,{name:uName,age:uAge,id:Math.random().toString()}];

    })
  }
  return (
    <div >
      
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
