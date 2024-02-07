import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Loder from './component/Loder';
import Apidata from './component/Apidata';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

  let [data, setdata] = useState([]);
  let [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true);
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response.data.results);
        setdata(response.data.results);
        setloder(false);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <>
    <Header/>
      {loder === true ? <Loder /> : <Apidata data={data} />}
    <Footer/>
    </>
  );
}

export default App;
