import React from 'react'
import Demand from './Demand';
import Trending from './Trending';
import List from './List';

import Choose from './Choose';
import Footer from './Footer';
import Main from './Main';


const Home = () => {

  return (
    <React.Fragment>
    
      <Main/>
      <Demand/>
      <Trending/>
     
      <List/>
      <Choose/>
      <Footer/>

    </React.Fragment>

  )
}

export default Home;
