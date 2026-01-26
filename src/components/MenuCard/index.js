import {Link} from "react-router-dom"
import {useEffect, useState} from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa'
import "./index.css"


const MenuCard = () => {
  
    const [searchInput, setSearchInput] = useState('')
    const [menuData, setMenuData] = useState([])

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

   useEffect(() => {
  fetch('https://restaurent-backend-1-3fc8.onrender.com/menu')
    .then(res => res.json())
    .then (data => {
      console.log(data)  
      setMenuData(data.recipes)
    })
    .catch (error => console.log("Error fetching menu data:", error))
}, [])


const filteredMenuData = menuData.filter(eachRecipe =>
  eachRecipe.name &&
  eachRecipe.name.toLowerCase().includes(searchInput.toLowerCase())
)


    return (
    <div>
        <div className='navbar-container' >
                  <nav className="nav-container">
                   <div>
                      <Link to='/home' className="link">
                          <h1 className='head'>restaurant</h1>
                        </Link>  
                   </div>
                  <div className='nav-list-cont'>
                    <li className='nav-list'>Menu card</li>
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
                 </div>
                  </nav>
            </div>
            <div>
                <h1 className="menu-head">Menu items</h1>

                <input type="search"
                className='search-bar'
                placeholder='Search your dish' 
                onChange={onChangeSearchInput}
                />


            <div className='menu-container'>
               {filteredMenuData.map(each => (
                      <ul className='list-item1'>
                        <li key={each.id}>
                            <img src={each.image} className='image' alt='tile' />
                             <p className='dish-name'>{each.name}</p>
                        </li>
                      </ul>
                ))}
                </div>
                
            </div>
                      
                       <div className='footer-container'>
                        <div className='follow-container'>
                               <h1>Address</h1>
                               <p>Mancherial</p>
                               <p>Near IB</p>
                               <p>Phone: 98765432876</p>
                        </div>
                           <div className='contact-cont'>
                           <h1>Contact us</h1>
                           <p>Follow us on social media</p>
                           <div className='social-links'>
                              <div className='social-links'>
                                 <a href="..."><FaInstagram size={30} color="#E1306C" /></a>
                                <a href="..."><FaWhatsapp size={30} color="#25D366" /></a>
                                <a href="..."><FaTwitter size={30} color="#1DA1F2" /></a>                                  
                              </div>
                           </div>
                        </div>
             </div>
            
        </div>
    )
}


export default MenuCard
