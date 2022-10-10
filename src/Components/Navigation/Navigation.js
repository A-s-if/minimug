import React from 'react';
import style from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavigationDiv>

            {/* Navigation Top Div */}

            <NavigationTopDiv>

                <TopNavigationLeftDiv>
                    
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
                    <SearchIcon></SearchIcon>
                </TopNavigationLeftDiv>

                <TopNavigationMiddleDiv>
                    <Link to='/'>
                    <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/3.png?v=1628328728&" alt="" />
                    </Link>
                </TopNavigationMiddleDiv>

                <TopNavigationRightDiv>
                        <AccountIcon></AccountIcon>
                        <StarIcon></StarIcon>
                        <ShoppingIcon></ShoppingIcon>

                </TopNavigationRightDiv>

            </NavigationTopDiv>

            {/* Navigation Bottom Div */}

            <NavigationBottomDiv>
                <PageDiv>
                    {/* Home Div */}
                    <HomeDiv>
                    <Link to='/'>
                    <p>Home <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                    </Link>
                    <div>
                        <ul>
                            <li>Main home</li>
                            <li>Women wears</li>
                            <li>Local brand</li>
                            <li>Vogue</li>
                            <li>Elegant mood</li>
                            <li>Trendy style</li>
                            <li>Feminine</li>
                            <li>Instyle</li>
                            <li>Chic</li>
                            <li>Glamour</li>
                        </ul>

                        <ul>
                            <li>Ready to wear</li>
                            <li>Fast fashion</li>
                            <li>Modern day</li>
                            <li>Bra store</li>
                            <li>Backpack</li>
                            <li>Jewelry</li>
                            <li>Active wear</li>
                            <li>Sneaker</li>
                            <li>Watch</li>
                            <li>Bags</li>
                        </ul>

                        <ul>
                            <li>Hat</li>
                            <li>Baby</li>
                            <li>Glasses</li>
                            <li>Houseware</li>
                            <li>Book</li>
                            <li>Socks</li>
                            <li>Bedding</li>
                            <li>Living</li>
                            <li>Hand santizer</li>
                            <li>Plantie</li>
                        </ul>

                        <ul>
                            <li>Coffee</li>
                            <li>Paintme</li>
                            <li>Stationery</li>
                            <li>Case phone</li>
                            <li>Electronic</li>
                            <li>Juice</li>
                            <li>Mirror</li>
                            <li>Supplyment</li>
                            <li>Barber</li>
                            <li>Furniture</li>
                        </ul>

                        <ul>
                            <li>Skateboard</li>
                            <li>Pizza</li>
                            <li>Print</li>
                            <li>Nails polish</li>
                            <li>Bathroom</li>
                            <li>Skincare</li>
                            <li>Toy</li>
                            <li>Beauty</li>
                            <li>Drink</li>
                            <li>Candles</li>
                        </ul>

                        <ul>
                            <li>Pet</li>
                            <li>Organic</li>
                            <li>Postcard</li>
                            <li>Speaker</li>
                            <li>Pan</li>
                            <li>Paint</li>
                            <li>BFCM</li>
                            <li>Christmas</li>
                            <li>Gym</li>
                            <li>POD store</li>
                        </ul>

                        <ul>
                            <li>Surfboard</li>
                            <li>Bike</li>
                            <li>Ceramic</li>
                            <li>Camping</li>
                            <li>Cake</li>
                            <li>Soap</li>
                            <li>Floral</li>
                            <li>Smart Light</li>
                            <li>Pet Clothes</li>
                            <li>Keyboard</li>
                        </ul>
                    </div>
                    </HomeDiv>

                    {/* Shop Div */}
                    <ShopDiv>
                    <Link to='/shop'>
                    <p>Shop <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                    </Link>
                    <div>
                    <ul>
                    <li>Filter left sidebar</li>
                    <li>Filter right sidebar</li>
                    <li>Canvas sidebar</li>
                    <li>Grid 2 columns</li>
                    <li>Grid 3 columns</li>    
                    </ul>

                    <ul>
                        <li>Grid 4 columns</li>
                        <li>Grid 5 columns</li>
                        <li>List view</li>
                        <li>Collections list</li>
                        <li>Filter OS 2.0</li>
                    </ul>

                    <ul>
                        <li>Pagination page</li>
                        <li>Infinite scrolling</li>
                        <li>Load more button</li>
                        <li>Hidden sidebar</li>
                        <li>Full-width layout</li>
                    </ul>

                    <ul>
                        <li>Custom content</li>
                        <li>Custom header banner</li>
                        <li>Cookies law info</li>
                        <li>Advanced filters</li>
                    </ul>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/mega-menu-banner.jpg?v=1628329052&width=533" alt="" />

                        <h1>The New - Season Shoes Edit</h1>
                        <button>Shop Now</button>
                    
                    </div>
                    </div>
                    </ShopDiv>
                    

                    {/* Product Div */}
                        <ProductsDiv>
                        <Link to='/products'>
                    <p>Products <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                    </Link>
                    <div>
                    <ul>
                    <li>Grid 1 columns</li>
                    <li>Grid 2 columns</li>
                    <li>Grid mix</li>
                    <li>Slider 1 column</li>
                    <li>Slider 2 columns</li>
                    <li>Slider vertical</li>
                    <li>Slider full-width</li>
                    <li>Sticky add to cart</li>
                    <li>Product color swatch</li>
                    <li>Pre-order product</li>    
                    </ul>

                    <ul>
                        <li>Product image swatch</li>
                        <li>Product dropdown swatch</li>
                        <li>Lightbox image</li>
                        <li>Product video</li>
                        <li>Product 3D, AR models</li>
                        <li>Buy more save more</li>
                        <li>Product bundles layout 1</li>
                        <li>Product bundles layout 2</li>
                        <li>Custom content</li>
                        <li>Back in stock</li>
                    </ul>

                    <ul>
                        <li>Short description</li>
                        <li>Real-time visitors</li>
                        <li>Stock countdown</li>
                        <li>Sale notification</li>
                        <li>Product countdown timer</li>
                        <li>Custom field</li>
                        <li>Dynamic checkout button</li>
                        <li>Trust badge</li>
                        <li>Delivery information</li>
                        <li>Variant group images</li>
                    </ul>

                    <ul>
                        <li>Collapsible tabs information</li>
                        <li>Product tabs information</li>
                        <li>Products recently viewed</li>
                        <li>Product recommendations</li>
                        <li>Single product layout 1</li>
                        <li>Single product layout 2</li>
                        <li>Single product layout 3</li>
                        <li>Single product layout 4</li>
                        <li>Single product layout 5</li>
                    </ul>

                   

                    </div>

                    </ProductsDiv>


                        {/* Pages Div */}
                        <PagesDiv>
                    
                    <p>Pages <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                    
                    
                    <div>
                        <ul>
                            <Link to="/about-us"><li>About us</li></Link>
                            <Link to="/contact1"><li>Contact 1</li></Link>
                            <Link to="/contact2"><li>Contact 2</li></Link>
                            <Link to="/faqs"><li>FAQs</li></Link>
                            <Link to="/find-a-store"><li>Find a store</li></Link>
                            <Link to="/my-account"><li>My account</li></Link>
                        </ul>
                    </div>

                    </PagesDiv>


                        {/* Blogs Div */}
                        <BlogsDiv>
                    <Link to='/blogs'>
                    <p>Blogs <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                    </Link>
                    <div>
                        <ul>
                            <Link to="/grid-layout"><li>Grid layout</li></Link>
                            <Link to="/list-view"><li>List view</li></Link>
                            <Link to="/blog-with-left-sidebar"><li>Blog with left sidebar</li></Link>
                            <Link to="/blog-with-right-sidebar"><li>Blog with right sidebar</li></Link>
                            <Link to="/single-post-style1"><li>Single post style 1</li></Link>
                            <Link to="/single-post-style2"><li>Single post style 2</li></Link>
                            <Link to="/single-post-style1"><li>Single post with sidebar</li></Link>
                        </ul>
                    </div>
                    </BlogsDiv>


                        {/* Feature Div */}
                       <FeaturesDiv> 
                    <Link to='/features'>
                    <p>Features <KeyboardArrowDownIcon fontSize='small'></KeyboardArrowDownIcon></p>
                </Link>

                <div>
                    <ul>
                        <li>Header 1</li>
                        <li>Header 2</li>
                        <li>Header 3</li>
                        <li>Header 4</li>
                        <li>Header 5</li>
                        <li>Header 6</li>
                    </ul>

                    <ul>
                        <li>Announcement bar 1</li>
                        <li>Announcement bar 2</li>
                        <li>Slideshow</li>
                        <li>Featured promotion</li>
                        <li>Featured collection</li>
                        <li>Image with text</li>
                    </ul>

                    <ul>
                    <li>Newsletter</li>
                    <li>Custom content</li>
                    <li>Testimonials 1</li>
                    <li>Testimonials 2</li>
                    <li>Testimonials 3</li>
                    <li>Testimonials 4</li>
                    </ul>

                    <ul>
                        <li>Video</li>
                        <li>Countdown timer</li>
                        <li>Press</li>
                        <li>Image cards</li>
                        <li>Lookbook</li>
                        <li>Featured products <br />
                         slider</li>
                    </ul>

                    <ul>
                        <li>Collection list 1</li>
                        <li>Collection list 2</li>
                        <li>Collection list 3</li>
                        <li>Collection list 4</li>
                        <li>Collection list 5</li>
                        <li>Image with text overlay</li>
                    </ul>

                    <ul>
                        <li>Product tabs 1</li>
                        <li>Product tabs 2</li>
                        <li>Instagram</li>
                        <li>Blog posts</li>
                        <li>Brands list</li>
                        <li>Footer</li>
                    </ul>

                    <ul>
                        <li>RTL Layout</li>
                    </ul>
                </div>
                </FeaturesDiv>
                    
                    </PageDiv>
            </NavigationBottomDiv>
            
        </NavigationDiv>
    );
};

