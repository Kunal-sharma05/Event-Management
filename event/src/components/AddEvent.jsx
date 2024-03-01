import React, { useState, useEffect } from 'react'
import EventService from '../services/EventService';
import { Link, useNavigate, useParams } from 'react-router-dom';


export const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [maxAttendees, setMaxAttendees] = useState('');
    const [registrationFees, setRegistrationFees] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()
    const changeTitle=()=>{
        if(id){
            console.log("returned title  update event .id",{id});
            return <h2 className="text-center">Update event</h2>
        }
        else{
            console.log("returned title  add event");
            return <h2 className="text-center">Add event</h2>
        }
    }
    const updateButton=()=>{
        if(id){
            console.log("returned title  update event .id",{id});
            return <h2 className="text-center">Update </h2>
        }
        else{
            console.log("returned title  add event");
            return <h2 className="text-center">Add event</h2>
        }
    }

    useEffect(() => {
        console.log("useEffect triggered.... ")
        console.log("id value obtained from url using useParams()", id)
        if (id) {
            EventService.getEventById(id).then((response) => {
                console.log("Response recieved from getbyid API", JSON.stringify(response.data));
                setTitle(response.data.title);
                setDescription(response.data.description);
                setLocation(response.data.location);
                setMaxAttendees(response.data.maxAttendees);
                setRegistrationFees(response.data.registrationFees);
                console.log("state variable changed. ")
                
            }).catch(error=>{console.log("Error recieved from save api...",error)})
        }
    }, [])
    const saveOrUpdateEvent = (e) => {
        e.preventDefault();
        //let emailId=email;
        const event = { title, description, location, maxAttendees, registrationFees }
        console.log("Event feed from home:", event);
        if(id){
            EventService.updateEventById(id,event)
            .then((response) => {
                console.log("response recieved from saved API..." + JSON.stringify(response))
                navigate('/events')
            }).catch(error => { console.log("error recieved from saved API...", error) });
        }
        else{
        EventService.addEvent(event).
            then((response) => {
                console.log("response recieved from saved API..." + JSON.stringify(response))
                navigate('/events')
            }).catch(error => { console.log("error recieved from saved API...", error) });
        }
    }
    
    return ( 
        <div>
            {console.log("Application Rendered.. ")}
            <div className="container">
                <div className="card col-md-6 offset-md-3">
                    {changeTitle()}
                    <div className="card-body">
                        <form>
                            {/* Title of the event text box */}
                            <div className="form-group mb-2">
                                <label className="form-label">Title of the event</label>
                                <input
                                    type="text"
                                    placeholder='Enter the title of the event'
                                    name="titleEvent"
                                    value={title}
                                    className='form-control'
                                    onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                            {/* Description of the event text box */}
                            <div className="form-group mb-2">
                                <label className="form-label">Requirement of the event</label>
                                <input
                                    type="text"
                                    placeholder='Enter the description of the event'
                                    name="descriptionEvent"
                                    value={description}
                                    className='form-control'
                                    onChange={(e) => { setDescription(e.target.value) }} />
                            </div>
                            {/* Location of the event text box */}
                            <div className="form-group mb-2">
                                <label className="form-label">Location of the event</label>
                                <input
                                    type="text"
                                    placeholder='Enter the location of the event'
                                    name="Location"
                                    value={location}
                                    className='form-control'
                                    onChange={(e) => { setLocation(e.target.value) }} />
                            </div>
                            {/* max attendees of the event text box */}
                            <div className="form-group mb-2">
                                <label className="form-label">Max attendees of the event</label>
                                <input
                                    type="text"
                                    placeholder='Enter the Max number of attendees it can accomodate in the event'
                                    name="maxAttendees"
                                    value={maxAttendees}
                                    className='form-control'
                                    onChange={(e) => { setMaxAttendees(e.target.value) }} />
                            </div>
                            {/* Registration fees of the event text box */}
                            <div className="form-group mb-2">
                                <label className="form-label">Registration fees of the event</label>
                                <input
                                    type="text"
                                    placeholder='Enter the registration fees of the event'
                                    name="Registration fees "
                                    value={registrationFees}
                                    className='form-control'
                                    onChange={(e) => { setRegistrationFees(e.target.value) }} />
                            </div>
                            {/* submit-button  */}
                            <button onClick={(e) => saveOrUpdateEvent(e)} className='btn btn-success'>Save Event</button>&nbsp;&nbsp;
                            <Link to="/events" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};
