import { Facebook, Instagram, Twitter, YouTube, Phone, MailOutlined} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
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


const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;
const Payment = styled.img`
        width:  80%;
       display: flex;
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

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
 `;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const footer = () => {
    return (
        <Container>
            <Left>
                <Logo> LUWANG DISCOUNT STORE</Logo>
                <Desc> The store is located at Kumbi Lai Sandhong Main Road near Communist Party Office. The store is liked by most of the youth who like imported outfit of various brands. And we also deals with imported copies of Watches</Desc>
                <h3>FOLLOW US</h3>  <br/>             
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
                        <YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessorries</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List><br/><br/>
                <h3>PAYMENT METHOD</h3><br/>
                <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdSIIIEFHSkUBt7w3EH8WO0dLLv_Wj3Idr5Alkm-Vh8kPvQ-YfjeZlk__wCobkQhE2A&usqp=CAU" />
            </Center>
            <Right>
                <Title>CONTACT US</Title>
                <ContactItem>
                </ContactItem>
                <ContactItem style={{marginRight:"10px"}}>
                   <Phone/> +91 8974877937
                </ContactItem>
                <ContactItem style={{marginRight:"10px"}} >
                  <MailOutlined/>luwangstore@gmail.com
                </ContactItem>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.0966529747752!2d93.80220867532162!3d24.436587987638713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37494b4d92732089%3A0xbdb4e2973d255591!2sLuwang%20Discount%20Store!5e1!3m2!1sen!2sin!4v1635269837435!5m2!1sen!2sin"
                style={{ border: "0" }}
                width="80%"
                height="200"
                allowfullscreen="allowfullscreen"></iframe>
                
               
            </Right>
        </Container>
    )
}

export default footer
