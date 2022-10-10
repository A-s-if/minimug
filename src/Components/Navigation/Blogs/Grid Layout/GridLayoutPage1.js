import React from 'react';
import style from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import GridLayoutPage1Data from '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Navigation from '../../Navigation';
import Footer from '../../../Footer';
import BlogsSidebar from '../BlogsSidebar';

const GridLayoutPage1 = () => {
    return (
        <Container>
            <Navigation></Navigation>

            {/* About Us Div */}
            <AboutUsDiv>
            <h1>Mix and Match</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Mix and Match</p>
            </AboutUsDiv>

            {/* Grid Layout Product Div */}
            <GridLayoutProductDiv>
                {/* Grid Layout Product Left Div */}
                <GridLayoutProductLeftDiv>
                        {
                            GridLayoutPage1Data.map(data=> <GridLayoutProductLeftContainerDiv>
                                <img src={data.bgImage} alt="" />
                                <h5>{data.name}</h5>
                                <h3>{data.header}</h3>
                                <p>{data.details}</p>
                                <br />
                                <br />
                                <button>Read More</button> 
                            </GridLayoutProductLeftContainerDiv>)
                        }

                        <MorePageDiv>
                            <Link to='/grid-layout'><p>1</p></Link>
                            <Link to='/grid-layout-page2'><p>2</p></Link>
                            <Link to='/grid-layout-page2'><KeyboardDoubleArrowRightIcon /></Link>
                        </MorePageDiv>

                </GridLayoutProductLeftDiv>

                {/* Grid Layout Product Right Div */}

                <BlogsSidebar></BlogsSidebar>


            </GridLayoutProductDiv>

            {/* Footer */}

            <Footer></Footer>
        </Container>
    );
};

export default GridLayoutPage1;

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

/* Grid Layout Product Div */

const GridLayoutProductDiv=style.div`
display:flex;
`

/* Grid Layout Product Left Div */

const GridLayoutProductLeftDiv=style.div`
width:1000px;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
padding-bottom:50px;
margin-top:20px;
`

const GridLayoutProductLeftContainerDiv=style.div`
width:220px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
img{
    width:220px;
    height:120px;
}
h3{
    cursor:pointer;
    transition:0.2s;
    :hover{
        color: rgb(90, 89, 89);
    }
}
h5{
    color: rgb(57, 57, 57);
    
}
p{
    color: rgb(57, 57, 57);
}
button{
    width:70px;
    margin-bottom:10px;
    position:relative;
    cursor:pointer;
    border:none;
    background:none;
}

`

export const MorePageDiv=style.div`
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

/* Grid Layout Product Right Div */

export const GridLayoutProductRightDiv=style.div`
margin-left:10px;
`

export const CategoriesDiv=style.div`
width:500px;
height:200px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
p{
    cursor:pointer;
}
`

export const RecentPostDiv=style.div`
height:300px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
div{
    display:flex;
    img{
        width:90px;
    }
    div{
        margin-left:10px;
        width:250px;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
    }
}
`

export const TagsDiv=style.div`
div{
    margin-top:10px;
    width:300px;
    display:flex;
    flex-wrap:wrap;
    p{
        margin-right:15px;
    }
}
`

export const InstagramDiv=style.div`
h3{
    margin:10px 0;
}
div{
border:2px solib black;
width:400px;
margin-top:10px;
img{
    width:120px;
    margin:5px 10px 0px 0;
    cursor:pointer;
}
}

`



