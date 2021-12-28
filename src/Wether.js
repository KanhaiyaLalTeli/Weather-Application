import React,{useState,useEffect} from 'react'
import './App.css';


function Wether() {
    const [city,setCity] =useState(null);
    const [condition,setCondition]= useState(null);
    const [search,setSearch] = useState('rajsamand');

    useEffect( () => {
       const fetchData = async () => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fc61059490f38fcc4a34640065c73b41`
            const response= await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            setCondition(resJson.Wether);
            //console.log(condition)
       }

       fetchData();
    },[search])

    return (
        <div className='box'>
            <div className='input-data'>
                <input type='search'
                className='inputField'
                value={search}
                onChange={(event)=> {
                    setSearch(event.target.value);
                }}
                
                />
            </div>
            { !city ? (<p className='error'>No Data found</p>) :
               (<div className='info'>
                <h2 className='location'>
                <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>{city.temp}°C</h1>
                <h3 className='tempMin_max'>Min :{city.temp_min}°C  | max:{city.temp_max}°C </h3>
                <h3 className='tempMin_max'>Pressure :{city.pressure}|  Humidity :{city.humidity}</h3>
               </div>)
            } 
            
        </div>
    )
}

export default Wether;