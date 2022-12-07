import React,{useState,  useEffect} from 'react';
import axios from "axios";

function City({asd}) {

    let $id = 1;
    const [getCity,setCity] = useState([]);
    React.useEffect(()=>{
        axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
            "country": "India"
              })
              .then(function (response) {
            console.log('City',response.data.data);
           let $html = '<option value="">Select City</option>';
            response.data.data.forEach(function(data) {
              $html += '<option value="'+data+'">'+data+'</option>'
            })
            document.getElementById('city_id').innerHTML = $html;
        });
    },[])
    return(
        <div>
           <select id="city_id">
           </select>
           <button type="button" onClick={()=>asd(true)}> click </button>
        </div>
    );
    }

export default City;