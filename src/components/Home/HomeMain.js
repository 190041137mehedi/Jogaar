import React from 'react';
import Slider from "./Slider"
import "./homeMain.css"
import Footer from "../Footer/Footer";


// import "./Home.css";
import jafor from "../Images/jafor.png";
import abdullah from "../Images/abdullah.jpg"
import frise from "../Images/frise.png"
import nadia from "../Images/nadia.png"
import mishu from "../Images/mishu.png"
import jewels from "../Images/jewels.png"
import retro from "../Images/retro.png"
import boutique from "../Images/boutique.png"

const Home = ({ imageSrc }) => {
  return (
    <div className='home'>
      <Slider />



      <h1 className='title'>Success Stories</h1>

      <div className='box-item'>
        <div className='box1'>
          <div className='jafor'>
            <img className='jafor' src={jafor} alt="" />
          </div>
          <div className='heading'>
            <h3>Jafor's Story</h3>
          </div>
          How Jogaar helped Abdul ex-Rickshaw Puller Jafor recover from a devestating road accident when all hope seemed...
          <a className='special-font' href="/">read full story</a>
        </div>

        <div className='box2'>
          <div className='frise'>
            <img className='frise' src={frise} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>The Story of Frise</h3>
            </div>
            Materializing the dreams of solvency into his family was a tough task for Faiaz, an university student. So he started to plan on creating a small fast food chain. But he didn’t have much funds...

            <a className='special-font' href="/"> read on</a></div>



          <div className='abdullah'>
            <img className='abdullah' src={abdullah} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Abdullah’s Story</h3>
            </div>
            Scouting Dhaka’s streets trying  to convince uninterested folks to make deals just wasn’t making ends meet for Abdullah...
            <a className='special-font' href="/">read on</a></div>

          <div className='nadia'>
            <img className='nadia' src={nadia} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Nadia’s Bakery</h3>
            </div>
            Nadia used to be a simple housewife.Now she owns one of the largest bakeries in Uttara. While the art of baking came to her naturally, what she lacked was a means to monetize her talent...
            <a className='special-font' href="/">read on</a></div>
        </div>

      </div>


      <div className='heading-grid'>
        <h1 className='featured'>Featured</h1>
        <h1 className='featured'>Recommended</h1>
      </div>

      <div className='box-item'>

        <div className='box1'>
          <div className='jafor'>
            <img className='jafor' src={mishu} alt="" />
          </div>
          <div className='heading'>
            <h3>Mishu's Pottery Business</h3>
          </div>
          <div className='progress-bar2'>
            <div className='progress-complete'></div>
          </div>
          <h2>93% Funded</h2>
          We have a small business for our high-quality pottery products and we are planning to expand it.
          <a className='special-font' href="/">Learn more</a>
          <div classname='options'>
            <a href="/"><button className='back-project'>Back this project</button></a>
          </div>

        </div>

        <div className='box2'>
          <div className='frise'>
            <img className='frise' src={jewels} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Mayer Dowa Jewellery Buisness</h3>
            </div>

            <div className='progress-bar2'>
              <div className='progress-complete-mini-1'></div>
              <h4>10% Funded</h4>
              <button className='small-taka'>&#2547;</button>

            </div>


          </div>



          <div className='abdullah'>
            <img className='abdullah' src={retro} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Retro Cafe</h3>
            </div>
            <div className='progress-bar2'>
              <div className='progress-complete-mini-2'></div>
              <h4>25% Funded</h4>
              <button className='small-taka'>&#2547;</button>

            </div></div>

          <div className='nadia'>
            <img className='nadia' src={boutique} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Untitled Boutique House</h3>
            </div>
            <div className='progress-bar2'>
              <div className='progress-complete-mini-3'></div>
              <h4>5% Funded</h4>
              <button className='small-taka'>&#2547;</button>

            </div></div>
        </div>


      </div>

      <br /><br /><br />
      <div className='faq'>
        <div className='faq-box'>
          <h1>Frequently asked Questions</h1>
          <div className='faq-mini-box'>
            <p className='faq-1'>Who are we?</p>
            <div classname='answer'>
              <p className='faq-2'>We are a crowdfuding platform for small businesses</p>
            </div>

            <p className='faq-1'>How does it work?</p>
            <p className='faq-1'>How can you contribute?</p>

          </div>

          <a className='faq-font' href="/faq">Learn more about FAQs</a>


        </div>
      </div>


      <div>
        <h1 classname='question'>Still Not Convinced? See for yourself
          <a href="../"><button className='question'>Get Started</button></a>
        </h1>
      </div>

      <Footer />

    </div>




  )
}

export default Home;
