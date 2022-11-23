import React from 'react'
import Navbar from './Navbar';
import RoomMenu from './RoomMenu';
const Dashboard = () => {

    return (
        <div className="container-fluid p-0 m-0">
            <div className="row">
                <div className="col-sm-2 navbar-back">
                    <Navbar />
                </div>

                <div className="col-sm-10 rooms-menu-back">
                    <RoomMenu />
                </div>
            </div>
        </div>
    )
}

export default Dashboard