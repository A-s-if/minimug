import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import ProductData from  '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import BlogsSidebar from '../BlogsSidebar';
import { PreviousAndNextDiv, RelatedArticleDiv, RelatedArticleProductContainerDiv, RelatedArticleProductDiv, SinglePostLeftDiv, SinglePostLeftHeaderDiv, SinglePostMainDiv, TagsAndSocialMediaDiv } from '../SinglePostStyle1/SinglePostStyle1';
import Facebook from '@mui/icons-material/Facebook';
import { CompanyDiv, FacebookIconDiv, MassageAndInformationDiv, MassageDiv, OurStoreDiv, SocialMediaDiv } from '../BlogWithRightSidebar/BlogWithRightSidebar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const SinglePostStyle2 = () => {
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
            <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/articles/6.png?v=1628336185&width=940" alt="" />
            <p>Before she had a budget-breaking bag named after her, Jane Birkin toted around a simple wicker basket. For this reason, what <br />
            was once a picnic essential became a chic summer accessory — and it remains a trusty and trendy warm-weather carryall.
            <br />
            <br />
Whether used at the beach or at a park in the city, straw basket bags are as sturdy as they are stylish. Ahead, we've rounded up <br />
our favorites on sale to get you through the rest of summer in the chicest way possible. Happy shopping! </p><br />
<br />
<TagsAndSocialMediaDiv>
<p>Tags: Accessories, Life Style, Summer</p>
<div>
    <h3>Share:</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" />

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

            {/* Footer */}
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
                    <input type="email" name="" placeholder="Enter you'r email" id="input" />
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

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ek6NZj9DWl4SoPli05dJ2PdHF-M9R9QTzQ&usqp=CAU" alt="" />

                        <FacebookIconDiv  sx={{
                            fontSize:'30px',
                            cursor:'pointer',/* 
                            color:'rgb(28, 27, 27)' */
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

export default SinglePostStyle2;

const Container=style.div``