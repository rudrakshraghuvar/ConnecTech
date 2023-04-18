import React, { Fragment } from 'react'

const NotFound = () => {
    return (
        <Fragment>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large text-primary'>
                        <i className='fas fa-exclamation-triangle'></i> Page Not Found
                    </h1>
                    <p className='large'>Sorry, this page does not exist</p>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound
