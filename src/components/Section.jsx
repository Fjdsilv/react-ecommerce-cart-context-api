import React from 'react';
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';
import { Routes, Route } from 'react-router-dom';
// import Error from './Error';
import Home from './pages/Home';
import Products from './pages/Products';
import Details from './pages/Details';
// import { ContextProducts } from '../contexts/contextProducts';

const Section = () => {

  return (
    <div>
        <GlobalWrapper>
            <SectionShop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:id" element={<Details />} />
                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>
            </SectionShop>
        </GlobalWrapper>
    </div>
  )
}

const SectionShop = styled.section`
    width:100%;
    border: solid 1px #325bb3;
    border-radius:2px;
    margin-bottom:20px;
    padding:15px 3%;
    padding-top:30px;

`;

export default Section