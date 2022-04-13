import React, {useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContextProducts } from '../../contexts/contextProducts';


const Products = () => {

  const {products} = useContext(ContextProducts);

  return (
    <ShowProducts>
      {
        products.map(product => {
          const { _id, img, name, about, price, units } = product; 

          return (
            <Card key={_id}>
              <Link to={`/products/${_id}`}>
                <img src={img} alt="" />
              </Link>
              <CardContent>
                <h3>
                <Link to={`/products/${_id}`}>
                {name}
                </Link>
                </h3> 
                <span>${price}</span>
                {/* <button onClick={()=> addCart(_id)}>Add to cart</button> */}
              </CardContent>
            </Card>
          )

        })
      }
    </ShowProducts>
    
  )

  }

  const ShowProducts = styled.div`
    display:flex;
    justify-content:space-between;
  
  `;

  const Card = styled.div`
  
  `;

  const CardContent = styled.div`

  
  `;

export default Products
