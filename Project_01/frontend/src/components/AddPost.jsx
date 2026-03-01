import React from 'react'
import { TextAlignJustify, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddPost = ({count}) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center my-5'>
        <TextAlignJustify/>
        <h3>Feed</h3>
        <Plus onClick={()=>{
          navigate("/create-post");
        }}/>
    </div>
  )
}

export default AddPost