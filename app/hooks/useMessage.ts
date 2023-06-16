import { useState } from "react";

const useMessage = () => {

    const [val, setVal] = useState('default ');

    const setMessage = (message: string) => {
        setVal(message);
    }

    const getMessage = () => {
        return val;
    }

    return {
        val,
        setMessage,
        getMessage
    }

};

export default useMessage;
