import React, { useEffect, useState } from "react";

const Button = () => {
    const [name, setName] = useState("Shuaibu");

    const handleChangeName = () => {};

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
    );
};

export default Button;