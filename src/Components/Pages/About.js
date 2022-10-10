import React from 'react';
import style from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import OurTeam from '../../Components/JSON DATA/About/OurTeam.json';
import Footer from '../../Components/Footer';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>

            {/* About Us Div */}
            <AboutUsDiv>
                <h1>About Us</h1>
                <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  About Us</p>

                <AboutUsImageDiv></AboutUsImageDiv>

                <AboutUsBottomTextDiv>

                <h1>It pains me physically to see woman victimized, <br />
                    rendered pathetic by fashion.</h1>

                <h3>Awkwardness gives me great comfort. I’ve never been cool, but I’ve felt cool. I’ve been in <br />
                the <br />
                cool place, but I wasn’t really cool – I was trying to pass for hip or cool.</h3>

                <p>A girl should be two things: classy and fabulous. I am convinced that there can be luxury in simplicity. I wanted to dress <br />
                the woman who lives and works, not the woman in a painting. It’s hard to balance everything. It’s always challenging. My <br />
                relationships with producers or photographers – these are relationships that took years. I can’t get sucked into that <br />
                celebrity thing, because I think it’s just crass. My aim is to make the poor look rich and the rich look poor. Vanity is the <br />
                healthiest thing in life. I believe that my clothes can give people a better image of themselves – that it can increase their <br />
                feelings of confidence and happiness. You can hide so much behind theatrics, and I <br />
                don’t need to do that any more. I don’t really know how to do casual clothes.</p>

                </AboutUsBottomTextDiv>

            </AboutUsDiv>

            {/* Proudly Div */}

            <ProudlyDiv>
                <ProudlyLeftDiv></ProudlyLeftDiv>

                <ProudlyRightDiv>
                <h1 style={{
                    margin:'-50px 0 50px 0'
                }}>We are proudly <br />
                    Australian.</h1>

                    <SoftFabricDiv>
                        <SoftFabricImageDiv>
                            <img src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/icon1.svg?v=1627616411" alt="" />
                        </SoftFabricImageDiv>
                        <SoftFabricTextDiv>
                            <h1>Soft Fabric</h1>
                            <p>Get complimentary ground shipping on every <br />
                            order.Don’t love it? Send it back, on us.</p>
                        </SoftFabricTextDiv>
                    </SoftFabricDiv>

                    <LightweightDiv>
                        <LightweightImageDiv>
                            <img src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/icon2_daf1b6c2-ef2e-416c-ae6a-a7ddd145b6c5.svg?v=1627616411" alt="" />
                        </LightweightImageDiv>
                        <LightweightTextDiv>
                            <h1>Lightweight</h1>
                            <p>Join Minimog Rewards to earn gift cards <br />
                                and enjoy exclusive member benefits.</p>
                        </LightweightTextDiv>
                    </LightweightDiv>

                    <AllDayComfortDiv>
                        <AllDayComfortImageDiv>
                            <img src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/icon3.svg?v=1627616411" alt="" />
                        </AllDayComfortImageDiv>
                        <AllDayComfortTextDiv>
                            <h1>All Day Comfort</h1>
                            <p>We believe getting dressed should be the <br />
                            easiest part of your day.</p>
                        </AllDayComfortTextDiv>
                    </AllDayComfortDiv>
                </ProudlyRightDiv>
                
            </ProudlyDiv>

            <TextDiv>
                <h1>The world needs to move fast to make a meaningful </h1>
                   <h1> difference in the fight against climate change.</h1>

                    <TextParagraphDiv>
                        <p>A girl should be two things: classy and fabulous. I am convinced that there can be luxury in simplicity. I wanted to dress <br />
                        the woman who lives and works, not the woman in a painting. It’s hard to balance everything. It’s always challenging. My <br />
                        relationships with producers or photographers – these are relationships that took years. I can’t get sucked into that <br />
                        celebrity thing, because I think it’s just crass. My aim is to make the poor look rich and the rich look poor. Vanity is the <br />
                        healthiest thing in life. I believe that my clothes can give people a better image of themselves – that it can increase their <br />
                        feelings of confidence and happiness. You can hide so much behind theatrics, and I <br /> don’t need to do that any more. I don’t really know how to do casual clothes.</p>
                    </TextParagraphDiv>
            </TextDiv>

            <OurTeamDiv>
                <h1>Our Team</h1>
                <OurTeamImageContainerDiv>
                {
                    OurTeam.map(data=> <OurTeamImageSubDiv>
                        <OurTeamImageDiv style={{
                            backgroundImage:`url(${data.bgImage})`
                        }}>
                            
                        </OurTeamImageDiv>
                        <h2>{data.name}</h2>
                            <h5>{data.position}</h5>
                    </OurTeamImageSubDiv>)
                }
                </OurTeamImageContainerDiv>
            </OurTeamDiv>

                {/* Footer */}
            <Footer></Footer>
        </Container>
    );
};

export default About;

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

const AboutUsImageDiv=style.div`
height:70vh;
width:80vw;
background-image: url(https://cdn.shopify.com/s/files/1/0591/1350/4958/files/1_485206fa-6bcd-4c60-a185-bd75bda77de2.jpg?v=1628328725&width=1500);
background-position:center;
background-size:cover;
margin:100px 0 50px 0;
`

const AboutUsBottomTextDiv=style.div``

/* Proudly Div */

const ProudlyDiv=style.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin:100px 0;
`

const ProudlyLeftDiv=style.div`
height:105vh;
width:35vw;
background-image:url('https://cdn.shopify.com/s/files/1/0591/1350/4958/files/2_7ec8fac3-633a-46c9-b503-dd8b20734495.jpg?v=1628328726&width=720');
background-position:center;
background-size:cover;
`

const ProudlyRightDiv=style.div`
height:80vh;
width:450px;
display:flex;
flex-direction:column;
justify-content:center;
`

/* Soft Fabric Div */

const SoftFabricDiv=style.div`
display:flex;
align-items:center;
margin-bottom:20px;
`

const SoftFabricImageDiv=style.div`
img{
    margin:0 10px;
}
`

const SoftFabricTextDiv=style.div``

/* Lightweight */

const LightweightDiv=style.div`
display:flex;
align-items:center;
margin-bottom:20px;
`

const LightweightImageDiv=style.div`
img{
    margin:0 10px;
}
`

const LightweightTextDiv=style.div``

/* All Day Comfort Div */
const AllDayComfortDiv=style.div`
display:flex;
align-items:center;
`

const AllDayComfortImageDiv=style.div`
img{
    margin:0 10px;
}
`

const AllDayComfortTextDiv=style.div``

/* Paragraph Div */

const TextDiv=style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0 0 100px 0;
`

const TextParagraphDiv=style.div`
color:rgb(69, 68, 68);
margin-top:20px;
`

/* Our Team Div */

const OurTeamDiv=style.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0 0 100px 0;
h1{
    font-size:50px;
    margin:0 0 50px 0;
}
`

const OurTeamImageContainerDiv=style.div`
width:100vw;
display:flex;
justify-content:space-evenly;
`

const OurTeamImageSubDiv=style.div`
@media(max-width:820px){
    h2{
        font-size:20px;
    }
}
`

const OurTeamImageDiv=style.div`
height:220px;
width:350px;
background-size:cover;
background-position:center;
cursor:pointer;
@media(max-width:1070px){
    width:300px;
    height:170px;
}
@media(max-width:940px){
    width:250px;
    height:120px;
}
@media(max-width:820px){
    width:200px;
    height:90px;
}
`