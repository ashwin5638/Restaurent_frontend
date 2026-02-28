import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa'
import './index.css'
import Navigation from '../Navigation'
import { useState, useEffect } from "react"


const Home = () => {

  const [menu, setMenu] = useState([])
  const [, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    fetch('https://restaurent-backend-1-3fc8.onrender.com/menu')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMenu(data.recipes)
      })
      .catch(error => console.log("Error fetching menu data:", error))
  }, [])

  return (
    <div>
      <Navigation />

      <div className='tile-container'>
        <div>
          <h1
            className="title-head"
          >
            <span className="span">Exquisite</span>,{' '}
          taste <br/> unforgettable 
            atmosphere
          </h1>

        
          <p className="para-title"
          >
            Welcome to Savory, where culinary artistry meets exceptional dining experiences.
            Indulge in flavors that tell a story.
          </p>

        </div>
      </div>

      <div className='food-container'>
        {menu.slice(0, 5).map(each => (
          <ul key={each.id} className='list-item'>
            <li>
              <img src={each.image} className='image' alt='tike' />
              <p className='dish-name'>{each.name}</p>
            </li>
          </ul>
        ))}
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
            <a href="/home"><FaInstagram size={30} color="white" /></a>
            <a href="/home"><FaWhatsapp size={30} color="white" /></a>
            <a href="/home"><FaTwitter size={30} color="white" /></a>

          </div>
        </div>
      </div>

    </div>
  )
}



export default Home
