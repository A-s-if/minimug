import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import ListViewData from '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import {MorePageDiv} from '../Grid Layout/GridLayoutPage1';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Footer from '../../../Footer';
import BlogsSidebar from '../BlogsSidebar';

const ListView = () => {
    const sliceData=ListViewData.slice(0,6);
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
                        sliceData.map(data=> <div>
                            <img src={data.bgImage} alt="" />
                            <div>
                                <h5>{data.name}</h5>
                                <h3>{data.header}</h3>
                                <p>{data.details}</p>
                                <button>Read More</button>
                            </div>
                        </div>)
                    }

                            <MorePageDiv>
                            <Link to='/list-view'><p>1</p></Link>
                            <Link to='/list-view-page2'><p>2</p></Link>
                            <Link to='/list-view-page3'><p>3</p></Link>
                            <Link to='/list-view-page2'><KeyboardDoubleArrowRightIcon /></Link>
                        </MorePageDiv>
                </ListViewProductLeftDiv>

                {/* Grid Layout Product Right Div */}

                <BlogsSidebar></BlogsSidebar>

            </ListViewProductDiv>

            <Footer></Footer>

        </Container>
    );
};

export default ListView;

const Container=style.div``

/* About Us Div */
export const AboutUsDiv=style.div`
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

export const ListViewProductDiv=style.div`
display:flex;
margin-bottom:50px;
justify-content:space-evenly;
`

/* List View Product Left Div */

export const ListViewProductLeftDiv=style.div`
div{
    display:flex;
    margin-top:30px;
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
        
        @media(max-width:1090px){
            width:250px;
        }
        @media(max-width:965px){
            width:200px;
        }
        
    }
}
`




