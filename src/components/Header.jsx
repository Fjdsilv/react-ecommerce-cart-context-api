import React from 'react';
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';
import { Link } from 'react-router-dom';
import cartIcon from '../img/shopping-cart.svg'

const Header = () => {
  return (
    <GlobalWrapper>
        <HeaderStyle>
            <h1>FOOD-CODE</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login / Register</li>
                <div className="cart">
                    <img src={cartIcon} alt="cart shop icon" width="20px" />
                </div> 
                </ul>
                <div className="icon">0</div>
            </nav>
        </HeaderStyle>
    </GlobalWrapper>
  )
}

const HeaderStyle = styled.header`
    display:flex;
    justify-content:space-between;
    width:100%;
    height: 73px;
    padding:15px 5%;

    ul{
        display:flex;
        line-height:40px;
    }

    li{
        text-transform:uppercase;
        margin:0 5px;
    }

    .cart{
        width:30px;
        height:30px;
        position:relative;
    }
    
    .cart img{
        margin-left:12px;
        margin-top:8px;
        cursor:pointer;
    }

    nav .icon{
        position:absolute;
        top:15px;
        right:55px;
        background:#DA291C;
        border-radius:50%;
        color:#F2A900;
        font-size:12px;
        height:15px;
        width:15px;
        padding:2px 4px;

    }
`;



export default Header