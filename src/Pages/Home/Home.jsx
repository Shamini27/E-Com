import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Navbar from '../../component/Navbar/Navbar'
import Herosection from '../../component/HeroSection/herosection'
import ProductList from '../../component/ProductList/product_list'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>

      <div className="productList">
      <Container>
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className="section_title">Product List</h2>
                </Col>
                <ProductList/>
            </Row>
        </Container>
        
      </div>
    </div>
   
  )
}

export default Home
