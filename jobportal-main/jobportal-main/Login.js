import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser,faArrowRight,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import  './Login.css';
import back from './back.png';
import images from '../src/images/mobile.jpg';
import name1 from './name1.webp';
import name2 from './name2.webp';
import name3 from './name3.webp';
import name4 from './name4.webp';
import name5 from './name5.webp';
import twopeople from './twopeople.png';
import googleplaystore from './googleplaystore.png';
import microsoft from './microsoft.png';
import Twitterlogo from './Twitterlogo.jpeg';
import facebook from './facebook.jpeg';
import instagram from './instagram.png';
import Youtube from './Youtube.jpg';
const Home=()=>{
   
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    return(
      <div>
     
        <div className='body'>
        <div className='display-menu'>
          <Link className='bar' to={"/"}>Home</Link>
          <Link className='bar' to={"/"}>About</Link>
          <Link className='bar' to={"/"}>Jobs</Link>
          <Link className='bar' to={"/"}>Blogs</Link>
          <Link className='bar' to={"/"}>Contact Us</Link>
         
          
          
        </div>
             <div  onBlur={closeDropdown}>
              
              <div  onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faCircleUser} style={{color: "#4d6b9d",}} className='userlogo' />
             <div className='logoname'> <h5 onClick={toggleDropdown} >Login</h5></div> 
      </div>
      <div>
      <h4  className='job'>INDIA'S #1 JOBS PLATFORM</h4>
     <h1 className='your'>Your job search ends here</h1>
     <h4 className='career'>Discover 50 lakh+ career opportunities</h4>
     </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="user-logo">
            <div className='login'>
            <div className='menu1'>
              <a href="/" className='emp'>Employee</a>
            </div>
            <div className='menu2'>
              <a href="/" className='emp'>Candidate</a>
            </div>
            </div>
          </div>
        </div>
        
        
      )}
      


        </div>
        
       </div>
       <div className="search-bar">
           < input type="text"  placeholder="Search Jobs by Skills or Company" className='search'  />
           <input type="text"  placeholder="Locations" className='search' />
             <button type='submit' className="btn"><FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff"}} /></button>
             
            </div>
            <div className='down'>
               <h2 className='get'>Get Job in just 2 steps...</h2>
                <h4 className='comment'>✨Build your profile & get <br></br> discovered by HRs</h4> <br></br>
                <h4 className='comment1'>✨Find jobs that match your<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profile</h4>
                <img src={images} className='phone'/> 
            </div>
           <section className='background'>
            <div className='getting'>
              <h1 className='popular'> Popular <br></br> Searches on <br></br>our Portal </h1>
            </div> 
            <div className='person'>
            <div className='person1'>
              <h5 className='name1'>TRENDING AT #1</h5>
              <h4 className='job1'>Jobs for Freshers</h4>
              <Link className='view1' to={"/"}>View all</Link>
              <img src={name1}  className="image1" />
            </div>
            <div className='person2'>
              <h5 className='name2'>TRENDING AT #2 </h5>
              <h4 className='job2'>Work from home Jobs</h4>
              <Link className='view2' to={"/"}>View all</Link>
              <img src={name2}  className="image2" />
            </div>
            <div className='person3'>
            <h5 className='name3'>TRENDING AT #3 </h5>
              <h4 className='job3'>Part time Jobs</h4>
              <Link className='view3' to={"/"}>View all</Link>
              <img src={name3}  className="image3" />
            </div>
            <div className='person4'>
            <h5 className='name4'>TRENDING AT #4 </h5>
              <h4 className='job4'>Jobs for Women</h4>
              <Link className='view4' to={"/"}>View all</Link>
              <img src={name4}  className="image4" />
            </div>
            <div className='person5'>
            <h5 className='name5'>TRENDING AT #5 </h5>
              <h4 className='job5'>International Jobs</h4>
              <Link className='view5' to={"/"}>View all</Link>
              <img src={name5}  className="image5" />
            </div>
            </div>
            </section>  
            
            <div className='want-hire'>
              <h4 className='want-name'> FOR EMPLOYERS </h4>
              <h1 className='want-quote'> Want to Hire?</h1>
              <h5 className='want-seeker'> Find the best Candidate from 5 crore+ active job seekers! </h5>
              <Link className='postjob' to={"/"}> Post Job &nbsp; </Link>
              <img src={twopeople}  className="two-people" />
            </div>
           
            <footer className='footer'>
              <div className='inside-box'>
              <h3 className='inside-fist'> Apply on the go</h3>
              <h4 className='inside-second'> Get real time job updates on our App</h4>
              <img src={googleplaystore} className='googleplaystore'/>
              <img src={microsoft} className='microsoft'/>
              </div>
            <div className='inside-left'>
              <h2 className='social-media'>Follow us on social media</h2>
              <img src={Twitterlogo}className='twitter'/>
              <img src={facebook} className='facebook'/>
              <img src={instagram} className='instagram'/>    
              <img src={Youtube} className='youtube'/>   <br></br> <br></br> <hr className='hr'></hr>
              
                </div>
            </footer>
       </div>
     
    )
      }
      export default Home; 
