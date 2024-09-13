import Image from 'next/image';
import './style.css';

import heisenTrack from './heisenTrackLogo.png';

import truck1 from './hero/truck1.png';
import truck2 from './hero/truck2.png';
import building from './hero/building.png';
import bush from './hero/bush.png';

import shreya from "./members/shreya.jpg";
import aditi from "./members/aditi.jpg";
import abhraneel from "./members/abhraneel.jpg";
import tridip from "./members/tridip.jpg";
import dipayan from "./members/dipayan.jpg";
import pratayan from "./members/pratayan.jpg";

import dashboardImg from './assets/Screenshot 2024-09-11 163535.png';

import crown from './assets/rolesIcon/crown.png';
import factory from './assets/rolesIcon/factory.png';
import medical_services from './assets/rolesIcon/medical_services.png';
import store from './assets/rolesIcon/store.png';
import trolley from './assets/rolesIcon/trolley.png';



export default function HomePage() {
   


  return (<div className='homePage'>
   

    <nav id="free-trial">
      <div className="logo">{/* <i class="ri-bard-fill"></i> */}</div>
      <div className="nav-links">
        <a>Simplify</a>
        <div className="separator" />
        <a>Manage</a>
        <div className="separator" />
        <a>Track</a>
        <div className="separator" />
        <a>Operate</a>
      </div>
      <div className="login">
        {/* <a href="#">Login</a>
        <img src="assets/login.JPG"> */}
      </div>
    </nav>
    <div className="prompt-sec">
      <h1>
        <span className="blueHeading">Blue</span> Stock
        
      </h1>
      <div className="prompt-img">
        
      {/* <div className="shadow"></div> */}
        <div className="slider-container">
          

          <div className="bush">
            <Image src={bush}/>
          </div>  
          <div className="building">
            <Image src={building} />
          </div>
          <div className="truck1 truck">
            <Image src={truck1} />
          </div>
          <div className="truck2 truck">
            <Image src={truck2} />
          </div>


        </div>
        <div className="tabs">
          <a href="" className="active">
            Get Started
          </a>
          <a href="#manage">Manage</a>
          <a href="#">Track</a>
          <a href="#roles">Roles</a>
          <a href="#team-members">About Us</a>
        </div>
      </div>
    </div>
    <div id="manage" className="dashboards">
      <h3>Interractive Dashboards</h3>
      <div className="dashContainer">
        <div className="dashboardImg">
        {/* <Image src={dashboardImg} layout='object-fit'/> */}
        </div>
        <div className="text">
          <p>
            Manage your stock, mantain the supply chain, check order demands and
            delivery status. All at your fingertips.
          </p>
        </div>
      </div>
    </div>
    
    <div className="services" id="roles">
      <div className="header">
        <h3>Roles</h3>
        <p>Blue Stock provides the users with 5 roles hierarchy.</p>
      </div>
      <div className="service-items">
        <div className="item active">
          <div className="title">
            <div className="gradient">
              <Image src={crown}/>
            </div>
            <p>Main Admin</p>
          </div>
          <div className="desc">
            <h5>Admin</h5>
            <p>
              Have a complete top down view of the stock management and track the
              supply chain.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="gradient">
            <Image src={factory}/>
            </div>
            <p>Manufacturer</p>
          </div>
          <div className="desc">
            <h5>Manufacturer</h5>
            <p>Info about manufacturer.</p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="gradient">
            <Image src={trolley}/>
            </div>
            <p>Wholesaler</p>
          </div>
          <div className="desc">
            <h5>Wholesaler</h5>
            <p>Info about wholesaler</p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="gradient">
            <Image src={medical_services}/>
            </div>
            <p>Retailer</p>
          </div>
          <div className="desc">
            <h5>Retailer</h5>
            <p>
              Join a dynamic community of AI experts to share ideas and stay
              updated on trends.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <div className="gradient">
            <Image src={store}/>
            </div>
            <p>Pharmacist</p>
          </div>
          <div className="desc">
            <h5>Pharmacist</h5>
            <p>Info about pharmacist.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div id="team-members" className="showcase">
      <h3>
        This is team <div className="heisenTrack">
            <Image src={heisenTrack} />
        </div>
        </h3>
      <div className="text-sec">
        <p>
          Our team is on a mission to redefine medicine management with innovative
          solutions. By leveraging advanced stock management through intuitive
          dashboards and real-time package tracking, we aim to streamline
          processes, enhance efficiency, and deliver impactful results. Our
          project is about pushing boundaries and setting new standards in
          healthcare technology.
        </p>
        
      </div>
      <div className="image-sec">
        <div className="firstRow">
          <div className="member">
            <div className="memberImage">
              <Image src={shreya}/>
            </div>
            <p>Shreya Sinha</p>
            <span>CSBS 2nd Year</span>
          </div>
          <div className="member">
          <div className="memberImage">
              <Image src={aditi}/>
            </div>
            <p>Aditi Anand</p>
            <span>CSBS 2nd Year</span>
          </div>
          <div className="member">
          <div className="memberImage">
              <Image src={abhraneel}/>
            </div>
            <p>Abhraneel Dhar</p>
            <span>CSBS 2nd Year</span>
          </div>
        </div>
        <div className="secondRow">
          <div className="member">
          <div className="memberImage">
              <Image src={pratayan}/>
            </div>
            <p>Pratayan Bera</p>
            <span>AIML 2nd Year</span>
          </div>
          <div className="member">
          <div className="memberImage">
              <Image src={tridip}/>
            </div>
            <p>Tredip Debnath</p>
            <span>CSDS 2nd Year</span>
          </div>
          <div className="member">
          <div className="memberImage">
              <Image src={dipayan}/>
            </div>
            <p>Dipayan Sen</p>
            <span>CSBS 2nd Year</span>
          </div>
        </div>
      </div>
    </div>


    <div className="video-sec" id="discover">
      <div className="header">
        <p>
          Discover our AI tools—from natural language processing to computer
          vision—that revolutionize your work!
        </p>
        <h3>WHY CHOOSE AIHUB</h3>
      </div>
      <div className="video">
        <img src="assets/footer.JPG" />
        <button>
          <i className="ri-play-fill" />
        </button>
      </div>
    </div>
  </div>
  );
}
