import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import AddRoom from './components/addroom';
import Home from './components/home';
import { useState } from 'react';
import SignIn from './components/login';
import DisplayRoom from './components/displayRoom';
import Search from './components/search';


function App() {
 const [RoomId,setRoomId]= useState([]);

const getRoomsIdHandler =(id) => {
  console.log("the id for rooms to be edited" , id);
  setRoomId(id);
};
const [Services,setServices] =useState([]);

const addRoom = (( RoomDetails,RoomPrice,services,Rooms,) =>{
  setServices((roomDetails) => [...roomDetails,{

    RoomDetails:RoomDetails,
    RoomPrice:RoomPrice,
    services:services,
    services:services,
    Rooms:Rooms,
  }])
console.log(Services)
})

  
  return (
    
    <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<SignIn/>}/>
    <Route path='search' element={<Search/>}/>

     <Route path='/add' element={<AddRoom/>}/>
     <Route path='/list' element={<DisplayRoom/>} list={<addRoom/>}/>
    
   
  
     
   
    
    </Routes>
    </BrowserRouter>

  )


   
}

export default App;
