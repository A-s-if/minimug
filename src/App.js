import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Contact1 from './Components/Pages/Contact1';
import Contact2 from './Components/Pages/Contact2';
import FAQs from './Components/Pages/FAQs';
import FindAStore from './Components/Pages/FindAStore';
import MyAccount from './Components/Pages/MyAccount';
import ListView from './Components/Navigation/Blogs/List View/ListView';
import GridLayoutPage1 from './Components/Navigation/Blogs/Grid Layout/GridLayoutPage1';
import GridLayoutPage2 from './Components/Navigation/Blogs/Grid Layout/GridLayoutPage2';
import ListView2 from './Components/Navigation/Blogs/List View/ListView2';
import ListView3 from './Components/Navigation/Blogs/List View/ListView3';
import BlogWithLeftSidebar from './Components/Navigation/Blogs/BlogWithLeftSidebar.js/BlogWithLeftSidebar';
import BlogWithLeftSidebarPage2 from './Components/Navigation/Blogs/BlogWithLeftSidebar.js/BlogWithLeftSidebarPage2';
import BlogWithLeftSidebarPage3 from './Components/Navigation/Blogs/BlogWithLeftSidebar.js/BlogWithLeftSidebarPage3';
import BlogWithRightSidebar from './Components/Navigation/Blogs/BlogWithRightSidebar/BlogWithRightSidebar';
import BlogWithRightSidebarPage2 from './Components/Navigation/Blogs/BlogWithRightSidebar/BlogWithRightSidebarPage2';
import BlogWithRightSidebarPage3 from './Components/Navigation/Blogs/BlogWithRightSidebar/BlogWithRightSidebarPage3';
import SinglePostStyle1 from './Components/Navigation/Blogs/SinglePostStyle1/SinglePostStyle1';
import SinglePostStyle2 from './Components/Navigation/Blogs/SinglePostStyle2/SinglePostStyle2';
import { createContext,useState } from 'react';
import SingleProduct from './Components/Single Product/SingleProduct';


export const Context=createContext();
function App() {
  const [Data,setData]=useState({});
  
  return (
    <div>
      <Context.Provider value={[Data,setData]}>
         
      <Router>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/contact1' element={<Contact1></Contact1>}></Route>
        <Route path='/contact2' element={<Contact2></Contact2>}></Route>
        <Route path='/faqs' element={<FAQs></FAQs>}></Route>
        <Route path='/find-a-store' element={<FindAStore></FindAStore>}></Route>
        <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
        <Route path='/grid-layout' element={<GridLayoutPage1></GridLayoutPage1>}></Route>
        <Route path='/grid-layout-page2' element={<GridLayoutPage2></GridLayoutPage2>}></Route>
        <Route path='/list-view' element={<ListView></ListView>}></Route>
        <Route path='/list-view-page2' element={<ListView2></ListView2>}></Route>
        <Route path='/list-view-page3' element={<ListView3></ListView3>}></Route>
        <Route path='/blog-with-left-sidebar' element={<BlogWithLeftSidebar></BlogWithLeftSidebar>}></Route>
        <Route path='/blog-with-left-sidebar-page2' element={<BlogWithLeftSidebarPage2></BlogWithLeftSidebarPage2>}></Route>
        <Route path='/blog-with-left-sidebar-page3' element={<BlogWithLeftSidebarPage3></BlogWithLeftSidebarPage3>}></Route>
        <Route path='/blog-with-right-sidebar' element={<BlogWithRightSidebar></BlogWithRightSidebar>}></Route>
        <Route path='/blog-with-right-sidebar-page2' element={<BlogWithRightSidebarPage2></BlogWithRightSidebarPage2>}></Route>
        <Route path='/blog-with-right-sidebar-page3' element={<BlogWithRightSidebarPage3></BlogWithRightSidebarPage3>}></Route>
        <Route path='/single-post-style1' element={<SinglePostStyle1></SinglePostStyle1>}></Route>
        <Route path='/single-post-style2' element={<SinglePostStyle2></SinglePostStyle2>}></Route>
        <Route path='/product-details' element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
         
      </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
