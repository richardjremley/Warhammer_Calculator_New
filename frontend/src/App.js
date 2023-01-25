import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AttackCard from "./components/AttackCard";
import DefendCard from "./components/DefendCard";
import { BASE_URL } from "./global";
import SolutionCard from "./components/SolutionCard";

function App() {
  const [submit, hasSubmitted] = useState();
  const [solutions, setSolutions] = useState([]);
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

  const [hits, setHits] = useState([]);
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

  const [wounds, setWounds] = useState([]);
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

  const [unsaved, setUnsaved] = useState([]);
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
    hasSubmitted(true);
  }

  return (
    <div className="App">
      <div className="items-grid">
        <h1>Warhammer Damage Calculator:</h1>
        <AttackCard />
        <DefendCard />
        <div className="sltapp">
          <SolutionCard />
        </div>
        <h4>Knowledge is power. Guard it well.</h4>
      </div>
    </div>
  );
}

export default App;
