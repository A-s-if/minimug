import React from 'react';
import style from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Container>

            {/* First Footer Div */}

            <FirstFooterDiv>
                {/* Information Div */}
                <InformationDiv>
                        <p style={{
                            color:'black'
                        }}>Information</p>
                        <br />
                        <br />
                        <p style={{
                            width:'100px'
                        }}>Privacy policy <span></span> </p>
                        <br />
                        <p style={{
                            width:'100px'
                        }}>Refund policy <span></span> </p>
                        <br />
                        <p style={{
                            width:'135px'
                        }}>Shipping & Return <span></span></p>
                        <br />
                        <p style={{
                            width:'132px'
                        }}>Term & conditions <span ></span></p>
                </InformationDiv>

                {/* Quick Links Div */}
                <QuickLinksDiv>
                        <p style={{
                            color:'black'
                        }}>Quick Links</p>
                        <br />
                        <br />
                        <p style={{
                            width:'85px'
                        }}>My account<span ></span> </p>
                        <br />
                        <p style={{
                            width:'30px'
                        }}>Cart <span></span> </p>
                        <br />
                        <p style={{
                            width:'55px'
                        }}>Wishlist <span></span> </p>
                        <br />
                        <p >Product Compare <span></span></p>
                </QuickLinksDiv>

                {/* Our Store Div */}
                <OurStoreDiv>
                    <p style={{
                        color:'black'
                    }}>Our Store</p>
                    <br />
                    <br />
                    <p>Find a location nearest <br />
                        you. <u style={{cursor:'pointer'}}>See Our Stores</u> </p>
                        <br />
                    <p style={{
                        cursor:'pointer',
                    }}>+84 (0)387 392 056</p>
                    <br />
                    <p style={{
                        cursor:'pointer'
                    }}>hello@domain.com</p>
                </OurStoreDiv>

                    {/* Subscribe Div */}
                    <SubscribeDiv>
                        <p style={{
                            color:'black',
                            cursor:'pointer'
                        }}>Subscribe</p>
                        <br />
                        <br />
                        <p>Enter your email below to be the first <br />
                            to know about new collections and <br />
                            product launches.</p>
                            <br />
                            
                    </SubscribeDiv>


            </FirstFooterDiv>

            {/* Information Div */}

            <ContactUsDiv>
                <ContactUsLeftDiv>

                    {/* Visa Image */}
                    <img src="data:image/png;base64,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" alt="" title='Visa' />

                        {/* Merster Card Image */}
                    <img src="data:image/png;base64,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" alt="" title='Mester Card' />

                        {/* PayPal Image */}
                    <img src="data:image/jpeg;base64,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" alt="" title='PayPal' />




                        {/* Diners Club Image */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9JBPB8tU8SEq6wfJ9Z-cs7VRmDHcU3g0CQ&usqp=CAU" alt="" title='Diners Club' />

                        {/* Discover Image */}
                    <img src="data:image/jpeg;base64,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" alt="" title='Discover' />
                </ContactUsLeftDiv>

                <ContactUsMiddleDiv>
                    <p>© MINIMOG 2021</p>
                </ContactUsMiddleDiv>

                <ContactUsRightDiv>
                    <FacebookOutlinedIcon sx={{
                        color: 'rgb(64, 64, 64)',
                        cursor:'pointer'
                    }}></FacebookOutlinedIcon>

                    <InstagramIcon sx={{
                        color: 'rgb(64, 64, 64)',
                        cursor:'pointer'
                    }}></InstagramIcon>

  
    <select style={{
        border:'none',
        fontSize:'15px',
        color: 'rgb(64, 64, 64)',
        cursor:'pointer'
    }}>
    <option >USD</option>
    <option >CNY</option>
    <option >EUR</option>
    <option >GBP</option>
    <option >HKD</option>
    <option >CAD</option>
    </select>

    <select style={{
        border:'none',
        fontSize:'15px',
        color: 'rgb(64, 64, 64)',
        cursor:'pointer'
    }}>
        <option>English</option>
        <option>francais</option>
        <option>বাংলা</option>
        <option>中国人</option>
        <option>عربي</option>
    </select>
                </ContactUsRightDiv>

            </ContactUsDiv>
            

        </Container>
    );
};

export default Footer;

const Container=style.div``

/* First Div */

const FirstFooterDiv=style.div`
margin-top:50px;
display:flex;
`

const InformationDiv=style.div`
@media(max-width:1090px){
    width:20vw;
    p{

    }
}
width:25vw;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
border-left:2px solid rgb(219, 217, 217);
border-bottom:2px solid rgb(219, 217, 217);
p{
    color:rgb(63, 62, 62);
    cursor:pointer;
    margin-left:40px;
    position:relative;
    span{
        position:absolute;
        width:0px;
        background-color:black;
        height:1px;
        left:0px;
        top:20px;
        transition:0.5s;
    }

    :hover span{
        width:100%;
    }

    :hover{
        color:black;
    }
}
`

const QuickLinksDiv=style.div`
@media(max-width:1090px){
    width:20vw;
}
width:25vw;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
border-left:2px solid rgb(219, 217, 217);
border-bottom:2px solid rgb(219, 217, 217);
p{
    margin-left:40px;
    color:rgb(63, 62, 62);
    cursor:pointer;
    position:relative;
    span{
        position:absolute;
        width:0px;
        background-color:black;
        height:1px;
        left:0px;
        top:20px;
        transition:0.5s;
    }

    :hover span{
        width:100%;
    }

    :hover{
        color:black;
    }
}
`

const OurStoreDiv=style.div`
@media(max-width:1090px){
    width:20vw;
}
width:25vw;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
border-left:2px solid rgb(219, 217, 217);
border-bottom:2px solid rgb(219, 217, 217);
p{
    margin-left:40px;
    color:rgb(63, 62, 62);
    
    u{
        :hover{
            color:black;
        }
    }
}

`

const SubscribeDiv=style.div`
@media(max-width:1090px){
    width:20vw;
}
width:25vw;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
border-left:2px solid rgb(219, 217, 217);
border-bottom:2px solid rgb(219, 217, 217);
p{
    margin-left:40px;
    color:rgb(63, 62, 62);

    
}
`

/* Contact Us Div */

const ContactUsDiv=style.div`
display:flex;
justify-content:space-between;
padding:20px 0;
`

const ContactUsLeftDiv=style.div`
width:400px;
display:flex;
justify-content:space-evenly;
img{
    width:45px;
    height:25px;
    cursor:pointer;
}
@media(max-width:900px){
    width:300px;
    img{
        width:30px;
    }
}
`

const ContactUsMiddleDiv=style.div``

const ContactUsRightDiv=style.div`
width:300px;
display:flex;
justify-content:space-evenly;
`