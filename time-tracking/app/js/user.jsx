import React from 'react'

const User = ({handleClick}) => {
    return (
        <div className="user">
            <div className='user__top'>
                <div className='user__top-info'>
                    <img src="/images/image-jeremy.png" alt="Jermy" />
                        <div>
                            <h2 className="user__report">Report for</h2>
                            <h1 className="user__name">Jeremy Robinson</h1>
                        </div>
                </div>

            </div>
            <div className="user__bottom">
                <button onClick={event => handleClick('daily')}>Daily</button>
                <button onClick={event => handleClick('weekly')}>Weekly</button>
                <button onClick={event => handleClick('monthly')}>Monthly</button>
            </div>
        </div>
    )
}



export default User;