export default Navigation;

const NavigationDiv=style.div`
position:fixed;
background-color:white;
width:100vw;
z-index:2;
`
/* Navigation Top Div */
const NavigationTopDiv=style.div`
width:100vw;
display:flex;
justify-content:space-evenly;
align-items:center;
height:60px;
`
const TopNavigationLeftDiv=style.div`
display:flex;
p{
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin-right:30px;
}
`
const TopNavigationMiddleDiv=style.div`
padding:0px 300px;
img{
    width:150px;
}
@media(max-width:1045px){
    padding:0px 250px;
}
@media(max-width:945px){
    padding:0px 200px;
}
@media(max-width:840px){
    padding:0px 150px;
}
@media(max-width:740px){
    padding:0px 100px;
}
@media(max-width:640px){
    padding:0px 50px;
}
@media(max-width:530px){
    padding:0px 0px;
}
`
const TopNavigationRightDiv=style.div`
display:flex;
`

const AccountIcon=style(PersonOutlineOutlinedIcon)`
font-size:10px;
`

const StarIcon=style(StarBorderOutlinedIcon)``

const ShoppingIcon=style(ShoppingBagOutlinedIcon)``

/* Navigation Bottom Div */
const NavigationBottomDiv=style.div`
display:flex;
justify-content: center;
align-items:center;
height:60px;
`
const PageDiv=style.div`
display:flex;
width:100vw;
a{
    text-decoration:none;
    color:black;
}
p{
    display:flex;
    align-items:center;
    margin:0px 20px;
    cursor:pointer;
}
`

