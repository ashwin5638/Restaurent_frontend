import { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import Navigation from '../Navigation'
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
      .then(data => {
        console.log(data)
        setMenuData(data.recipes)
      })
      .catch(error => console.log("Error fetching menu data:", error))
  }, [])


  const filteredMenuData = menuData.filter(eachRecipe =>
    eachRecipe.name &&
    eachRecipe.name.toLowerCase().includes(searchInput.toLowerCase())
  )


  return (
    <div>
     <Navigation/>
      <div  className='menu-cont'>
        <h1 className="menu-head">Menu items</h1>

        <input type="search"
          className='search-bar'
          placeholder='Search your dish'
          onChange={onChangeSearchInput}
        />


        <div className='menu-container'>
          {filteredMenuData.map(each => (
            <ul>
              <li key={each.id} className="list-item1">
                <img src={each.image} className='image' alt="tile" />
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
             <a href="/home"><FaInstagram size={30} color="white" /></a>
            <a href="/home"><FaWhatsapp size={30} color="white" /></a>
            <a href="/home"><FaTwitter size={30} color="white" /></a>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default MenuCard