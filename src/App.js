import {useEffect} from 'react';

import './App.css';
import SearchIcon from "./search.svg";
//f91bfadb

const API_URL = 'http://www.omdbapi.com?apikey=f91bfadb';


const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    } 
    useEffect(() =>{
        searchMovies('Spiderman');
    },[]);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                placeholder='Search for movie' value='Superman' onChange={() => {}}/>
                <img src=''/>
            </div>
        </div>
    );
}

export default App;