import { Home } from './components/Home/Home';
import { Clients } from './components/Clients/Clients'
import { Client } from './components/Client/Client';
import { Error404 } from './components/Errors/Error404';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation} from 'react-router-dom'
import {Suspense} from 'react'

export const App = () => {

const location = useLocation()
  const pageTransistion = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    },
  }
  return (
    <AnimatePresence>
       <Routes location={location} key={location.pathname}>
      <Route 
      path='/' 
      element={
        
            <motion.div 
      className='page' 
      initial="out" 
      animate="in" 
      exit="out" 
      variants={pageTransistion}>
          <Home />
          </motion.div>
        }>
      </Route>
      <Route 
      path='/clients' 
      element={
        
            <motion.div 
      className='page' 
      initial="out" 
      animate="in" 
      exit="out" 
      variants={pageTransistion}>
          <Clients />
          </motion.div>
        }>
      </Route>
      <Route path='/client/:id' element={
       <motion.div 
       className='page' 
       initial="out" 
       animate="in" 
       exit="out" 
       variants={pageTransistion}>
        <Client/>
        </motion.div>}></Route>
        <Route path='*' element={
      <motion.div 
      className='page' 
      initial="out" 
      animate="in" 
      exit="out" 
      variants={pageTransistion}>
        <Suspense fallback={<>...</>}>
          <Error404/>
        </Suspense>
      </motion.div>}></Route>
      </Routes>
      
    </AnimatePresence>
   
  );
}


