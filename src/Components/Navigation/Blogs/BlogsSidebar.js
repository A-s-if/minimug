import React from 'react';
import style from 'styled-components';
import BlogsSidebarInstagramData from '../../JSON DATA/Blogs/BlogsSidebar/Instagram.json';
import BlogsSidebarRecentPostData from '../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';

const BlogsSidebar = () => {
const recentPostData=BlogsSidebarRecentPostData.slice(0,3);
console.log(BlogsSidebarInstagramData)
    return (
        <div>
            <GridLayoutProductRightDiv>
                    <CategoriesDiv>
                        <h3>Categories</h3>
                        <p>All products</p>
                        <p>Best sellers</p>
                        <p>New arrivals</p>
                        <p>Accessories</p>
                    </CategoriesDiv>

                    <RecentPostDiv>
                        <h2>Recent Post</h2>
                        {
                            recentPostData.map(data=> <div>
                                <img src={data.bgImage} alt="" />
                                <div>
                                    <h6>{data.name}</h6>
                                    <h4>{data.header}</h4>
                                </div>
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
                            BlogsSidebarInstagramData.map(data=> <img src={data.bgImage} alt="" /> 
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

 const TagsDiv=style.div`
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