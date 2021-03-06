import React from 'react';
import classes from './MainHeader.module.css';
import SearchBar from '../SearchBar/SearchBar';
import UserHeader from '../UserHeader/UserHeader';
import CartIcon from '../Cart/CartIcon';
const MainHeader = (props) => {
    return (
        <div className={classes.container}>
            <div className="row d-flex align-items-center">
                <div className="col-1-sm">
                    <a href="https://www.bookswagon.com/">
                        <img src="https://www.bookswagon.com/images/logos/logo-new.png" id="ctl00_imglogo" alt="Bookswagon-24x7 online bookstore" className="logonew"/>
                    </a>
                </div>
                <div className="col-6-sm d-flex align-items-center justify-content-center">
                    <SearchBar />
                </div>
                <div className={classes.usercart + " col-5-sm d-flex align-items-center justify-content-end"}>
                    <UserHeader />
                    <CartIcon onClick={props.onShowCart} />
                </div>
            </div>
        </div>
        
    )
}

export default MainHeader;