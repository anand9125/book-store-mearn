import React from 'react'
import Banner from '../componets/Home.Compo/Banner'
import Topseller from '../componets/Home.Compo/Topseller'
import Recomended from '../componets/Home.Compo/Recommened'
import News from '../componets/Home.Compo/News'

function Home() {
  return (
    <div>       
      <Banner></Banner>
      <Topseller></Topseller>
      <Recomended></Recomended>
      <News></News>  
    </div>
  )
}

export default Home
