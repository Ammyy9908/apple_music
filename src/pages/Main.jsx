import React from 'react'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import "./Main.css"

function Main() {
    return (
        <div className="main-screen">
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default Main
