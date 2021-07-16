import React from "react";
import "./App.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from  "./Card4";

const App =()=>{
  return (
    <>
    <nav class="nav">
        <div class="logo">REACT</div>
            <div class="menu">
             <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">LIBRARIES</a></li>
             <li><a href="#">SIGN-UP</a></li>
            </ul>
        </div>
    </nav>
   
  <div class="first">
  <div class="photo">   </div>
  <div class="fo">REACT DEVELOPMENT</div>
  <div class="photo2"></div>
  </div>

  <div class="main">
           <div>
             <Card1/>
           </div>

           <div>
            <Card2 />
           </div>

           <div>
            <Card3 />
          </div>

          <div>
          <Card4 />
          </div>
</div>

<div class="footer">
     <div class="inner">
      <p style={{color: "#999"}}>Randon Section</p>
      <p>Contact Us</p>
      <p>Help Desk</p>
      <p>Achievemts</p>
      <p>Libraries</p>
      <p>Awards</p>
    </div>

    <div class="inner">
      <p style={{color: "#999"}}>Channels</p>
      <p>GitHub</p>
      <p>Stack overflow</p>
      <p>Twitter</p>
      <p>Facebook</p>
    </div>
    
    <div class="inner">
      <p  style={{color: "#999"}}>COMMUNITY</p>
      <p>Code of conduct</p>
      <p>Community Reasourse</p>
    </div>

    <div class="inner">
      <p style={{color: "#999"}}>MORE</p>
      <p>Tutorial</p>
      <p>Blog</p>
      <p>Acknowledgement</p>
      <p>React Native</p>
      <p>Terms</p>
    </div>
</div>
</>
);
};

export default App;

