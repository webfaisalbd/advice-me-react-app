import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Advice = () => {

  const [advice, setAdvice] = useState('');

  axios.get('https://api.adviceslip.com/advice')
    .then(function (res) {
      setAdvice(res.data.slip.advice);
    })

  // console.log(advice);

  return (
    <div className='flex justify-center items-center h-screen bg-cyan-100'>
      <h2 className='text-3xl font-bold font-julee px-6'>{advice}</h2>
    </div>
  )
}

export default Advice