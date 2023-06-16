'use client';

import useMessage from "../hooks/useMessage";

interface OtherProps {
    children: React.ReactNode;
}

const Other : React.FC<OtherProps> = ({
    children
}) => {

    const {
        val,
        setMessage,
        getMessage
    } = useMessage();


    return (
        <div className="flex flex-row">
            <div className="
                bg-yellow-500
            ">message: {val}</div>
            <div>{children}</div>
        </div>
    )
}

export default Other;
