import React from 'react';
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';
import { Routes, Route } from 'react-router-dom';
// import Error from './Error';
import Home from './pages/Home';
import Products from './pages/Products';

const Section = () => {
  return (
    <div>
        <GlobalWrapper>
            <SectionShop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
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
    padding:15px 3%;
    padding-top:30px;

`;

export default Section