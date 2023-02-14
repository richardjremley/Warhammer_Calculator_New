
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../global";


function DefendCard() {
    const [ ,setDefend] = useState([]);
    const intialState = {
      name: ``,
      T: null,
      wounds: null,
      save: null,
      invSave: null,
      FNP: null,
    };
  
    const [formState, setFormState] = useState(intialState);

       useEffect(() => {
        const getDefend = async () => {
          try {
            let res = await axios.get(`${BASE_URL}/api/defend`, formState);
            setDefend(res.data.getDefend);
          } catch (err) {
            console.log(err);
          }
        };
        getDefend();
      }, ); 

  const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

    
      const handleSubmit = async (event) => {

        event.preventDefault();
       let res =  await axios.put(`${BASE_URL}/api/defend/1`, formState)
       console.log(res.data)

        console.log(formState);

        setFormState(intialState);
      };
    

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name"> Name: </label>
          <input
            type="text"
            placeholder="Space Marine"
            id="Name"
            onChange={handleChange}
            value={formState.name}
          />
          <label htmlFor="T"> Toughness: </label>
          <input
            type="number"
            id="T"
            placeholder="4"
            onChange={handleChange}
            value={formState.T}
          />
          <label htmlFor="Wounds"> Wounds: </label>
          <input
            type="number"
            id="Wounds"
            placeholder="2"
            onChange={handleChange}
            value={formState.wounds}
          />
          <label htmlFor="Save"> Armor Save: </label>
          <input type="number" placeholder="3"
          id="Save" onChange={handleChange} value={formState.Save} />
          <label htmlFor="Inv_Save"> Invulnerable Save: </label>
          <input
            type="number"
            id="Inv_Save"
            onChange={handleChange}
            value={formState.invSave}
          />
          <label htmlFor="FNP"> Feel no Pain: </label>
          <input
            type="number"
            id="FNP"
            onChange={handleChange}
            value={formState.FNP}
          />
          <button type="submit">Send</button>
        </form>
    
    

    
      );


}

export default DefendCard

