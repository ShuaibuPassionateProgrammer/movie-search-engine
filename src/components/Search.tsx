import React from "react";

const person = {
    name: "Bruce Lee",
    age: 36,
    location: "Gotham city"
};

const { name, age, location } = person;

console.log(name);

interface SearchProps {
    searchTerm: string;
}

const Search: React.FC<SearchProps> = ({ searchTerm }) => {
    return (
        <div className="search">
            {/* Search implementation */}
        </div>
    );
};

export default Search;