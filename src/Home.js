import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="home__row">
              <Product 
              id="12321"
              title='Amazon Unbound: Jeff Bezos and the Invention of a Global Empire' 
              image={"https://m.media-amazon.com/images/I/7109vuubmJS._AC_UY218_.jpg"} 
              rating={4}
              price={1000} />
              <Product id="123211"
              title='Apple iPhone 13 (128GB) - (Product) RED' 
              price={132000} 
              image={"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY218_.jpg"} 
              rating={3}/>
              <Product id="123212"
              title='Happilo 100% Natural Premium Californian Almonds Dried,Honey and Olive Oil Dried,200g' 
              price={350} 
              image={"https://m.media-amazon.com/images/I/51ivRBHcH6L.jpg"} 
              rating={5}/>
              <Product id="123213"
              title='2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, 64GB) - Space Grey (4th Generation)' 
              price={60000} 
              image={"https://m.media-amazon.com/images/I/41qCHE-ILXL.jpg"} 
              rating={5}/>
              {/*Product1*/}
              {/*Product2*/}
          </div>
          <div className="home__row">
          <Product 
              id="123214"
              title='Levi’s Men’s Ultra-Soft Cotton 300 LS Classic Round Neck T-Shirts (Pack of 1)' 
              price={130} 
              image={"https://m.media-amazon.com/images/I/71fvRVy3u7L._AC_UL320_.jpg"} 
              rating={4}/> 
              <Product id="123215"
              title="U.S. POLO ASSN.
              Men's Regular Fit Lounge Pants"
              price={132000} 
              image={"https://m.media-amazon.com/images/I/61E+pEVYCUL._AC_UL320_.jpg"} 
              rating={3}/>
              <Product id="123216"
              title="Crocs
              Unisex-Adult LiteRide Clogs"
              price={2499} 
              image={"https://m.media-amazon.com/images/I/81BlrTLtJbL._AC_UL320_.jpg"} 
              rating={5}/>
          </div>
          <div className="home__row">
          <Product id="123216"
              title="HP OMEN 10th Gen Intel Core i5 Processor 15.6 (39.62cms) FHD Gaming Laptop (i5-10300H/8GB/512GB SSD/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black/2.36 kg), 15-ek0015TX"
              price={74500} 
              image={"https://m.media-amazon.com/images/I/81gK0I7rkvL._AC_UL320_.jpg"} 
              rating={4}/>
              <Product id="123217"
              title="Noise ColorFit Icon Buzz Bluetooth Calling Smart Watch with Voice Assistance, 1.69 Display, Built-in Games, Sleep, Spo2, HR Monitors (Jet Black)"
              price={2499} 
              image={"https://images-eu.ssl-images-amazon.com/images/I/61v6HokIL2L._AC_UL450_SR450,320_.jpg"} 
              rating={5}/>
          </div>
          </div>
        </div>
    )
}

export default Home
