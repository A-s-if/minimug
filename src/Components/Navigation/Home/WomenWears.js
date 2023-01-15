import React from 'react';
import Navigation from '../Navigation';
import styled from 'styled-components';

const WomenWears = () => {
    return (
        /* Women Wears Main Div */
        <WomenWearsMainDiv>
            <Navigation></Navigation>

            {/* First Div */}
            <FirstDiv>

            {/* First Left Div */}
                <FirstLeftDiv>
                    <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/1_8cd952d3-98b0-4fe2-a7f0-81c1ebf91b7d.jpg?v=1628328726&width=720" alt="" loading="eager" />
                </FirstLeftDiv>

                {/* First Right Div */}
                <FirstRightDiv>
                    <div>
                    <h1>The Perfect <br />
                        Match</h1>

                    <p>
                    Here is your chance to upgrade your wardrobe <br />
                    with a variation of styles and fits that are both <br />
                    feminine and relaxed.
                    </p>
                    
                    <button>
                    <span></span>
                    Shop Collection
                    </button>
                    </div>
                </FirstRightDiv>
            </FirstDiv>

            {/* The Boutique Style Guide Div */}
            <TheBoutiqueStyleGuideDiv>
                <h1>The boutique style guide</h1>

                {/* The Boutique Style Guide Image Container Div */}
                <TheBoutiqueStyleGuideImageContainerDiv>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0248/3290/1223/products/LM85SU00015GN1GO_1024x1024.jpg?v=1602151614" alt="" />
                            <HideImg src="https://cdn.shopify.com/s/files/1/0248/3290/1223/products/LM85SU00017BK1CM_1024x1024.jpg?v=1602151605" alt="" />
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                </TheBoutiqueStyleGuideImageContainerDiv>
            </TheBoutiqueStyleGuideDiv>
        </WomenWearsMainDiv>
    );
};

export default WomenWears;

/* Women Wears Main Div */
const WomenWearsMainDiv=styled.div``

/* First Div */
const FirstDiv=styled.div`
display:flex;
padding-top:60px;
`

/* First Left Div */

const FirstLeftDiv=styled.div`
margin-left:100px;
img{
    width:45vw;
}
@media(max-width:8860px){
    margin-top:50px;
}
`
/* First Right Div */

const FirstRightDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-left:100px;
p{
    color: rgb(61, 61, 61);
    position:relative;
}

h1{
    font-size:60px;

    @media(max-width:770px){
        font-size:50px;
    }
}

button{
    border:none;
    font-weight:bold;
    cursor:pointer;
    span{
        width:0px;
        height:2px;
        background-color:black;
        position:absolute;
        top:620px;
        transition:1s;
    }
     :hover span{
        width:103px;
    } 
   
}
`

/* The boutique style guide div */

const TheBoutiqueStyleGuideDiv=styled.div``

/* The Boutique Style Guide Image Container Div */

const TheBoutiqueStyleGuideImageContainerDiv=styled.div`

div{
    border:2px solid black;
    img{
        width:230px;
        height:300px;
        :hover HideImg {
            border:2px solid red;
        }
    }
}
`

const HideImg=styled.img`
display:block;
`

