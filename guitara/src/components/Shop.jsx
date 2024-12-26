import React from 'react'
import Navbar from './fragments/Navbar'
import Mainlayout from './Mainlayout'

function Shop() {
    return (
            <Mainlayout>
                <Navbar activePage="store" animate={false}/>
            </Mainlayout>
    )
}

export default Shop