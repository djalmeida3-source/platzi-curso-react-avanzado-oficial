import { Redirect, Router } from '@reach/router'
import React, { useContext, Suspense } from 'react'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { GlobalStyle } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
