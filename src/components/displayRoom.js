import React, { useEffect, useState } from "react";
import "../css/DisplayRoom.css";
import AdminDetailservice from "../confirg/adminservices"
import { addDoc } from "firebase/firestore";


function DisplayRoom (getRoomsId) {
    const[rooms, setrooms]= useState([]);
    useEffect(() => {
            getRooms();

    }, []);

 const getRooms = async() => {
        const data = await AdminDetailservice.getAllRooms();
        console.log(data.docs);
        setrooms(data.docs.map((doc) => ({...doc.data(), id :doc.id })))

    };
    const editHandler= async (id) => {
        await AdminDetailservice.updateRoom(id);
        getRoomsId();
    };

    const deleteHandler = async (id) => {
        await AdminDetailservice.deleteRoom(id);
        getRoomsId();
        alert("Rooms deleted")
    };
    return(


<>
<div className="mb-2">
    <button variant="dark edit" onClick={getRoomsId }>
        REFRESH LIST
        </button>

</div>

{/*<pre>{JSON.stringify(employees,undefined,2)}</pre>*/}

<caption><strong>ROOMS DETAILS</strong></caption>
    

    <table striped bordered hover size="sm">

<thead>
    <tr>
        <th>ROOM DETAILS</th>
        <th>ROOM PRICES</th>
        <th> TYPE OF SERVICES</th>
        <th>TYPE OF ROOMS</th>
       
    </tr>

</thead>

<tbody>



    {rooms.map((doc,index) => {
   
return( 

<tr key={ doc.id}>
<td>{index + 1}</td>
<td>{doc.RoomDetails}</td>
<td>{doc.RoomPrice}</td>
<td>{doc.services}</td>
<td>{doc.Rooms}</td>
<td>
<button variant="secondary" className="edit" 
onClick={(e) => editHandler(doc.id)}>edit</button>
<button variant="dark delete" className="delete" onClick={(e) => deleteHandler(doc.id) }>
        delete
        </button>

</td>
</tr>


);
    })}
  
 
</tbody>
</table>
        
   
</>         
        
    );
    
}
export default DisplayRoom;