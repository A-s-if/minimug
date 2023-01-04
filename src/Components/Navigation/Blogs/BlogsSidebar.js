import React, { useContext } from 'react';
import { Context } from '../../../App';
import style from 'styled-components';
import { Link } from 'react-router-dom';
import BlogsSidebarInstagramData from '../../JSON DATA/Blogs/BlogsSidebar/Instagram.json';
import BlogsSidebarRecentPostData from '../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';

const BlogsSidebar = () => {
const recentPostData=BlogsSidebarRecentPostData.slice(0,3);
const [Data,setData]=useContext(Context);
    return (
        <div>
            {/* Gridlayout Product Right Div */}
            <GridLayoutProductRightDiv>
                {/* Catagories Div */}
                    <CategoriesDiv>
                        <h3>Categories</h3>
                        <p>All products</p>
                        <p>Best sellers</p>
                        <p>New arrivals</p>
                        <p>Accessories</p>
                    </CategoriesDiv>

                        {/* Recent Post Div */}
                    <RecentPostDiv>
                        <h2>Recent Post</h2>
                        {
                            recentPostData.map(data=> <div onClick={()=>setData(data)}>
                                <Link to="/product-details">
                                <img src={data.bgImage} alt="" loading="eager" />
                                <div>
                                    <h6>{data.name}</h6>
                                    <h4>{data.header}</h4>
                                </div>
                                </Link>
                            </div>)
                        }
                    </RecentPostDiv>

                    <TagsDiv>
                        <h3>Tags</h3>
                        <div>
                            <p>Accessories</p>
                            <p>Beauty</p>
                            <p>Collection</p>
                            <p>Color</p>
                            <p>Cosmetics</p>
                            <p>Fall</p>
                            <p>Fashion Tips</p>
                            <p>Life Style</p>
                            <p>Makeup</p>
                            <p>Office</p>
                            <p>Summer</p>
                            <p>Vintage</p>
                        </div>
                    </TagsDiv>

                    <InstagramDiv>
                        <h3>Instagram</h3>
                        <div>
                        {
                            BlogsSidebarInstagramData.map(data=> <img src={data.bgImage} alt="" loading="eager" /> 
                            )
                        }
                        </div>
                    </InstagramDiv>

                </GridLayoutProductRightDiv>
        </div>
    );
};

export default BlogsSidebar;

export const GridLayoutProductRightDiv=style.div`
width:400px;
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
margin-top:50px;
height:300px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
div{
    cursor:pointer;
    display:flex;
    a{
        text-decoration:none;
        color:black;
    }
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

 const TagsDiv=style.div`
 margin-top:50px;
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

 const InstagramDiv=style.div`
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