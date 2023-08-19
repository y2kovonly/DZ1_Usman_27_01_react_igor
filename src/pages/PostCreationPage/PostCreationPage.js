import React, { useState } from "react";

const PostCreationPage = () => {
    const [inputData, setInputData] = useState('')

    return (
        <div className={'cont'}>
            <input
                type="text"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
            />
            <button>Create Post</button>
        </div>
    );
};

export default PostCreationPage;