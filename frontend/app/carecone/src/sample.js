import React from "react";
import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css'

const Sample = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
                <div>Hello World</div>
            </Drawer>
        </div>
    );
};

export default Sample;