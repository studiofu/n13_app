'use client';

import useMessage from "../hooks/useMessage";

interface InterProps {
    children: React.ReactNode;
}

const Inter : React.FC<InterProps> = ({
    children
}) => {

    const handleClick = () => {
        setMessage('clicked');
    }

    const {
        val,
        setMessage,
        getMessage
    } = useMessage();


    return (
        <div className="flex flex-row">
            <div className="
                bg-gray-500
            ">message: {val}</div>
            <div>{children}</div>
            <div>
                <button 
                    className='
                    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    '
                onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}

export default Inter;
