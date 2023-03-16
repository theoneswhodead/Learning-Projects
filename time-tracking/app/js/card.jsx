import React from 'react';


const Card = (props) => {
const {data, time, title} = props;

let current;
let previous;

if(time == 'monthly') {
    current = 'asd';
    previous = 'asd';
}

let asd;

switch(time) {
    case 'daily': {
         asd = data.map(e => {
            if(e.title == title) {
                return (

                <div className='card'>
                    <div className="card__top">
                         <img className='card__top-image' src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                    </div>

                    <div className="card__bottom">
                        <div className="card__first">
                            <h1 className="card__title">{e.title}</h1>
                            <h2 className='card_hrs'>{e.timeframes.daily.current}</h2>
                        </div>
                        <div className="card__second">
                            <h3 className='card__menu'>...</h3>
                            <h3 className='card__last'>{e.timeframes.daily.previous}</h3>
                        </div>
                    </div>
                </div>

                )
            }
        
        })
        break;
    }
    case 'weekly': {
        asd = data.map(e => {
            if(e.title == title) {
                return (

                <div>
                    <div className="card__top">
                         <img src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                    </div>
                    <div className="card__bottom">
                        <div>
                            <h1>{e.title}</h1>
                            <h2>{e.timeframes.weekly.current}</h2>
                        </div>
                        <div>
                            <h3>...</h3>
                            <h3>{e.timeframes.weekly.previous}</h3>
                        </div>
                    </div>
                </div>

                )
            }
        
        })
        break;
    }
    case 'monthly': {
        asd = data.map(e => {
            if(e.title == title) {
                return (

                <div>
                    <div className="card__top">
                         <img src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                    </div>
                    <div className="card__bottom">
                        <div>
                            <h1>{e.title}</h1>
                            <h2>{e.timeframes.monthly.current}</h2>
                        </div>
                        <div>
                            <h3>...</h3>
                            <h3>{e.timeframes.monthly.previous}</h3>
                        </div>
                    </div>
                </div>

                )
            }
        
        })
        break;
    }
}
// const asd = data.map(e => {
//     return (
//         <div>{e.title}
//             <div>{e.timeframes.monthly.current}</div>
//             <div>{e.timeframes.weekly.previous}</div>
//             <div>{time}</div>

//     </div>
//     )

// })
    return (
        <>
        {asd}
        </>
    )
}

export default Card;
