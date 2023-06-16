
import React from 'react';

interface BoxProps {
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({children}) => {

    return (
        <div className='
            bg-neutral-800
            rounded-lg
            h-fit
            w-full
        '>
            {children}
        </div>
    )
}

export default Box;
