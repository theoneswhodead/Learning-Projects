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

let bgclr= {
    Work: 'hsl(15, 100%, 70%)',
    Play: 'hsl(195, 74%, 62%)',
    Study: 'hsl(348, 100%, 68%)',
    Exercise: 'hsl(145, 58%, 55%)',
    Social: 'hsl(264, 64%, 52%)',
    Self: 'hsl(43, 84%, 65%)'
};

switch(time) {
    case 'daily': {
         asd = data.map(e => {
            if(e.title == title) {



                const styles = {
                    backgroundColor: bgclr[title]
                }
                return (

                <div style={styles} className='card' >
                    <div className="card__top">
                         <img className='card__top-image' src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                    </div>

                    <div className="card__bottom">
                        <div className="card__first">
                            <h1 className="card__title">{e.title}</h1>
                            <h2 className='card__hrs'>{e.timeframes.daily.current}Hrs</h2>
                        </div>
                        <div className="card__second">
                            <h3 className='card__menu'>...</h3>
                            <h3 className='card__last'>Last Day - {e.timeframes.daily.previous}hrs</h3>
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
                const styles = {
                    backgroundColor: bgclr[title]
                }
                return (
                    

                    <div style={styles} className='card'>
                        <div className="card__top">
                             <img className='card__top-image' src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                        </div>
    
                        <div className="card__bottom">
                            <div className="card__first">
                                <h1 className="card__title">{e.title}</h1>
                                <h2 className='card__hrs'>{e.timeframes.weekly.current}Hrs</h2>
                            </div>
                            <div className="card__second">
                                <h3 className='card__menu'>...</h3>
                                <h3 className='card__last'>Last Week - {e.timeframes.weekly.previous}hrs</h3>
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
                const styles = {
                    backgroundColor: bgclr[title]
                }
                return (

                    <div style={styles} className='card'>
                        <div className="card__top">
                             <img className='card__top-image' src={`/images/icon-${title.toLowerCase()}.svg`} alt="work" />
                        </div>
    
                        <div className="card__bottom">
                            <div className="card__first">
                                <h1 className="card__title">{e.title}</h1>
                                <h2 className='card__hrs'>{e.timeframes.monthly.current}Hrs</h2>
                            </div>
                            <div className="card__second">
                                <h3 className='card__menu'>...</h3>
                                <h3 className='card__last'>Last Month - {e.timeframes.monthly.previous}hrs</h3>
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
