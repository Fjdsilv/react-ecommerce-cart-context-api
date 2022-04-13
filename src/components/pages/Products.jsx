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
                <img src={img} alt="" width="100%" height="300px"/>
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
    flex-wrap:wrap;
    justify-content:center;
  
  `;

  const Card = styled.div`
    width:27%;
    margin:10px;
    
  
  `;

  const CardContent = styled.div`

  `;

export default Products
