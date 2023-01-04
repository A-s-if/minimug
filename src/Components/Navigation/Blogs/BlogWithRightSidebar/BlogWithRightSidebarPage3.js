import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import ListViewData from '../../../JSON DATA/Blogs/GridLayoutPage2/GridLayoutPage2.json';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EastIcon from '@mui/icons-material/East';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import BlogsSidebar from '../BlogsSidebar';

const BlogWithRightSidebarPage3 = () => {
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>

            {/* About Us Div */}
            <AboutUsDiv>
            <h1>Mix and Match</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Mix and Match</p>
            </AboutUsDiv>

            {/* List View Product Div */}

            <ListViewProductDiv>
            {/* List View Product Left Div */}

                <ListViewProductLeftDiv>
                    {
                        ListViewData.map(data=> <div>
                            <img src={data.imageURL} alt="" />
                            <div>
                                <h5>{data.name}</h5>
                                <h3>{data.header}</h3>
                                <p>{data.details}</p>
                                <button>Read More</button>
                            </div>
                        </div>)
                    }

                            <MorePageDiv>
                            <Link to='/blog-with-right-sidebar-page2'><KeyboardDoubleArrowLeftIcon /></Link>
                            <Link to='/blog-with-right-sidebar'><p>1</p></Link>
                            <Link to='/blog-with-right-sidebar-page2'><p>2</p></Link>
                            <Link to='/blog-with-right-sidebar-page3'><p>3</p></Link>
                        </MorePageDiv>
                </ListViewProductLeftDiv>

                {/* Grid Layout Product Right Div */}

                <BlogsSidebar></BlogsSidebar>

            </ListViewProductDiv>

            {/* Massage and Information Div */}

            <MassageAndInformationDiv>
                <MassageDiv>
                    <h1>Don't miss a thing</h1>

                    <p>
                    Enter your email below to be the first to know <br />
                    about new collections and product launches.
                    </p>

                    <div>
                    <EmailOutlinedIcon sx={{
                    }} />
                    <input type="email" name="" placeholder="Enter you'r email" id="" />
                    <EastIcon/>
                    </div>
                    </MassageDiv>

                    <OurStoreDiv>
                        <h3>Our Store</h3>
                        <br />
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>FAQs</p>
                        <p>Blog</p>
                    </OurStoreDiv>


                    <CompanyDiv>
                        <h3>Company</h3>
                        <br />
                        <p>Find a location nearest <br />
                        you. <u style={{
                            cursor:'pointer'
                        }}>See our stores</u> </p>
                        <br />
                        <p>+391 (0)35 2568 4593 <br />
                        hello@domain.com</p>
                    </CompanyDiv>

                    <SocialMediaDiv>
                        <h3>Social Media</h3>
                            <br />
                        <div>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" loading="eager" />

                        <FacebookIcon  sx={{
                            fontSize:'30px',
                            cursor:'pointer',
                            color:'rgb(28, 27, 27)'
                        }} />

                        <InstagramIcon sx={{
                            fontSize:'30px',
                            cursor:'pointer',
                            color:'rgb(28, 27, 27)'
                        }}/>

                        <TwitterIcon sx={{
                            fontSize:'30px',
                            cursor:'pointer',
                            color:'rgb(28, 27, 27)'
                        }}/>

                        </div>
                    </SocialMediaDiv>
                
            </MassageAndInformationDiv>
        </Container>
    );
};

export default BlogWithRightSidebarPage3;

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

/* List View Product Div */

const ListViewProductDiv=style.div`
display:flex;
margin-bottom:50px;
justify-content:space-evenly;
`

/* List View Product Left Div */

const ListViewProductLeftDiv=style.div`
img{
    cursor:pointer;
}
div{
    display:flex;
    margin-top:30px;
    @media(max-width:1095px){
        img{
            width:250px;
        }
    }
    @media(max-width:965px){
        img{
            width:220px;
            height:130px;
        }
    div{
        width:370px;
        margin-left:30px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        justify-content:center;
        h3{
            cursor:pointer;
            transition:0.2s;
            :hover{
                color: rgb(90, 89, 89);
            }
        }
        p{
            font-size:14px;
        }
        button{
            width:70px;
            margin-top:10px;
            position:relative;
            cursor:pointer;
            border:none;
            background:none;
        }
        
        @media(max-width:915px){
            width:250px;
        }
    }
}
`

const MorePageDiv=style.div`
width:500px;
display:flex;
justify-content:center;
a{
    text-decoration:none;
    color:black;
    margin:0 5px;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5px;
    :hover{
        background-color:rgb(196, 194, 194);
        border-radius:50%;
    }
}
`

/* Massage and Information Div */

const MassageAndInformationDiv=style.div`
display:flex;
justify-content:space-evenly;
`

const MassageDiv=style.div`
width:360px;
height:200px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
div{
    border:2px solid black;
    width:350px;
    padding:10px 0;
    border-radius:5px;
    display:flex;
    justify-content:space-evenly;
    input{
        border:none;
        width:250px;
        padding:2px 5px;
        font-size:17px;
    }
}
`

const OurStoreDiv=style.div``

const CompanyDiv=style.div``

const SocialMediaDiv=style.div`
div{
    width:200px;
    display:flex;
    justify-content:space-between;
    img{
        width:22px;
        cursor:pointer;
    }
}

`