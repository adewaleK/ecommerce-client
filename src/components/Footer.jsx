import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
   display: flex;
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;
const Center = styled.div`
   flex: 1;
`;
const Right = styled.div`
   flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.p`
   margin: 20px 0;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;

const Title = styled.h3`
   margin-bottom: 30px;

`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   
`;
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;

`
const Payment = styled.img``


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KSA.</Logo>
            <Desc>
                KSA. is your number one online Shopping destination.We pride 
                ourselves in having everything you could possibly need for life and 
                living at the best prices than anywhere else.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                   <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                   <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                   <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                   <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fshion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WhishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight: "10px"}}/> Asajoh Way, Off-Lekki-Epe Express Way
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight: "10px"}}/> +2347038893413
        </ContactItem>
        <ContactItem>
            <MailOutlined style={{marginRight: "10px"}}/> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  );
};

export default Footer;