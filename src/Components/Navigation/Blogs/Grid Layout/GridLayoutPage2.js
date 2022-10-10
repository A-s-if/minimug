import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import GridLayoutPage2Data from '../../../JSON DATA/Blogs/GridLayoutPage2/GridLayoutPage2.json';
import Footer from '../../../Footer';
import BlogsSidebar from '../BlogsSidebar';

const GridLayoutPage2 = () => {
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

                <GridLayoutProductLeftContainerDiv>
                    {
                        GridLayoutPage2Data.map(data=> <div>
                            <img src={data.imageURL} alt="" />
                            <h5>{data.category}</h5>
                            <h3>{data.header}</h3>
                            <p>{data.details}</p>
                            <br />
                            <br />
                            <button>Read More</button>
                        </div> )
                    }
                </GridLayoutProductLeftContainerDiv>
                <PreviousPageDiv>
                            <Link to='/grid-layout'><KeyboardDoubleArrowLeftIcon /></Link>
                            <Link to='/grid-layout'><p>1</p></Link>
                            <Link to='/grid-layout-page2'><p>2</p></Link>
                            
                        </PreviousPageDiv>
            </GridLayoutProductLeftDiv>

            {/* Grid Layout Product Right Div */}
            
            <BlogsSidebar></BlogsSidebar>

                </GridLayoutProductDiv>

                <Footer></Footer>
        </Container>
    );
};

export default GridLayoutPage2;

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
justify-content:space-evenly;
padding-bottom:50px;
`

/* Grid Layout Product Left Div */

const GridLayoutProductLeftDiv=style.div`
margin-top:20px;
`

const GridLayoutProductLeftContainerDiv=style.div`
width:750px;
display:flex;
justify-content:space-evenly;
div{
    width:220px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    img{
        width:220px;
        height:120px;
    }

    button{
        width:70px;
        position:relative;
        cursor:pointer;
        border:none;
        background:none;
    }
    
}
`

const PreviousPageDiv=style.div`
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