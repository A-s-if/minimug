import React from 'react';
import style from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navigation from '../Navigation/Navigation';
import Footer from '../../Components/Footer';

const Contact2 = () => {
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* About Us Div */}
            <AboutUsDiv>
            <h1>Contact Us</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Contact Us</p>
            </AboutUsDiv>

            {/* Contact Us Div */}
            <ContactUsDiv>
                <ContactUsLeftDiv>
                    <h1>We would love to hear from you.</h1> 
                    <br />
                    <h4>If you’ve got great products your making or looking to work with us then drop us a line.</h4>
                    <br />
                    <br />

                    <NameAndEmailDiv>
                        <input type="text" name="" placeholder='Name' id="" />
                        <input type="email" name="" placeholder='Email' id="" />
                    </NameAndEmailDiv>
                    <br />

                    <textarea name="" id="" rows="15" placeholder='Massage'></textarea>
                    <p><Checkbox /> Save my name, email, and website in this browser for the next time I comment</p>
                    <br />

                    <button>Submit Now</button>
                    

                </ContactUsLeftDiv>

                <ContactUsRightDiv>
                    <h2>Address</h2>
                    <br />
                    <br />
                    <p>7895 Piermont Dr NE Albuquerque, NM 198866, See <br />
                     Our Stores</p>
                     <br />
                     <br />
                     <h2>Information</h2>
                     <br />
                     <br />
                     <p>+391 (0)35 2568 4593 <br />
                    hello@domain.com</p>
                    <br />
                    <br />
                    <h2>Social Media</h2>
                    <br />
                    <br />
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
                    
                    <br />
                    <br />
                    <h2>We're Open</h2>
                    <br />
                    <br />
                    <p>Our store has re-opened for shopping, exchanges <br />
                        Every day 11am to 7pm</p>

                </ContactUsRightDiv>
            </ContactUsDiv>
                    {/* Footer */}
            <Footer></Footer>
        </Container>
    );
};

export default Contact2;

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

/* Contact Us Div */

const ContactUsDiv=style.div`
display:flex;
justify-content:space-evenly;
margin:50px 0;
`

const ContactUsLeftDiv=style.div`
h4{
    color: rgb(121, 119, 119);
}
textarea{
    color:rgb(121, 119, 119);
    border:0.5px solid rgb(179, 177, 177);
    border-radius:5px;
    font-size:15px;
    padding:9px;
    width:635px
}
button{
    width:150px;
    height:40px;
    font-size:15px;
    color:white;
    font-weight:bold;
    background-color:black;
    cursor:pointer;
    transition:0.5s;
}

@media(max-width:1070px){
    textarea{
        width:580px;
    }
}
@media(max-width:965px){
    textarea{
        width:520px;
    }
}
@media(max-width:865px){
    textarea{
        width:480px;
    }
}
@media(max-width:820px){
    textarea{
        width:430px;
    }
}
`

const NameAndEmailDiv=style.div`
width:655px;
display:flex;
justify-content:space-between;
input{
    color:rgb(121, 119, 119);
    border:0.5px solid rgb(179, 177, 177);
    border-radius:5px;
    height:35px;
    width:305px;
    font-size:15px;
    padding:0 5px;
}

@media(max-width:1070px){
    width:600px;
    input{
        width:290px;
    }
}
@media(max-width:965px){
    width:540px;
    input{
        width:250px;
    }
}
@media(max-width:865px){
    width:500px;
    input{
        width:230px;
    }
}
@media(max-width:820px){
    width:450px;
    input{
        width:200px;
    }
}
`

const ContactUsRightDiv=style.div`
img{
    width:22px;
    margin-right:20px;
    cursor:pointer;
}
`