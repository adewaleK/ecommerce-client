import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    
`;
const ImgContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex:1;
    margin-top: 20px;

`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0;
   display: flex;
   justify-content: space-between;

`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
 `;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;

   
  `;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
  `;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;  
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;  
    margin: 0 5px;

`;
const Button = styled.button`
    padding: 15px;
    border:2px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
    &hover{
        background-color: #f8f4f4;
    }

`;






const Product = () => {
  return (
           <Container>
               <Navbar />
               <Announcement />
               <Wrapper>
                   <ImgContainer>
                      <Image src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/G/77650_1618165998.jpg" />
                   </ImgContainer>
                   <InfoContainer>
                       <Title>Espirit Off Shoulder Top</Title>
                       <Desc>This vibrant off shoulder white top is the perfect combination of ladylike and 
                           luxurious. With an elasticated off shoulder neckline and statement 3/4 sleeves design, 
                           the stunning top is destined to be a new classic addition to your wardrobe.
                        </Desc>
                       <Price>$ 20</Price>
                      
                       <FilterContainer>
                           <Filter>
                               <FilterTitle>Color</FilterTitle>
                               <FilterColor color="black" />
                               <FilterColor color="darkblue" />
                               <FilterColor color="gray" />                       
                           </Filter>
                           <Filter>
                              <FilterTitle>Size</FilterTitle>
                              <FilterSize>
                                  <FilterSizeOption>XS</FilterSizeOption>
                                  <FilterSizeOption>S</FilterSizeOption>
                                  <FilterSizeOption>M</FilterSizeOption>
                                  <FilterSizeOption>L</FilterSizeOption>
                                  <FilterSizeOption>XL</FilterSizeOption>
                              </FilterSize>
                           </Filter>
                       </FilterContainer>
                       <AddContainer>
                           <AmountContainer>
                               <Remove />
                                  <Amount>1</Amount>
                               <Add />
                           </AmountContainer>
                           <Button>ADD TO CART</Button>
                       </AddContainer>
                   </InfoContainer>
               </Wrapper>
               <Newsletter />
               <Footer />

          </Container>
        );
};

export default Product;
