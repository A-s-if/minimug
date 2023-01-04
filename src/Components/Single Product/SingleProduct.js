import React, { useContext } from 'react';
import { Context } from '../../App';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
import BlogsSidebar from '../Navigation/Blogs/BlogsSidebar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArticleData from '../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';

const SingleProduct = () => {
    const [Data,setData]=useContext(Context);
    const SliceData=ArticleData.slice(1,4);
    console.log(SliceData)
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>
            {/* Single Product Main Div */}
            <SingleProductMainDiv>
                {/* Left Div */}
            <LeftDiv>
            <img src={Data.bgImage} alt="" />
             {/* Details Div */}
            <DetailsDiv>
            <h4>{Data.name}</h4>
            <h1>{Data.header}</h1>
            <p>{Data.details}</p>
            <p>{Data.fullDetails}</p>

            {/* Tags And Share Div */}
            <TagsAndShareDiv>
                <div>Tags:Life style,Vintage</div>
                <div>Share: <FacebookIcon sx={{
                        color: 'rgb(64, 64, 64)',
                        cursor:'pointer'
                    }}></FacebookIcon>
                    <InstagramIcon sx={{
                        color: 'rgb(64, 64, 64)',
                        cursor:'pointer'
                    }}></InstagramIcon>
                    </div>
            </TagsAndShareDiv>
            </DetailsDiv>
            {/* Related Article Div */}
            <RelatedArticleDiv>
                {
                    SliceData.map(pd=><div>
                        <img src={pd.bgImage} alt="" />
                        <h4>{pd.header}</h4>
                        <p>{pd.details}</p>
                        <button>Read More</button>
                    </div>)
                }
            </RelatedArticleDiv>
            </LeftDiv>
            {/* Right Div */} 
            <RightDiv>
                <BlogsSidebar></BlogsSidebar>
            </RightDiv>
            </SingleProductMainDiv>
            <Footer></Footer>
        </Container>
    );
};

export default SingleProduct;

const Container=styled.div``
/* Single Product Main Div */
const SingleProductMainDiv=styled.div`
padding-top:130px;
display:flex;
justify-content:space-evenly; 
`
/* Left Div */
const LeftDiv=styled.div`
width:67vw;
display:flex;
flex-direction:column;
align-items:center;
img{
    width:67vw;
}
`

/* Details Div */
const DetailsDiv=styled.div`
border:0.1px solid rgb(136, 136, 136);
width:50vw;
text-align:center;
padding:30px;
background-color:white;
position:relative;
bottom:100px;
h1{
    font-size:3vw;
}
`
/* Tags And Share Div */
const TagsAndShareDiv=styled.div`
display:flex;
justify-content:space-between;
div{
    display:flex;
    align-items:center;
    cursor:pointer;
}
`
/* Related Article Div */
const RelatedArticleDiv=styled.div`
width:55vw;
display:flex;
justify-content:space-between;
div{
    width:17vw;
    img{
        width:17vw;
    }
    h4{
        font-size:20px;
    }
    button{
        border:none;
        background-color:white;
        font-weight:bold;
        font-size:14px;
        cursor:pointer;
    }
}
`

/* Right Div */
const RightDiv=styled.div``