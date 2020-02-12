import React from 'react'
import './PersonCard.css'
const  PersonCard = ()=>{
    const url = 'https://randomuser.me/api/portraits/thumb/women/44.jpg';
        return (
            <div className>
                <img src={url} alt="44" />
              <div>
                  <h3>Name</h3>
                  <h5>Job</h5>
              </div>
            </div>
        )
  
}
export default PersonCard;
