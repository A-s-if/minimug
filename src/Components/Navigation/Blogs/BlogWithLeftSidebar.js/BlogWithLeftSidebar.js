import React, {useContext} from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import BlogsSidebar from '../BlogsSidebar';
import ProductData from '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AboutUsDiv } from '../List View/ListView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Footer from '../../../Footer';
import { Context } from '../../../../App';

const BlogWithLeftSidebar = () => {
    const productData=ProductData.slice(0,6);
    
     const[Data,setData] =useContext(Context);
     
     
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

            {/* Product Div */}
            <ProductDiv>

            {/* Left Product Div */}
            <LeftProductDiv>
            <BlogsSidebar></BlogsSidebar>
            </LeftProductDiv>

            {/* Right Product Div */}
            <RightProductDiv>
                {
                    productData.map((data)=> <div onClick={()=>setData(data)}>
                        <Link to="/product-details">
                        <img src={data.bgImage} alt="" loading="eager" />
                        <h5>{data.name}</h5>
                        <h3>{data.header}</h3>
                        <p>{data.details}</p>
                        <button>Read More</button>
                        </Link>
                    </div>)
                }

                {/* More Page Div */}

                

                        
            </RightProductDiv>

            </ProductDiv>
            

            {/* More Page Div */}

            <MorePageDiv>
                    <Link to='/blog-with-left-sidebar'><p>1</p></Link>
                    <Link to='/blog-with-left-sidebar-page2'><p>2</p></Link>
                    <Link to='/blog-with-left-sidebar-page3'><p>3</p></Link>
                    <Link to='/blog-with-left-sidebar-page2'><KeyboardDoubleArrowRightIcon /></Link>
                </MorePageDiv>

            {/* Footer */}

            <Footer></Footer>
        </Container>
    );
};

export default BlogWithLeftSidebar;

const Container=style.div`
`

/* Product Div */

const ProductDiv=style.div`
display:flex;
justify-content:space-evenly;
`
/* Left Product Div */
const LeftProductDiv=style.div`
`

/* Right Product Div */
const RightProductDiv=style.div`
width:850px;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
div{
    width:400px;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    text-align:center;
    align-items:center;
    a{
        text-decoration:none;
        color:black;
    }
    img{
        width:400px;
        cursor:pointer;
    }
    button{
        width:70px;
        margin-bottom:10px;
        position:relative;
        cursor:pointer;
        border:none;
        background:none;
    }
}
`

const MorePageDiv=style.div`
display:flex;
justify-content:center;
align-items:center;
width:50vw;
margin-left:550px;
a{
    text-decoration:none;
    color:black;
    width:30px;
    margin:0 5px;
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