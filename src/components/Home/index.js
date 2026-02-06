import {Link} from "react-router-dom"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa'
import './index.css'
import { useState, useEffect } from "react"




const Home = () => {
 

  const [menu, setMenu] = useState([])



  useEffect(() => {
   fetch('http://localhost:5000/menu')
     .then(res => res.json())
     .then (data => {
       console.log(data)  
       setMenu(data.recipes)
     })
     .catch (error => console.log("Error fetching menu data:", error))
 }, [])
 


    return (
        <div>
          <div className='navbar-container' >
                  <nav className="nav-container">
                   <div>
                      <Link to='/' className="link">
                        <h1 className='head' >restaurant</h1>
                      </Link>
                          
                   </div>
                  <div className='nav-list-cont'>
                <Link to='/MenuCard' className="link">
                    <li className='nav-list'>Menu card</li></Link>
                    <li className='nav-list'>About us</li>
                    <li className='nav-list'>order</li>
                    <li className='nav-list'>contact us</li>
                 </div>
   
                  <div className='signup-container'> 
                  <Link to='/register' className="link" >
                     <li className='nav-list'>Sign up</li>
                  </Link>
                    <Link to='/login' className="link" >
                       <li className='nav-list'>Login</li>
                    </Link>
                    <Link to='/logout' className="link">
                     <li className='nav-list'>Logout</li>
                    </Link>
                 
                 </div>
                  </nav>
            <div className='tile-container'>
                  <h1 className='titl-head'>Restaurant</h1>
                  <hr className='line'/>
                  <p className='para'>Experience a culinary journey like no other at our<br/> restaurant, where passion for food meets warm hospitality.<br/>
                   We craft each dish using the finest, freshest ingredients,<br/> blending traditional flavors with modern techniques to delight your palate
                  </p>
           
            </div>
               
              <div className='books-container'>
                       {menu.slice(0,5).map(each => (  
                            <ul key={each.id} className='list-item'>
                           <li>    
                             <img src={each.image} className='image' alt='tike' />
                             <p className='dish-name'>{each.name}</p>
                           </li>
                         </ul>
              ))}
              </div>    
            </div>
                       <div className='footer-container'>
                        <div className='follow-container'>
                               <h1>Address</h1>
                               <p>Hyderabad</p>
                               <p>Near IB</p>
                               <p>Phone: 98765432876</p>
                        </div>
                           <div className='contact-cont'>
                           <h1>Contact us</h1>
                           <p>Follow us on social media</p>
                           <div className='social-links'>
                                 <a href="/home"><FaInstagram size={30} color="#E1306C" /></a>
                                <a href="/home"><FaWhatsapp size={30} color="#25D366" /></a>
                                <a href="/home"><FaTwitter size={30} color="#1DA1F2" /></a>
                                
                           </div>
                        </div>
             </div>
            
        </div>
    )
}



export default Home