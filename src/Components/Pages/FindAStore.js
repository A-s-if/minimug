import React from 'react';
import style from 'styled-components';
import Footer from '../../Components/Footer';
import Navigation from '../Navigation/Navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FindAStore = () => {
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Navigation */}
            <Navigation></Navigation>

            {/* About Us Div */}
            <AboutUsDiv>
            <h1>Find a store</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Find a store</p>
            </AboutUsDiv>

            {/* Valencia Street Div */}
            <ValenciaStreetDiv>
                <ValenciaStreetImageDiv></ValenciaStreetImageDiv>

                <ValenciaSteetRightDiv>
                        <h1>Valencia Street Shop</h1>
                        <br />
                        <ValenciaStreetTextDiv>
                            <ValenciaStreetTextLeftDiv>
                            <h3>Address</h3>
                            <p>461 Valencia Street San <br /> 
                            Francisco, CA 94103 <br />
                                <u>Get Direction</u></p>
                                <br />
                                <br />
                                <h3>Message</h3>
                                <p>Send us a text & an<br />
                                ambassador will respond<br />
                                when available.<br />
                                1-814-251-9966</p>
                            </ValenciaStreetTextLeftDiv>

                            <ValenciaStreetTextRightDiv>
                            <h3>We're Open</h3>
                            <p>Our store has re-opened for <br />
                            shopping, exchanges <br />
                            Every day 11am to 7pm</p>
                            <br />
                            <br />
                            <h3>Social Media</h3>
                            <br />
                            <SocialIconDiv>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" />
                    <FacebookIcon sx={{
                        marginRight:'20px',
                        cursor:'pointer'
                    }}></FacebookIcon>
                    <InstagramIcon sx={{
                        cursor:'pointer',
                        marginRight:'20px'
                    }}></InstagramIcon>

                    <TwitterIcon sx={{
                        cursor:'pointer'
                    }}></TwitterIcon>
                            </SocialIconDiv>
                            </ValenciaStreetTextRightDiv>
                        </ValenciaStreetTextDiv>
                </ValenciaSteetRightDiv>
            </ValenciaStreetDiv>

            {/* Williamsburg Div */}
            <WilliamsburgDiv>
                <WilliamsburgLeftDiv>
                        <h1>Valencia Street Shop</h1>
                        <br />
                        <WilliamsburgTextDiv>
                            <WilliamsburgTextLeftDiv>
                            <h3>Address</h3>
                            <p>461 Valencia Street San <br /> 
                            Francisco, CA 94103 <br />
                                <u>Get Direction</u></p>
                                <br />
                                <br />
                                <h3>Message</h3>
                                <p>Send us a text & an<br />
                                ambassador will respond<br />
                                when available.<br />
                                1-814-251-9966</p>
                            </WilliamsburgTextLeftDiv>

                            <WilliamsburgTextRightDiv>
                            <h3>We're Open</h3>
                            <p>Our store has re-opened for <br />
                            shopping, exchanges <br />
                            Every day 11am to 7pm</p>
                            <br />
                            <br />
                            <h3>Social Media</h3>
                            <br />
                            <SocialIconDiv>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" />
                    <FacebookIcon sx={{
                        marginRight:'20px',
                        cursor:'pointer'
                    }}></FacebookIcon>
                    <InstagramIcon sx={{
                        cursor:'pointer',
                        marginRight:'20px'
                    }}></InstagramIcon>

                    <TwitterIcon sx={{
                        cursor:'pointer'
                    }}></TwitterIcon>
                            </SocialIconDiv>
                            </WilliamsburgTextRightDiv>
                        </WilliamsburgTextDiv>
                </WilliamsburgLeftDiv>

                <WilliamsburgImageDiv></WilliamsburgImageDiv>

            </WilliamsburgDiv>
            
            {/* Stanford Center Div */}
            <StanfordCenterDiv>
                
            <StanfordCenterImageDiv></StanfordCenterImageDiv>

                <StanfordCenterRightDiv>
                        <h1>Valencia Street Shop</h1>
                        <br />
                        <StanfordCenterTextDiv>
                            <StanfordCenterTextLeftDiv>
                            <h3>Address</h3>
                            <p>461 Valencia Street San <br /> 
                            Francisco, CA 94103 <br />
                                <u>Get Direction</u></p>
                                <br />
                                <br />
                                <h3>Message</h3>
                                <p>Send us a text & an<br />
                                ambassador will respond<br />
                                when available.<br />
                                1-814-251-9966</p>
                            </StanfordCenterTextLeftDiv>

                            <StanfordCenterTextRightDiv>
                            <h3>We're Open</h3>
                            <p>Our store has re-opened for <br />
                            shopping, exchanges <br />
                            Every day 11am to 7pm</p>
                            <br />
                            <br />
                            <h3>Social Media</h3>
                            <br />
                            <SocialIconDiv>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" />
                    <FacebookIcon sx={{
                        marginRight:'20px',
                        cursor:'pointer'
                    }}></FacebookIcon>
                    <InstagramIcon sx={{
                        cursor:'pointer',
                        marginRight:'20px'
                    }}></InstagramIcon>

                    <TwitterIcon sx={{
                        cursor:'pointer'
                    }}></TwitterIcon>
                            </SocialIconDiv>
                            </StanfordCenterTextRightDiv>
                        </StanfordCenterTextDiv>
                </StanfordCenterRightDiv>


            </StanfordCenterDiv>

            {/* Footer */}
            <Footer></Footer>
        </Container>
    );
};

