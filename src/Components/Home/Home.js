import React from 'react';
import { useState } from 'react';
import style from 'styled-components';
import Footer from '../Footer';
import Navigation from '../Navigation/Navigation';
import SeasonPd from '../../Components/JSON DATA/Home/SeasonCollection.json';
import EastIcon from '@mui/icons-material/East';
const Home = () => {

    const [boutiqueFirstImage,setBoutiqueFirstImage]=useState(true);
    const [boutiqueSecoundImage,setBoutiqueSecoundImage]=useState(true);
    const [boutiqueThirdImage,setBoutiqueThirdImage]=useState(true);
    const [boutiqueForthImage,setBoutiqueForthImage]=useState(true);
    const [boutiqueFifthImage,setBoutiqueFifthImage]=useState(true);
    const [boutiqueSixthImage,setBoutiqueSixthImage]=useState(true);
    const [boutiqueSeventhImage,setBoutiqueSeventhImage]=useState(true);
    const [boutiqueEighthImage,setBoutiqueEighthImage]=useState(true);
    const [boutiqueNinethImage,setBoutiqueNinethImage]=useState(true);
    const [boutiqueTenthImage,setBoutiqueTenthImage]=useState(true);
    return (
        <Container>
            <Navigation></Navigation>

                {/* First Div */}
            <FirstDiv>
                <FirstLeftDiv>
                    <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/1_8cd952d3-98b0-4fe2-a7f0-81c1ebf91b7d.jpg?v=1628328726&width=720" alt="" />
                </FirstLeftDiv>

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

                {/* Season Collection Div */}

                <SeasonCollectionDiv>
                    <h1>Season Collection</h1>
                    <SeasonCollectionImageContainerDiv>

                {
                    SeasonPd.map(pd=><SeasonCollectionImageSubDiv>
                        <SeasonCollectionImageDiv  style={{
                            backgroundImage:`url(${pd.bgImage})`
                        }}>
                            <h2>{pd.pdName}</h2>
                            <h3>{pd.items}</h3>
                            <ArrowIconDiv>
                            <EastIcon></EastIcon>
                            </ArrowIconDiv>
                            

                        </SeasonCollectionImageDiv>
                    </SeasonCollectionImageSubDiv>)
                }

                    </SeasonCollectionImageContainerDiv>

</SeasonCollectionDiv>

                


                {/* Boutique Style Div */}

            <BoutiqueStyleDiv>
                <p>The boutique style guide</p>

                <BoutiqueImageDiv>
                <BoutiqueFirstImage>
                    {
                        boutiqueFirstImage? <img src="https://cdn.shopify.com/s/files/1/0248/3290/1223/products/LM85SU00015GN1GO_1024x1024.jpg?v=1602151614" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0248/3290/1223/products/LM85SU00017BK1CM_1024x1024.jpg?v=1602151605" alt="" />
                    }
                    
                    <h4>Rounded Sunglasses</h4>
                    <p>$8.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueFirstImage(true)} style={{
                        backgroundColor:'rgb(127, 183, 126)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueFirstImage(false)} style={{
                        backgroundColor:'rgb(50, 50, 50)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueFirstImage>

                <BoutiqueSecondImage>
                    {
                        boutiqueSecoundImage? <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2Fb6%2Fc2b6c7a72caadaf1bd38ae502e5ee412368822f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_shirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" /> : <img src="https://img.shopstyle-cdn.com/sim/47/e1/47e15c621fd44440a15627128567a286_best/frankie-shop-lui-organic-cotton-poplin-shirt-pink.jpg" alt="" />
                    }
                    
                    <h4>Linen-blend Shirt</h4>
                    <p>$17.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueSecoundImage(true)} style={{
                        backgroundColor:'rgb(127, 188, 210)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueSecoundImage(false)} style={{
                        backgroundColor:'rgb(255, 217, 192)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueSecondImage>

                <BoutiqueThirdImage>
                    {
                        boutiqueThirdImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/54_8558553c-a9dd-4474-bc2b-6707343dacbe.jpg?v=1628348240&width=493" alt="" /> : <img src="https://media.vogue.fr/photos/620babf0ac49caf24d57d9b3/master/w_1280,c_limit/agolde.jpg" alt="" />
                    }
                    
                    <h4>Boxy Denim Jacket</h4>
                    <p>$25.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueThirdImage(true)} style={{
                        backgroundColor:'rgb(127, 188, 210)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueThirdImage(false)} style={{
                        backgroundColor:'rgb(232, 249, 253)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueThirdImage>

                <BoutiqueForthImage>
                    {
                        boutiqueForthImage? <img src="https://onceit-products.imgix.net/49aab720-e8b9-11ea-865c-bd929f55eeab.jpg?w=1800&h=1800&fit=clip&fm=jpg&q=75&auto=format%2Ccompress" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0088/9510/3012/products/moana-road-sunglasses-razzle-dazzle-brown-3671-funky-gifts-nz-3_400x_59fb786c-9964-4c65-a0cc-c174f3d89947_360x.webp?v=1648520952" alt="" />
                    }
                    
                    <h4>Polarised Sunglasses</h4>
                    <p>$28.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueForthImage(true)} style={{
                        backgroundColor:'rgb(16, 15, 15)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueForthImage(false)} style={{
                        backgroundColor:'rgb(242, 211, 136)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueForthImage>

                <BoutiqueFifthImage>
                    {
                        boutiqueFifthImage? <img src="https://cdn.shopify.com/s/files/1/0602/4170/7230/products/RetroLesBlackfront_360x.png?v=1655255824" alt="" /> : <img src="https://new.casademoda.cl/wp-content/uploads/2021/12/product_fashion_29_b_1-570x760.jpg" alt="" />
                    }
                    
                    <h4>Rounded Sunglasses</h4>
                    <p>$8.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueFifthImage(true)} style={{
                        backgroundColor:'black',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueFifthImage(false)} style={{
                        backgroundColor:'rgb(164, 126, 59)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueFifthImage>

                <BoutiqueSixthImage>
                    {
                        boutiqueSixthImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/45.jpg?v=1628348202&width=493" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/45c.jpg?v=1628348202" alt="" />
                    }
                    
                    <h4>Quilted Shopper </h4>
                    <p> $22.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueSixthImage(true)} style={{
                        backgroundColor:'rgb(235, 199, 232)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueSixthImage(false)} style={{
                        backgroundColor:'rgb(165, 241, 233)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueSixthImage>

                <BoutiqueSeventhImage>
                    {
                        boutiqueSeventhImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/43_cd75fbff-17e5-443f-9c4b-53ca3906de5c.jpg?v=1628348187" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/43d_b58089d0-afcd-4866-92a6-3891d270895d.jpg?v=1628348187&width=493" alt="" />
                    }
                    
                    <h4>Light Denim Jacket </h4>
                    <p> $26.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueSeventhImage(true)} style={{
                        backgroundColor:'rgb(127, 188, 210)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueSeventhImage(false)} style={{
                        backgroundColor:'black',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueSeventhImage>

                <BoutiqueEightImage>
                    {
                        boutiqueEighthImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/42.jpg?v=1628348181" alt="" /> : <img src="https://new.casademoda.cl/wp-content/uploads/2021/12/https://cdn.shopify.com/s/files/1/0591/1350/4958/products/42d.jpg?v=1628348181&width=493" alt="" />
                    }
                    
                    <h4>Quilted Shoulder Bag </h4>
                    <p>$22.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueEighthImage(true)} style={{
                        backgroundColor:'white',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueEighthImage(false)} style={{
                        backgroundColor:'rgb(165, 241, 233)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueEightImage>

                <BoutiqueNinethImage>
                    {
                        boutiqueNinethImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/38_4b6920a7-196b-49a2-952d-2295e64a9b71.jpg?v=1628348168" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/38d_a370d3b4-e3dc-4171-982f-c9ed2d5c2538.jpg?v=1628348168&width=493" alt="" />
                    }
                    
                    <h4>High Ankle Jeans</h4>
                    <p>$302.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueNinethImage(true)} style={{
                        backgroundColor:'rgb(127, 188, 210)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueNinethImage(false)} style={{
                        backgroundColor:'rgb(39, 123, 192)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueNinethImage>

                <BoutiqueTenthImage>
                    {
                        boutiqueTenthImage? <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/35h.jpg?v=1628348161" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/products/35d.jpg?v=1628348161&width=493" alt="" />
                    }
                    
                    <h4>Denim Jacket</h4>
                    <p>$39.00</p>
                    <ChoiceColorDiv>
                    <div onClick={()=>setBoutiqueTenthImage(true)} style={{
                        backgroundColor:'rgb(127, 188, 210)',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    <div onClick={()=>setBoutiqueTenthImage(false)} style={{
                        backgroundColor:'black',
                        border:'2px solid black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%',
                    }}></div>
                    </ChoiceColorDiv>
                </BoutiqueTenthImage>
                </BoutiqueImageDiv>

                    <button>Load More</button>

            </BoutiqueStyleDiv>

            {/* Service Div */}

            <ServicesDiv>

                <FreeShippingDiv>
                    <ServicesIconDiv><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/1_292dc3a2-215e-4ce3-afba-7b00845e162f.png?v=1628328725" alt="" /></ServicesIconDiv>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Tell about your service.</p>
                    </div>
                </FreeShippingDiv>

                <MoneyGuaranteeDiv>
                    <ServicesIconDiv><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/2_4ab3f0fa-7ff5-4f0d-ba62-503f7f2fc192.png?v=1628328726" alt="" /></ServicesIconDiv>
                    <div>
                        <h3>Money Guarantee</h3>
                        <p>Within 30 days for an exchange.</p>
                    </div>
                </MoneyGuaranteeDiv>

                <OnlineSupport>
                    <ServicesIconDiv><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/3_6044e4d8-7c0b-4f31-aac4-89baf1f7a0a9.png?v=1628328727" alt="" /></ServicesIconDiv>
                    <div>
                        <h3>Online Support</h3>
                        <p>24 hours a day, 7 days a week.</p>
                    </div>
                </OnlineSupport>

                <FlexiblePayment>
                    <ServicesIconDiv><img src="https://cdn.shopify.com/s/files/1/0591/1350/4958/files/4_2f378f25-cac8-415a-b98b-e491bd3fd4f3.png?v=1628328727" alt="" /></ServicesIconDiv>
                    <div>
                        <h3>Flexible Payment</h3>
                        <p>Pay with Multiple Credit Cards.</p>
                    </div>
                </FlexiblePayment>

            </ServicesDiv>
                    {/* Footer */}
            <Footer></Footer>
        </Container>
    );
};

export default Home;
const Container=style.div``
/* First Div */
const FirstDiv=style.div`
display:flex;
padding-top:60px;
`
const FirstLeftDiv=style.div`
margin-left:100px;
img{
    width:45vw;
}
@media(max-width:8860px){
    margin-top:50px;
}
`
const FirstRightDiv=style.div`
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
        top:590px;
        transition:1s;
    }
     :hover span{
        width:103px;
    } 
   
}
`
/* Season Collection Div */
const SeasonCollectionDiv=style.div`
padding:20px 0;
display:flex;
flex-direction:column;
padding:50px 0;
h1{
    font-size:35px;
    position:relative;
    margin:20px 0;
    left:20px;
}

`

const SeasonCollectionImageContainerDiv=style.div`
display:flex;
width:100vw;
justify-content:space-evenly;
`

const SeasonCollectionImageSubDiv=style.div`
height:340px;
width:250px;
display: flex;
align-items: center;

@media (max-width:1225px){
    width:200px;
    height:300px;
}
`

const SeasonCollectionImageDiv=style.div`
height:330px;
width:240px;
background-size:cover;
background-position:center;
transition:0.3s;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
:hover{
    height:340px;
    width:250px;
}

h2{
    font-size:25px;
    margin:220px 0px 0px 10px;
    @media (max-width:1225px){
        font-size:20px;
    }
}
h3{
    font-size:15px;
    margin:0px 0px 0px 10px;
}
}

@media(max-width:1295px){
    width:200px;
    height:300px;
    :hover{
        width:210px;
        height:310px;
    }
}
@media(max-width:1115px){
    width:170px;
    height:270px;
    :hover{
        width:180px;
        height:280px;
    }
}
@media(max-width:940px){
    h2{
        margin:190px 0px 0px 10px;
    }
}
@media(max-width:935px){
    width:130px;
    height:220px;
    :hover{
        width:140px;
        height:230px;
    }
}
@media(max-width:750px){
    width:90px;
    height:180px;
    :hover{
        width:100px;
        height:190px;
    }
}
`

const ArrowIconDiv=style.div`
width:40px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition:0.3s;
position:relative;
left:170px;
bottom:45px;
:hover{
    color:white;
    background-color:black;
    width:45px;
    height:45px;
}

@media(max-width:1295px){
    left:140px;
}
@media(max-width:1115px){
    left:110px;
}
@media(max-width:940px){
    left:90px;
}
`

/* Boutque Div */
const BoutiqueStyleDiv=style.div`
display:flex;
flex-direction:column;
align-items:center;
p{
    font-size:45px;
    margin:20px 0;
}
button{
    border:2px solid black;
    width:140px;
    font-size:18px;
    padding:5px 0;
    cursor:pointer;
    transition:0.5s;
    border-radius:10px;
    margin:50px 0;
    :hover{
        font-size:20px;
        color:white;
        background-color:black;
        padding:7px 0;
        border:none;
    }
}
`
const BoutiqueImageDiv=style.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
`

const BoutiqueFirstImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueSecondImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueThirdImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueForthImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueFifthImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueSixthImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueSeventhImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueEightImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueNinethImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const BoutiqueTenthImage=style.div`
cursor:pointer;
img{
    width:230px;
    height:300px;
}
h4{
    color: rgb(26, 26, 26);
}
div{
    margin:0 5px;
    cursor:pointer;
}
`
const ChoiceColorDiv=style.div`
display:flex;
`

/* Services Div */

const ServicesDiv=style.div`
display:flex;
justify-content:space-evenly;
margin:50px 0;
`

const FreeShippingDiv=style.div`
display:flex;
width:230px;
justify-content:space-between;
align-items:center;
p{
    color:rgb(63, 62, 62);
}

@media(max-width:1175px){
    h3{
        font-size:18px;
    }
    p{
        font-size:15px;
    }
}
@media(max-width:910px){
    h3{
        font-size:15px;
    }
    p{
        font-size:12px;
    }
}
`

const MoneyGuaranteeDiv=style.div`
display:flex;
width:300px;
justify-content:space-between;
align-items:center;
p{
    color:rgb(63, 62, 62);
}

@media(max-width:1175px){
    h3{
        font-size:18px;
    }
    p{
        font-size:15px;
    }
}
@media(max-width:910px){
    h3{
        font-size:15px;
    }
    p{
        font-size:12px;
    }
}
`

const OnlineSupport=style.div`
display:flex;
width:300px;
justify-content:space-between;
align-items:center;
p{
    color:rgb(63, 62, 62);
}

@media(max-width:1175px){
    h3{
        font-size:18px;
    }
    p{
        font-size:15px;
    }
}
@media(max-width:910px){
    h3{
        font-size:15px;
    }
    p{
        font-size:12px;
    }
}
`

const FlexiblePayment=style.div`
display:flex;
width:300px;
justify-content:space-between;
align-items:center;
p{
    color:rgb(63, 62, 62);
}
@media(max-width:1175px){
    h3{
        font-size:18px;
    }
    p{
        font-size:15px;
    }
}
@media(max-width:910px){
    h3{
        font-size:15px;
    }
    p{
        font-size:12px;
    }
}
`

const ServicesIconDiv=style.div`
img{
    width:40px;
}

@media(max-width:1175px){
    img{
        width:30px;
    }
}
`