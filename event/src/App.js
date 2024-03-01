import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { RegistrationComponent } from './components/RegisterComponent';
import { LoginComponent } from './components/LoginComponent';
import { RequireAuth } from './components/RequireAuth';
import {ListEvents} from './components/ListEvents';
import {AddEvent} from './components/AddEvent'; 
import {Header} from './components/Header';
import {Footer} from './components/Footer'
function App() {
  return (
    <div className="App">
        <div className='container'>
           <Routes>
            {/* <Route index element={<RegistrationComponent/>}/>  */}
            {/* UNPROTECTED ROUTES */}
            <Route path="/" element={<RegistrationComponent/>}/>
            <Route path="/register" element={<RegistrationComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
           
            {/* PROTECTED ROUTES */}
            <Route element={<RequireAuth/>}>
            <Route path="/events" element={<ListEvents/>}/>
            <Route path="/addEvents" element={<AddEvent/>}/>
            <Route path="/updateEvent/:id" element={<AddEvent/>}/>
            </Route>
            {/* COMMON ROUTING */}
            <Route path="*" element={<LoginComponent/>}/>
            </Routes>
            </div>
    </div>
  );
}
 
export default App;
