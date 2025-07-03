import React, { useEffect, useState } from "react";

const Button = () => {
    const [name, setName] = useState("Shuaibu");

    return (
        <div>
            <h1>{name}</h1>
            <button>Change Name</button>
        </div>
    );
};

export default Button;