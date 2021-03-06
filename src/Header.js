import React,{useEffect} from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import StarsIcon from '@mui/icons-material/Stars';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'

function Header() {
    //Rendering the Header Component.Rendering refers to displaying the output in the browser.
    const [{ basket,user}, dispatch] = useStateValue();
    useEffect(() =>{
    
        //Once the app loads we attach this Listener.If we log in,it modifies the code.If we register this modifies ..
       auth.onAuthStateChanged( authUser => {
         console.log('The user is >>>',authUser)
   
         if(authUser) {
           //The user just logged in/ The user was logged in from before
           //Storing User inside React context Api(Redux)
           dispatch({
             type: 'SET_USER',
             user: authUser, //Fire off the event and shoot it into Data Layer 
           });
         }
         else {
           //the user is logged out.
           dispatch({
           type: 'SET_USER',
           user: null,
           });
         }
       })
     },[])
    const handleAuthentication = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className="header">
            <Link to="/">
            <div className="header__icon"><h1>chkOUT</h1></div>
            </Link>
        <div className="header__search">
            <input type="text" className="header__searchInput" /> 
            <SearchIcon className="header__searchIcon" />
        </div>
        
        <div className="header__nav">
        <Link to={!user && "/login"}>
             <div onClick={ handleAuthentication } className="header__option">
               {  console.log(user)}
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>

            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
            </Link>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <StarsIcon className="header__starsIcon" />
            </div>
            <Link to="chkOUT">
            <div className="header__optionbasket">
               <LocalMallIcon className="header_chkart"  />
               <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>  
            </div>
            </Link>
        </div>
        </div>
    )
}

export default Header;


