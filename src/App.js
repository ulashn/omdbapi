import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const App = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchValue);
    };

    return (
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
                    <p className='btn-clr' onClick={() => alert('clear')}>clear</p>
                    <button className='btn-submit' onClick={handleSubmit}>
                        <p className='btn-paragraph'>search</p>
                    </button>
                </div>
            </div>
            <div className='results'>

            </div>
        </div>
    );
};

export default App;

