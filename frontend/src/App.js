import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import RouterView from './router'

import Modal from './components/common/Modal'
import AuthProvider from './providers/AuthProvider'
import CartProvider from './providers/CartProvider'
import OrderProvider from './providers/OrderProvider'
import Cart from './components/cart/Cart'
import LoginForm from './components/login/LoginForm'
import User from './components/user/User'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route
            component={() => {
              window.scrollTo(0, 0)
              return null
            }}
          />
          <RouterView />
          <Footer />
          <AuthProvider>
            {({ isModalOpen, closeModal }) => (
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <LoginForm onLoggedIn={closeModal} />
              </Modal>
            )}
          </AuthProvider>
          <CartProvider>
            {({ isCartOpen, closeCart }) => (
              <Cart isOpen={isCartOpen} onClose={closeCart} />
            )}
          </CartProvider>
          <OrderProvider>
            {({ isOrderOpen, closeOrder }) => (
              <User isOpen={isOrderOpen} onClose={closeOrder} />
            )}
          </OrderProvider>
        </div>
      </Router>
    )
  }
}

export default App
