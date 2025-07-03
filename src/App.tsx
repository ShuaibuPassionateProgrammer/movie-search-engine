import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

const App = () => {
    // Current state initialization mismatch
    const [liked, setHasLiked] = useState<TheLike>(false); // Should be { userLike: false }

    return (
        <div className="container">
            <button onClick={() => setHasLiked({ userLike: true })}>Like</button>
            
        </div>
    );
};

export default App;