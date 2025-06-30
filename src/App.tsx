import React, { useState } from "react";
import Search from "./components/Search";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <main className={"pattern"}>
            <div className="wrapper">
                <header>
                    <h1>Find the <span className="text-gradient">movies</span> you'll enjoy without the Hassle</h1>
                    <img src="/vite.svg" alt="The Vite Logo"/>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </main>
    );
};

export default App;