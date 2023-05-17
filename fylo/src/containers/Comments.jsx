import React from 'react'
import { Comment } from '../components';
import {comments} from '../constants/index'

const Comments = () => {
  return (
    <div className='bg-main px-[44px] lg:px-[140px] relative flex flex-col sm:flex-row pb-[300px] sm:z-[0] '>
    <img src="../../images/bg-quotes.png" alt="quote" className='w-[22px] h-[16px] sm:w-[55px] sm:h-[47px] absolute top-[-17px] sm:top-[-35px] sm:z-[-12] sm:left-[35px] lg:left-[130px]'   />

    {
        comments.map(({img, name, comment, position, id}) => (
            <Comment key={id} img={img} name={name} comment={comment} position={position} />
        ))
    }
    </div>
  )
}

export default Comments
