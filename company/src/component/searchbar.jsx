import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center justify-center mx-5">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500 w-full"
                />
                <svg className="h-6 w-6 text-black" data-testid="MailOutlineIcon"><SearchOutlinedIcon /></svg>
            </form>
        </div>
    );
};

export default SearchBar;
