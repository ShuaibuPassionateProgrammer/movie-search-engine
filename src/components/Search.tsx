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
        <div className="text-white text-3xl">{props.searchTerm}</div>
    );
};

export default Search;