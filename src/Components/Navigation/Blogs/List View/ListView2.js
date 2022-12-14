import React from 'react';
import style from 'styled-components';
import Navigation from '../../Navigation';
import { AboutUsDiv, ListViewProductDiv, ListViewProductLeftDiv } from './ListView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import ListViewData from '../../../JSON DATA/Blogs/GridLayoutPage1/GridLayoutPage1.json';
import { MorePageDiv } from '../Grid Layout/GridLayoutPage1';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Footer from '../../../Footer';
import BlogsSidebar from '../BlogsSidebar';

const ListView2 = () => {
    const sliceData=ListViewData.slice(6,12);
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
                            <img src={data.bgImage} alt="" loading="eager" />
                            <div>
                                <h5>{data.name}</h5>
                                <h3>{data.header}</h3>
                                <p>{data.details}</p>
                                <button>Read More</button>
                            </div>
                        </div>)
                    }

                            <MorePageDiv>
                            <Link to='/list-view'><KeyboardDoubleArrowLeftIcon /></Link>
                            <Link to='/list-view'><p>1</p></Link>
                            <Link to='/list-view-page2'><p>2</p></Link>
                            <Link to='/list-view-page3'><p>3</p></Link>
                            <Link to='/list-view-page3'><KeyboardDoubleArrowRightIcon /></Link>
                        </MorePageDiv>
                </ListViewProductLeftDiv>

                {/* Grid Layout Product Right Div */}

                <BlogsSidebar></BlogsSidebar>

            </ListViewProductDiv>

            <Footer></Footer>
            
        </Container>
    );
};

export default ListView2;

const Container=style.div``