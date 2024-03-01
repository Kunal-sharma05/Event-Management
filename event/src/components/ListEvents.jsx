import React, { useEffect, useState } from 'react'
import EventService from '../services/EventService'
import { Link,useNavigate } from 'react-router-dom'
import { Header } from './Header'

export const ListEvents = () => {
    //const [state variable,function that can change the state variable]
    const [eventArray, setEventArray] = useState([])
    const navigate = useNavigate()
    const fetchAllEvents=()=>{
        console.log("fetch all events....")
        EventService.getAllEvents().then((response)=>{
            console.log("response recieved from the api",response.data)
           setEventArray(response.data);
           console.log('Response recieved from API ',response.data)
        })
    }
        useEffect(() => {
            console.log("use effect....")
            fetchAllEvents();
        }, []);        
    const deleteEvent=(id)=>{
        console.log("Delete event handler fired. Id value recieved = ",id);
        EventService.deleteEventById(id)
        .then((response) => {
            console.log("response recieved from saved API..." + JSON.stringify(response))
           fetchAllEvents();
        }).catch(error => { console.log("error recieved from saved API...", error) });
    }
    return (
        <div className='container'>
            <Header/>
            {console.log("Application rendered")}
            <h2 className="text-center">Event data</h2>
            <Link to="/addEvents" className='btn btn-primary mb-3'>Add Event</Link>
            <table className="table table-bordered table-info table-striped">
                <thead>
                    <tr className="table-dark">
                    <th>Title</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eventArray.map((events,key)=><tr key={key}>
                            <td>{events.title}</td>
                            <td>{events.description}</td>
                            <td>{events.location}</td>
                            <td><Link to={`/update/${events.id}`}className='btn btn-success'>update</Link><br/>
                            <button className='btn btn-danger' onClick={()=>deleteEvent(events.id)}>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

