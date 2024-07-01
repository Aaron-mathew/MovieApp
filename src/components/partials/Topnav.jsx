import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    const [query, setquery] = useState("");
    const GetSerches = async() => {
      try {
        const d = await axios.get(`/search/multi?query=${query}`);
        console.log(d);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    
    useEffect(() => {
      GetSerches();
    },[query]);
  
  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
        <i class="text-zinc-400 text-3xl ri-search-line"></i>
        <input onChange={(e) => setquery(e.target.value)} value={query} className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />
        {query.length > 0 && (<i onClick={() => setquery("")} class="text-zinc-400 text-3xl ri-close-fill"></i>)}
        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto'>
            {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link> */}
        </div>
    </div>
  )
}

export default Topnav

// { 1:02:41 } 1st Video