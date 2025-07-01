import React from "react";

const person = {
    name: "Bruce Lee",
    age: 36,
    location: "Gotham city"
};

const { name, age, location } = person;

console.log(name);

const Search = (props) => {
    return (
        <div className="search"></div>
    );
};

export default Search;