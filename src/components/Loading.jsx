import loader from '/loader.webp';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img className='h-[50%] object-cover' src= {loader} alt="" />
    </div>
  )
}

export default Loading

// {4:17} 2nd Video