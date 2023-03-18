import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Advice = () => {

  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  const adviceFunc = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(function (res) {
        setAdvice(res.data.slip.advice);
        setLoading(false);
      })
  }

  adviceFunc();

  return (
    <>
      {
        loading === true ? <div className='h-screen flex items-center justify-center'>
          <div className='loading'></div>
        </div> :
          <div className='flex flex-col justify-center items-center h-screen bg-wallpaper bg-cover bg-center bg-no-repeat'>
            <h2 className='text-3xl text-white font-bold font-julee px-6 w-[75%] text-center'>{advice}</h2>
            <button className='text-center bg-blue-500 hover:bg-red-400 rounded px-8 py-2 mt-6 text-white font-bold text-2xl' onClick={adviceFunc}>Again</button>
          </div>
      }

    </>
  )
}

export default Advice