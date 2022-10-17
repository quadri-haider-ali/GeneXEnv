import React from 'react'
import Dashboard from '../pages/Dashboard'
import General from '../pages/General'

const Details = props => {
    const renderSwitch = (props) => {
        switch (props.view) {
            // Dashboard
            case 'Dashboard':
                return <Dashboard view='Dashboard' />
            // General
            case 'General':
                return <General view='General' />
            // default
            case 'default':
                return <Dashboard view='Dashboard' />
        }
    }
    return (
        <div style={{ flex: "5" }} className="ml-4">
            {renderSwitch(props)}
        </div>
    )
}

export default Details
