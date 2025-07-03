import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

const App = () => {
    const [liked, setHasLiked] = useState<TheLike>(false);

    return (
        <div className="container"></div>
    );
};

export default App;