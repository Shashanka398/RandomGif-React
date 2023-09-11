import Spinner from './Spinner';
import useGif from '../hooks/useGif';
 const Random = () => {
    const {gif,loading,fetchData}=useGif();
    const clickHandler=()=>{
       // console.log("clicked");
        fetchData()

    }
    

  return (
    <div className='w-1/2  bg-green-200 rounded-lg border items-center gap-5 mt-[15px] flex flex-col border-black'>
        <h1 className='text-2xl font-bold uppercase '>Random Gif</h1>
     
        {
            loading ?(<Spinner/>):  ( <img src={gif} width="350px"  className='rounded-lg' height="50" alt="random-img" /> )
        }
        <button onClick={clickHandler} className='bg-white w-6/12 text-lg hover:bg-sky-700 opacity-70 rounded-lg text-center mb-[25px]'>Generate</button>
    </div>

  )
}
export default Random;
