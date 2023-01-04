import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import ProductData from  '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import BlogsSidebar from '../BlogsSidebar';
import Footer from '../../../Footer';

const SinglePostStyle1 = () => {
    const Product=ProductData.slice(0,4);
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>

            {/* Single Post Main Div */}
            <SinglePostMainDiv>
            {/* Single Post Left Div */}
            <SinglePostLeftDiv>

            <SinglePostLeftHeaderDiv>
            <h4>MIX AND MATCH</h4>
            <h1>10 picnic basket bags on sale to carry around all</h1>
            <h1>summer</h1>
            <h3>by Shopify API on Jul 31, 2021</h3>
            </SinglePostLeftHeaderDiv>
            <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/articles/6.png?v=1628336185&width=940" alt="" loading="eager" />
            <div>
            <p>Before she had a budget-breaking bag named after her, Jane Birkin toted around a simple wicker basket. For this reason, what <br />
            was once a picnic essential became a chic summer accessory — and it remains a trusty and trendy warm-weather carryall.
            <br />
            <br />
Whether used at the beach or at a park in the city, straw basket bags are as sturdy as they are stylish. Ahead, we've rounded up <br />
our favorites on sale to get you through the rest of summer in the chicest way possible. Happy shopping! </p></div><br />
<br />
<TagsAndSocialMediaDiv>
<p>Tags: Accessories, Life Style, Summer</p>
<div>
    <h3>Share:</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" loading="eager" />

                        <Facebook />

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


</TagsAndSocialMediaDiv>

<PreviousAndNextDiv>
    <div>
        <WestIcon></WestIcon>
        <h4>PREVIOUS <br />
        Here's the first look at Valintion's new makup collection.
        </h4>
    </div>
    <div>
        <h4>
            NEXT <br />
            The most vacation-worthy dresses to wear this summer.
        </h4>
        <EastIcon></EastIcon>
    </div>
</PreviousAndNextDiv>

{/* Related Article Div */}

<RelatedArticleDiv>
    <h1>Related Articles</h1>
        <RelatedArticleProductContainerDiv>
            {
                Product.map(pd=><RelatedArticleProductDiv>
                        <img src={pd.bgImage} alt="" />
                        <h3>{pd.header}</h3>
                    </RelatedArticleProductDiv>)
            }
        </RelatedArticleProductContainerDiv>
</RelatedArticleDiv>
</SinglePostLeftDiv>

                {/* Single Post Right Div */}

            <BlogsSidebar></BlogsSidebar>

            </SinglePostMainDiv>

            <Footer></Footer>

        </Container>
    );
};

export default SinglePostStyle1;

const Container=style.div``

/* Single Post Main Div */
export const SinglePostMainDiv=style.div`
width:950px;
padding:150px 0 0 0px;
display:flex;
`

/* Single Post Left Div */
export const SinglePostLeftDiv=style.div`
width:70vw;
display:flex;
flex-direction:column;
justify-content:center;
img{
    width:70vw;
}
`

export const SinglePostLeftHeaderDiv=style.div`
margin-bottom:20px;
display:flex;
flex-direction:column;
align-items:center;
`

export const TagsAndSocialMediaDiv=style.div`
display:flex;
justify-content:space-between;
div{
    width:200px;
    display:flex;
    justify-content:space-evenly;
    img{
        width:22px;
    }
}
`

export const Facebook=style(FacebookIcon)`
cursor:pointer ;
color:rgb(28, 27, 27);
`

export const PreviousAndNextDiv=style.div`
display:flex;
justify-content:space-evenly;
div{
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
}
`

/* Related Article Div */

export const RelatedArticleDiv=style.div`
width:950px;
margin-top:50px;
display:flex;
flex-direction:column;
justify-content:center;
h1{
    margin:20px 0 20px 30px;
}
`

export const RelatedArticleProductContainerDiv=style.div`
width:70vw;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`

export const RelatedArticleProductDiv=style.div`
width:270px;
margin-left:30px;
cursor:pointer;
display:flex;
flex-direction:column;
flex-wrap:wrap;
img{
    width:270px;
}
h3:hover{
    color: rgb(64, 63, 63);
}
`