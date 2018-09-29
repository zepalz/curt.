import React from 'react'
import styled from 'styled-components'
import Header from '../components/home/Header'
import News from '../components/home/News'
import Shop from '../components/home/Shop'
import ProductSlider from '../components/home/ProductSlider'
import Slogan from '../components/home/Slogan'

class Home extends React.Component {
  state = {
    msg: 'Home',
  }

  componentDidMount = () => {} // fetch data here

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <Header />
        <News />
        <Shop />
        <ProductSlider />
        <Slogan />
      </div>
    )
  }
}

export default Home