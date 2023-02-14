

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../global";




function AttackCard() {
    const [ ,setAttacks] = useState([]);
    const intialState = {
      name: ``,
      shotsNumber: null,
      BS: null,
      S: null,
      AP: null,
      damage: null,
    };
  
    const [formState, setFormState] = useState(intialState);
  
    useEffect(() => {
      const getAttacks = async () => {
        try {
          let res = await axios.get(`${BASE_URL}/api/attack`);
          setAttacks(res.data.GetAttacker);
        } catch (err) {
          console.log(err);
        }
      };
      getAttacks();
    }, []);  
  

    const handleChange = async (event) => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
  

    const handleSubmit = async (event) => {

      event.preventDefault();
      let res = await axios.put(`${BASE_URL}/api/attack/1`, formState)
      console.log(res.data)

      console.log(formState);

      setFormState(intialState);
      
    };
  

    return (
      <p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input
            placeholder="Bolter"
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
          />
          <label htmlFor="shotsNumber"> Number of Shots: </label>
          <input
            type="number"
            placeholder="2"
            id="shotsNumber"
            onChange={handleChange}
            value={formState.shotsNumber}
          />
          <label htmlFor="BS"> Ballistic Skill: </label>
          <input
            type="number"
            placeholder="3"
            id="BS"
            onChange={handleChange}
            value={formState.BS}
          />
          <label htmlFor="AP"> Strength: </label>
          <input
            type="number"
            placeholder="4"
            id="S"
            onChange={handleChange}
            value={formState.S}
          />
          <label htmlFor="message"> Armor Piercing: </label>
          <input
            type="number"
            placeholder="1"
            id="AP"
            onChange={handleChange}
            value={formState.AP}
          />
          <label htmlFor="damage"> Damage: </label>
          <input
            type="number"
            placeholder="1"
            id="damage"
            onChange={handleChange}
            value={formState.damage}
          />
          <button type="submit">Send</button>
        </form>
      </p>
    );
}

export default AttackCard