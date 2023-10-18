import React from 'react';
import {Box,Link } from '@chakra-ui/react';
import Page from './Page'
import Cart from './Cart'
import {ShoppingCartOutlined,LoginOutlined} from '@ant-design/icons'

//import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

const Navbar = ({cart}) => {
  
  return (
    //// <BrowserRouter>
    

      
      <Box className='flex justify-between items-center p-4 z-[100] w-full bg-[#081621] h-[10vh]'>

    
      
          <div>
      <Link href="/">
        
          
      <Box color={'white'} ml={5}>
        
        <img src="home.png" alt="img" width={40} height={40} />
         </Box>
      </Link>
      </div>
  
    
          

      
  
      <div>
      <Box alignItems={'flex-end'} maxW={'auto'} justifyItems={"flex-end"}>
      <Box color={'white'} className='justify-between space-x-8'>
         
      <span className="absolute top-2 right-40 bg-red-600 rounded-2xl p-0.5">
            {cart.length}
            </span>

          <Link href="/Components/Cart"> 
         <ShoppingCartOutlined />Cart  
          </Link> 
         
         
         <button>
         <LoginOutlined /> Sign In
         </button>
       
       <Box>

      
      
       </Box>

      </Box>
    
      </Box>
      </div>
     
    </Box>
        
          
    
    // </BrowserRouter>
  );
  
}

export default Navbar;
