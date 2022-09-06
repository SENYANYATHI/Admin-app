import React,{ useState,useEffect } from "react";
import '../css/add.css'
import AdminDetailservice from "../confirg/adminservices"


function AddRoom (id) {

    const [RoomPrice,setPrice] = useState('');
    const [RoomDetails,setDetails] = useState('');
    const [services,setServices] = useState('');
    const [Rooms,setRooms] = useState('');
    const [message,setMessage] = useState('');

    
   
    const handleSubmit= async (e)=> {
        e.preventDefault ();
        setMessage("");
        
        if (RoomDetails === "" || RoomPrice === ""  || services === ""  || Rooms === "") {
            setMessage({error:true,msg: "ALL FIELDS ARE REQUIRED"});
            return;
        }
        const newrooms = {
            RoomDetails,
            RoomPrice,
            services,
            Rooms,
        };
        console.log(newrooms);
        try {
       
            await AdminDetailservice.AddRoom(newrooms);
            message({error:false, msg: "new room added successfully"});
        } catch(err){
        setMessage ({error: true ,msg: err.message});
       
        }
       
        setDetails("");
        setPrice("");
        setServices("");
        setRooms("");

        
    };
    const add=(() =>{
        console.log(RoomDetails)
        console.log(RoomPrice)
        console.log(services)
        console.log(Rooms)
    
  
       
});

    const editHandler = async() => {
        setMessage("");
        try {
            const docsnap = await AdminDetailservice.get (id);
            console.log("the record is :", docsnap.data());
            setDetails(docsnap.data().RoomDetails);
            setPrice(docsnap.data().RoomPrice);
            setServices(docsnap.data().services);
            setRooms(docsnap.data().Rooms);

        } catch(err) {
            setMessage({error:true, msg:err.message});
        }
    };
    useEffect(() => {
        console.log("the  id here is :" , id)
        if (id !== undefined && id !==""){
            editHandler();

        }
    },[id]);
   
  
   
  
    return(
        <div>
       
            <div>       
        <nav className="nav">
                <ul id="navbar">
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
           <li><a href="#">Rooms</a></li>
           <li><a href="#">History</a></li>
         
           </ul>
        </nav>
        </div>
        <form className="addroom" onSubmit={handleSubmit}>
            <h1>ADD NEW ROOM</h1>
            <br></br>
           
            <input type="text" placeholder="enter room price"  onChange={(e) => setPrice(e.target.value)}/>
            <br></br>
            <input type="text" placeholder="enter room details"  onChange={(e) => setDetails(e.target.value)}/>
        

            <select onChange={(e) => setServices(e.target.value)}>
            <option value="">select your own services</option>
            <option>breakfast</option>
            <option >spa area</option>
            <option >conference area</option>
            <option >tennis court</option>
        </select>
           <br></br>

       <select onChange={(e) => setRooms(e.target.value)}>
          <option >select your favourite room</option>
            <option >presidential room</option>
            <option ></option>
            <option  {..."selected"}>single room</option>
            <option >quads room</option>
            <option >ruirt room</option>
          </select>
          <br></br>
          
         <button type="submit" onClick={add}>Add</button>

          </form>

        </div>
    )
}
export default AddRoom;