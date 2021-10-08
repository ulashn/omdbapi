import React, { useState } from 'react';
import './styles/App.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apikey=9a835ab1&s=';


const App = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchedValue, setSearchedValue] = useState('');
    const [movies, setMovies] = useState({
        data: [],
        isLoading: true
    });


    const handleClick = async () => {
        if (searchValue !== '') {
            const datas = await axios.get(baseUrl.concat(searchValue.toString()));
            setSearchedValue(searchValue);
            setMovies({
                data: datas.data,
                isLoading: false,
            });
        }
    };

    const handleClear = () => {
        setSearchedValue('');
        setMovies({
            data: [],
            isLoading: true,
        });
        setSearchValue('');
    };


    const moviesJSX = () => {
        if(movies.data.length === 0){
            return (<></>);
        }else{
            const hops = movies.data.Search.map((item) => 
                <div key={item.imdbID}>
                    <p className='movie-title'>{item.Title}</p>
                </div>
            );
            return hops;
        }
    }

    return (

        /**
         * From the search part I don't want to implement every component seperately,
         * It would be more convenient for reusable parts but this task is a little bit small.
         * 
         */

        <div className='container'>
            <h1 className='header1'>OMDb API</h1>
            <p className='paragraph'>The Open Movie Database🍿</p>
            <div className='search'>
                <p className='paragraph-bold'>Movie title</p>
                <TextField
                    className='search-bar'
                    variant='outlined'
                    size='small'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Search'
                    InputProps={{
                        startAdornment: <SearchIcon size='medium' />
                    }}
                />
                <div className='btn-container'>
                    <p className='btn-clr' onClick={handleClear}>clear</p>
                    <button className='btn-submit' onClick={handleClick}>
                        <p className='btn-paragraph'>search</p>
                    </button>
                </div>
            </div>
            {!movies.isLoading ?
                <div className='results'>
                    <p className='paragraph-bold-before'>Results for "{searchedValue}"</p>
                    <p className='paragraph-detail'>click on a movie title to learn more about it</p>
                    {moviesJSX()}
                </div>
                :
                <div className='before-search'>
                    <p className='paragraph-bold-before'>Search Results will appear here</p>
                </div>
            }

        </div>
    )

};

export default App;