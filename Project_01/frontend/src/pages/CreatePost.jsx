import React, { useState } from 'react'
import BackToHome from '../components/BackToHome'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", e.target.caption.value);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData,
      );
      console.log(res);
      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImageFile(null);
  };

  return (
    <div className='w-100vw h-full flex justify-center mx-5 py-5 '>
      <section className=' min-w-full sm:min-w-[35%] sm:max-w-[35%] min-h-100vh relative'>
        <BackToHome title="Create Post" />
        <h1 className='mt-10 text-2xl font-bold'>Post Title</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center'>
            <input type="text" name='caption' placeholder='Write Something' required className='w-full border-b outline-0 mt-3 mb-10' />
          </div>
          <div>

            {image ? (
              <div className="image-box relative">
                <span className="remove absolute bg-red-400 px-3 py-1 right-3 top-2 rounded-full cursor-pointer" onClick={removeImage}>×</span>
                <img src={image} alt="preview" />
              </div>
            ) : (
              <label className="add-box">
                <span className='p-5 bg-gray-100 rounded-2xl ml-2'>+</span>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  name="image"
                  onChange={handleChange}
                />
              </label>
            )}
          </div>
          <div className='absolute bottom-0 w-full bg-amber-100 py-2 flex justify-center'>
            <button className='' type='submit'>Add Post</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default CreatePost