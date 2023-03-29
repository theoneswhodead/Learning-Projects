import React,  {useState} from 'react';

export default function Hero() {

    const [data, setData] = useState(16);


    return (
        <div className='hero'>
            <h1 className='hero__title'>100k pageviews</h1>
            <div className="hero__input">
                <input type="range" min="1" max="60" value={data} className="slider" onChange={(e) => setData(e.target.value)}></input>
            </div>
            <div className="hero__value">
                <p className='hero__value-all'><span className='hero__value-main'>${data}.00</span> / month</p>
            </div>

            <div className='hero__toggle'>
            <p className='hero__toggle-text'>Monthly Billing</p>
                <label className='switch'>
                    <input type="checkbox" name="" id="" />
                    <span className='switch__slider'></span>
                </label>
                <p className='hero__toggle-text'>Yearly Billing</p>
            </div>
        </div>
    )
}