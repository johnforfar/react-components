import { useState } from "react";

const Accordion = () => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand);
    console.log(expand);

    return (
        <div>
            <h3>Accordion Component:</h3>
            <button onClick={toggleExpand}>header +</button>
            { expand && <div>content</div> }
        </div>
    );
};

export default Accordion;