import logo from './logo.svg';
// import './App.css';
import './componente/ProjectStyle.css'
import {useState} from 'react';
import { Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componente/Home';
import Addroom from './componente/Addroom';
import AddMachine from './componente/AddMachine';





function App() {

  const[roomArr,setRoomArr]=useState([]);

  const addToRoomArr=(type,name,color)=>{
    setRoomArr([...roomArr,{type:type, name:name, color:color, machineArr:[]}]);
  }

  const[rightRoom,setRightRoom]=useState({});

  const openTheRightRoom=(index)=>{
setRightRoom({name:roomArr[index].name, type:roomArr[index].type, index:index})
  };

  
  







 

  return (
  <div className="App" >
   
   <h1>Smart house</h1>
<BrowserRouter>
<Routes>
  <Route path='/smartHouse' element={<Home openTheRightRoom={openTheRightRoom} roomArr={roomArr}/>}/>
  <Route path='/addroom' element={<Addroom addToRoomArr={addToRoomArr}/>}/>
  <Route path="/addmachine" element={<AddMachine setRoomArr={setRoomArr} roomArr={roomArr} name={rightRoom.name} type={rightRoom.type} index={rightRoom.index}/>}/>

</Routes>


</BrowserRouter>

  </div>
);
}

export default App;