import React from 'react'
import Card from '../details/Card';

const General = props => {
    return (
        <>
            <h1>{props.view}</h1>
            <div className="h-100">
                <Card>
                    <h5 className="text-muted m-4">No Results for {props.view}</h5>
                </Card>
            </div>
        </>
    )
}

export default General
