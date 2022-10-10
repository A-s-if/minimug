import React, { useState } from 'react';
import style from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navigation from '../Navigation/Navigation';
import Footer from '../../Components/Footer';

const FAQs = () => {
    const [shippingMethodAvailable,setShippingMethodAvailable]=useState(false);
    const [howLongWillTake,setHowLongWillTake]=useState(false);
    const [shipInternationally,setShipInternationally]=useState(false);
    const [paymentMathods,setPaymentMathods]=useState(false);
    const [onlineBuyingSafe,setOnlineBuyingSafe]=useState(false);
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Frequently Div */}
            <FrequentlyDiv>
            <h1>Frequently Asked Questions</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Frequently Asked Questions</p>
            <FrequentlyImageDiv></FrequentlyImageDiv>
            <FrequentlyBottomTextDiv>
                <br />
                <br />
                <h3>Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – I <br />
                was trying to pass for hip or cool.</h3>
                <br />
                <p>
                A girl should be two things: classy and fabulous. I am convinced that there can be luxury in simplicity. I wanted to dress the woman who lives and works, not the woman in a <br /> painting. It’s hard to balance everything. It’s always challenging. My relationships with producers or photographers – these are relationships that took years. I can’t get <br />
                sucked into that celebrity thing, because I think it’s just crass. My aim is to make the poor look rich.
                </p>
            </FrequentlyBottomTextDiv>
            </FrequentlyDiv>

            {/* About Buying Div */}
            <AboutBuyingDiv>

                <ShippingMethodAvailableDiv onClick={()=> setShippingMethodAvailable (!shippingMethodAvailable)}>
                    <AboutBuyingHeadingDiv>
                    <h3>What shipping mathods are available? </h3>
                    {shippingMethodAvailable ? <KeyboardArrowUpIcon sx={{
                        width:'300px'
                    }}></KeyboardArrowUpIcon> : <ExpandMoreIcon sx={{
                        width:'300px'
                    }}></ExpandMoreIcon>}
                    </AboutBuyingHeadingDiv>
                    <hr />
                    {
                        shippingMethodAvailable && <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. <br />
                         <br />
    
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    }
                    
                </ShippingMethodAvailableDiv>


                <HowLongWillTakeDiv onClick={()=> setHowLongWillTake (!howLongWillTake)}>
                    <AboutBuyingHeadingDiv>
                    <h3>How long will it take to get my package? </h3>
                    {howLongWillTake ? <KeyboardArrowUpIcon sx={{
                        width:'300px',
                    }}></KeyboardArrowUpIcon> : <ExpandMoreIcon sx={{
                        width:'300px'
                    }}></ExpandMoreIcon>}
                    </AboutBuyingHeadingDiv>
                    
                    <hr />
                    {
                        howLongWillTake && <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                         exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    }
                    
                </HowLongWillTakeDiv>


                <ShipInternationallyDiv onClick={()=> setShipInternationally (!shipInternationally)}>
                    <AboutBuyingHeadingDiv>
                    <h3>Do you ship internationally?</h3>
                    {shipInternationally ? <KeyboardArrowUpIcon sx={{
                        width:'300px'
                    }}></KeyboardArrowUpIcon> : <ExpandMoreIcon sx={{
                        width:'300px'
                    }}></ExpandMoreIcon>}  
                    </AboutBuyingHeadingDiv>
                    <hr />
                    {
                        shipInternationally && <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                         exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    }
                    
                </ShipInternationallyDiv>


                <PaymentMathodsDiv onClick={()=> setPaymentMathods (!paymentMathods)}>
                    <AboutBuyingHeadingDiv>
                    <h3>What payment mathods are accepted?</h3>
                    {paymentMathods ? <KeyboardArrowUpIcon sx={{
                        width:'300px'
                    }}></KeyboardArrowUpIcon> : <ExpandMoreIcon sx={{
                        width:'300px'
                    }}></ExpandMoreIcon>}
                    </AboutBuyingHeadingDiv>
                    <hr />
                    {
                        paymentMathods && <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                         exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    }
                    
                </PaymentMathodsDiv>


                <OnlineBuyingSafeDiv onClick={()=> setOnlineBuyingSafe (!onlineBuyingSafe)}>

                    <AboutBuyingHeadingDiv>
                    <h3>Is buying on-line safe? </h3>
                    {onlineBuyingSafe? <KeyboardArrowUpIcon sx={{
                        width:'300px'
                        
                    }}></KeyboardArrowUpIcon>
                    :
                    <ExpandMoreIcon sx={{
                        width:'300px'
                    }}></ExpandMoreIcon>}
                    </AboutBuyingHeadingDiv>
                    <hr />
                    {
                        onlineBuyingSafe && <p>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                         exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    }
                    
                </OnlineBuyingSafeDiv>
            </AboutBuyingDiv>

            {/* Footer */}
                <Footer></Footer>
            
        </Container>
    );
};

export default FAQs;

const Container=style.div``

/* Frequently Div */
const FrequentlyDiv=style.div`
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

const FrequentlyImageDiv=style.div`
height:70vh;
width:80vw;
background-image:url('https://cdn.shopify.com/s/files/1/0561/2742/2636/files/faqs.jpg?v=1620784288');
background-position:center;
background-size:cover;
margin-top:50px;
`

const FrequentlyBottomTextDiv=style.div``

/* About Buying Div */

const AboutBuyingDiv=style.div`
padding:100px 0;
text-align:center;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
`

const AboutBuyingHeadingDiv=style.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const ShippingMethodAvailableDiv=style.div`
width:95vw;
cursor:pointer;
h3{
    padding-bottom:25px;
}
`

const HowLongWillTakeDiv=style.div`
width:95vw;
cursor:pointer;
h3{
    cursor:pointer;
    padding-bottom:25px;
}
`

const ShipInternationallyDiv=style.div`
width:95vw;
cursor:pointer;
h3{
    cursor:pointer;
    padding-bottom:25px;
}
`

const PaymentMathodsDiv=style.div`
width:95vw;
cursor:pointer;
h3{
    cursor:pointer;
    padding-bottom:25px;
}
`

const OnlineBuyingSafeDiv=style.div`
width:95vw;
cursor:pointer;
h3{
    cursor:pointer;
    padding-bottom:25px;
}
`

