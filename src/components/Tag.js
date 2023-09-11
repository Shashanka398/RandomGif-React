import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);
  const chechEnter=(e)=>{
    if(e.key === 'Enter')
    {
      setTag(e.target.value);
      fetchData(tag);
    }
   }


  return (
    <div className='w-1/2  bg-blue-200 rounded-lg border items-center gap-5 mt-[15px] flex flex-col border-black'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {// eslint-disable-next-line
        loading ? (<Spinner/>) : (<img src= {gif}  className='rounded-lg'width="350px" height="50" alt="random-img" />)
    }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
        onKeyDown={(event)=>{chechEnter(event)}} 
      />
      

      <button onClick={() => fetchData(tag)}
      className="bg-white w-6/12 text-lg hover:bg-black-100 opacity-70 rounded-lg text-center mb-[25px]">

       Generate

      </button>

    </div>
  )

}

export default Tag
