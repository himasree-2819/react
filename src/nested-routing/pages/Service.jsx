import React from 'react'
import './service.css'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <p className='services-subtitle'>Choose one of our service below</p>

            <div className='services-link'>
                <Link to='web-development'
                    className='Service-link web'
                >Web Development</Link>

                <Link to='app-development' className='service-link app'>
                    App Development
                </Link>

                <Link to='design' className='service-link design'>
                    design
                </Link>

            </div>
            {/* nested route content */}
            <Outlet />

        </div>
    )
}

export default Service