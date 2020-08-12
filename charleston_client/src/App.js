import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Layout from "./components/Layout/Layout";
import Homepage from './components/Homepage/Homepage'


function App() {
  const app_id = process.env.REACT_APP_app_id;
  const app_key = process.env.REACT_APP_app_key;

  // useEffect(() => {
  //   const makeAPICall = () => {
  //     axios
  //       .get(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`)
  //       .then((res) => {
  //         const data = res.data;
  //         console.log(data)
  //       })
  //       .catch(console.error);
  //   };
  //   makeAPICall();
  // }, []);



 

  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
