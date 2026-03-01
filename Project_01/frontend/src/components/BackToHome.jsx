import React from 'react'
import { ChevronLeft,Ellipsis  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToHome = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center'>
        <ChevronLeft onClick={()=>{navigate('/feed')}}/>
        {title}
        <Ellipsis/>
    </div>
  )
}

export default BackToHome