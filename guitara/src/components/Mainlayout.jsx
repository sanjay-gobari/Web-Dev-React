import React from 'react'

function Mainlayout({children}) {
    return (
        <div className='px-20 max-w-[1920px] m-auto '>
            {children}
        </div>
    )
}

export default Mainlayout