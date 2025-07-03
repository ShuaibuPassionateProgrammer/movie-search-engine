import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

const App = () => {
    const [liked, setHasLiked] = useState<TheLike>(false);

    return (
        <div className="container">
            <button onClick={() => setHasLiked({ userLike: true })}>Like</button>
        </div>
    );
};

export default App;