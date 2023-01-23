import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../global";

function SolutionCard(){
    const [submit, hasSubmitted] = useState();
    let [solutions, setSolutions] = useState([]);
    useEffect(() => {
      const getSolutions = async () => {
        try {
          let res = await axios.get(`${BASE_URL}/api/defend/solution`);
          console.log(res.data);
          setSolutions(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getSolutions();
    }, []);
    console.log(solutions);
  
    let [hits, setHits] = useState([]);
    useEffect(() => {
      const getHits = async () => {
        try {
          let res = await axios.get(`${BASE_URL}/api/defend/hits`);
          console.log(res.data);
          setHits(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getHits();
    }, []);
  
    let [wounds, setWounds] = useState([]);
    useEffect(() => {
      const getWounds = async () => {
        try {
          let res = await axios.get(`${BASE_URL}/api/defend/wounds`);
          console.log(res.data);
          setWounds(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getWounds();
    }, []);
  
    let [unsaved, setUnsaved] = useState([]);
    useEffect(() => {
      const getUnsaved = async () => {
        try {
          let res = await axios.get(`${BASE_URL}/api/defend/unsaved`);
          console.log(res.data);
          setUnsaved(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUnsaved();
    }, []);
  
    function refreshPage() {
      window.location.reload(false);
    }
    function toSubmit() {
      hasSubmitted(!submit);
      console.log("submitted!")
    }
return( 
    <div key="Solution" id ={submit? console.log('msg') : {hits, wounds, unsaved, solutions} = 0} >
        <h2>Total Hits</h2>
        <h3 className="slt">{hits}</h3>
        <h2>Total Wounds</h2>
        <h3>{wounds}</h3>
        <h2>Unsaved Wounds</h2>
        <h3>{unsaved}</h3>
        <h2>Average Wounds Dealt:</h2>
        <h3 className="slt">{solutions}</h3>
        <button onClick={toSubmit}>Submit Results</button>
      </div>)
}
export default SolutionCard