import React, { useState } from "react";

interface TheLike {
    userLike: boolean;
};

const App = () => {
    const [liked, setHasLiked] = useState<TheLike>(false);

    return (
        <></>
    );
};

export default App;