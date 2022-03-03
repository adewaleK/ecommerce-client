import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';



const Container = styled.div`
   height: 60px;
   padding-bottom: 20px;
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between
`

const Left = styled.div`
   display: flex;
   flex: 1;
   align-items: center;
   
`
const Language = styled.span`
   font-size: 14px;
   cursor: pointer;   
`

const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   border: 0.5px solid lightgray; 
   margin-left: 25px;
   padding: 5px; 
`
const Input = styled.input`
   border: none;  
`
const Center = styled.div`
   flex: 1;  
   text-align: center
`
const Logo = styled.h2`
   font-weight: bold;  
   
`

const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`
const MenuItems = styled.div`
   font-size: 14px;
   cursor: pointer;    
   margin-left: 25px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"gray",fontSize:16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>KSA.</Logo>
            </Center>
            <Right>
               <MenuItems>REGISTER</MenuItems>
               <MenuItems>SIGN IN</MenuItems>
               <MenuItems>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined /> 
                  </Badge>
               </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;
