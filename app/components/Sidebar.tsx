'use client';

import Box from "./Box";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({children} : SidebarProps) => {

    return (
        <div className={`
            flex
            h-full    
        `
        }>
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                    gap-y-2
                ">
                <Box>
                    this is box
                </Box>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Sidebar;