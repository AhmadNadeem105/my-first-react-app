import React, { useState } from 'react'
import Navbar from '../../components/shared/Navbar'
import Cards from '../../components/shared/cards/cards'

const Home = () => {
  // fetch data from server
  fetch('https://jsonplaceholder.typicode.com/todos').then((val)=>{ 
    return val.json()
  }).then(value => console.log(value))
  .catch((err)=>{
    console.log(err);
  })
  // console.log(data);
  const [state, setstate] = useState([])


  return (
    <div>
      <Navbar />
      {/* cards implemantation */}

      <div className='flex flex-row justify-center items-center space-x-2 flex-wrap'>
        {
          state.map((val, index, arr) => {
            return val.posts.map((val, index, arr) => {
              return (
                <Cards title={val.title} img={val.img} key={index} />
              )
            })

          })
        }
      </div>

    </div>
  )
}

export default Home