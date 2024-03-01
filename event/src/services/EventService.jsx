import axios from "axios"

const BASE_REST_API_URL = "http://localhost:8080/api/events"
class EventService {
    getAllEvents() {
        const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25leSIsImlhdCI6MTcwOTI3ODk3OSwiZXhwIjoxNzA5MzY1Mzc5fQ.ga0p9YX8OYwaEqt2wNPiOZlGIx3QXMOH324WAg3cs6ZF0jpnvwW9dGTD97zxIo9q";
        const headers = {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials':true
        };
        console.log(BASE_REST_API_URL)
        return axios.get(BASE_REST_API_URL, { headers });
    }
    addEvent(event){
        return  axios.post(BASE_REST_API_URL,event);
    }
    getEventById(id){
        return axios.get(BASE_REST_API_URL+"/"+id)
    }
    updateEventById(id,event)
    {
        return axios.put(BASE_REST_API_URL+"/"+id,event)
    }
    deleteEventById(id){
        return axios.delete(BASE_REST_API_URL+"/"+id)
    }
    saveUserRegistration(userData)
    {
        return axios.post("http://localhost:8080/register",userData);
    }
    userLogin(data)
    {
        return axios.post("http://localhost:8080/login",data);
    }
}
export default new EventService();