const HomeDiv=style.div`

text-align:ceter;
height:20px;
width:80px;
display:flex;
flex-direction:column;
:hover div{
    transform:translateX(0%);
}
    
div{
    
    width:100vw;
    padding:45px 0;
    background-color:white;
    display:flex;
    justify-content:space-evenly;
    transition:0.1s;
    transform:translateX(-100vw);
    
    li{
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }
        list-style-type:none;
        margin:20px 0;
        padding:5px;
        color:rgb(64, 64, 64);
        width:150px;
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
        }

        

    
    }
}
`

const ShopDiv=style.div`
height:20px;
width:80px;
display:flex;
flex-direction:column;
:hover div{
    transform:translateX(0);
}
div{
    height:60vh;
    width:100vw;
    padding:45px 0;
    background-color:white;
    display:flex;
    justify-content:space-evenly;
    transition:0.1s;
    position:relative;
    right:80px;
    transform:translateX(-100vw);
    transition:0.1s;
    li{
        list-style-type:none;
        margin:20px 0;
        padding:5px;
        color:rgb(64, 64, 64);
        width:170px;
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
            
        }
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }

    }
    div{
        width:35vw;
        height:35vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        position:relative;
        left:10px;
        cursor:pointer;
        img{
            width:30vw;
        }
        h1{
            font-size:2vw;
        }
        button{
            width:120px;
            padding:10 0;
            cursor:pointer;
        }
    }
}
`
const ProductsDiv=style.div`
height:20px;
width:100px;
display:flex;
flex-direction:column;
:hover div{
    transform:translateX(0%);
}
img{
    width:200px;
}
div{
    width:100vw;
    padding:45px 0;
    background-color:white;
    display:flex;
    justify-content:space-evenly;
    position:relative;
    right:160px;
    justify-content:space-evenly;
    transition:0.1s;
    transform:translateX(-100vw);
       
    }
    li{
        list-style-type:none;
        margin:10px 0;
        padding:5px;
        color:rgb(64, 64, 64);
        width:200px;
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
            
        }
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }
    }
    
    }
}
`


const PagesDiv=style.div`
height:20px;
width:100px;
display:flex;
flex-direction:column;
:hover div{
    display:block;
    transform:translateY(0%)
}
div{
    width:180px;
    background-color:white;
    transform:translateY(50%);
    display:none;
    transition:0.1s;
    li{
        list-style-type:none;
        margin:10px 0;
        padding:10px 0;
        color:rgb(64, 64, 64);
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
            
        }
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }
    }
}
`
const BlogsDiv=style.div`
height:20px;
width:100px;
display:flex;
flex-direction:column;
:hover div{
    display:block;
    transform:translateY(0%)
}
div{
    width:180px;
    background-color:white;
    transform:translateY(50%);
    display:none;
    transition:0.1s;
    li{
        list-style-type:none;
        margin:10px 0;
        padding:10px 0;
        color:rgb(64, 64, 64);
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
            
        }
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }
    }
}
`

const FeaturesDiv=style.div`
text-align:ceter;
height:20px;
width:80px;
display:flex;
flex-direction:column;
:hover div{
    transform:translateX(-35vw);
}
    
div{
    width:100vw;
    padding:45px 0;
    background-color:white;
    display:flex;
    justify-content:space-evenly;
    transition:0.1s;
    transform:translateX(-150vw);
    
    li{
        list-style-type:none;
        margin:20px 0;
        padding:5px;
        color:rgb(64, 64, 64);
        width:150px;
        cursor:pointer;
        :hover{
            color:black;
            background-color:rgb(177, 177, 177);
            
        }
        @media (max-width:1120px){
            width:100px;
            margin:0px 0;
        }
    }
}
`
