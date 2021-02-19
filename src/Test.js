import React from 'react';
import axios from 'axios';

const url = 'http://localhost:5000/records';

const addSample = {
    name: "Battery",
    type: "4",
    binCode: "test1",
    accuracy: 0.82,
    location: "UOG",
    coordinate:[-4.284364628923131, 55.87246479763693],
}

const TestApi = () => {
    const [count, setCount] = React.useState(0);
    const addData = () => {
        setCount(count => count+1);
    }

    React.useEffect(() => {
        axios.post(url, addSample)
        .then(res => console.log(res));
    }, [count]);

    return(
        <div>
           <button onClick={addData}>{count}</button> 
        </div>
    );
}

export default TestApi;