export default FindAStore;

const Container=style.div``

/* About Us Div */
const AboutUsDiv=style.div`
padding-top:130px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
p{
    display:flex;
    justify-content:center;
    align-items:center;
}
a{
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:black;
}
`

/* ValenciaStreetDiv */
const ValenciaStreetDiv=style.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:50px;
`

const ValenciaStreetImageDiv=style.div`
background-image:url('https://cdn.shopify.com/s/files/1/0591/1350/4958/files/1_7cfd5c0e-938f-4625-a8b2-bd44d716bafe.jpg?v=1628328725&width=940');
height:70vh;
width:50vw;
background-position:center;
background-size:cover;
`

const ValenciaSteetRightDiv=style.div`
width:500px;
`

const ValenciaStreetTextDiv=style.div`
display:flex;
width:450px;
justify-content:space-between;
`

const ValenciaStreetTextRightDiv=style.div``

const ValenciaStreetTextLeftDiv=style.div``

/* Williamsburg */
const WilliamsburgDiv=style.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:50px;
`

const StanfordCenterImageDiv=style.div`
background-image:url('https://cdn.shopify.com/s/files/1/0591/1350/4958/files/3_397ceffe-7d62-4804-a271-4415d5abc837.jpg?v=1628328727&width=940');
height:70vh;
width:50vw;
background-position:center;
background-size:cover;
`

const WilliamsburgLeftDiv=style.div`
width:500px;
`

const WilliamsburgTextDiv=style.div`
display:flex;
width:450px;
justify-content:space-between;
`

const WilliamsburgTextRightDiv=style.div``

const WilliamsburgTextLeftDiv=style.div``

const WilliamsburgImageDiv=style.div`
background-image:url('https://cdn.shopify.com/s/files/1/0591/1350/4958/files/2_6152f838-ccca-4dc6-ac79-f1a95aaa6bfb.jpg?v=1628328726&width=940');
height:70vh;
width:50vw;
background-position:center;
background-size:cover;
`
/* Stanford Center */
const StanfordCenterDiv=style.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin:50px 0;
`

const StanfordCenterRightDiv=style.div`
width:500px;
`

const StanfordCenterTextDiv=style.div`
display:flex;
width:450px;
justify-content:space-between;
`

const StanfordCenterTextRightDiv=style.div``

const StanfordCenterTextLeftDiv=style.div``




/* Social Icon Div */
const SocialIconDiv=style.div`
img{
    width:22px;
    margin-right:20px;
    cursor:pointer;
}
`



