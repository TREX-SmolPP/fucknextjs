import Image from 'next/image';
import './style.css'
import img1 from "./image-1.jpg";
import img2 from "./image-2.jpg";
import img3 from "./image-3.jpg";
import img4 from "./image-4.jpg";


export default function HomePage() {
   
  return (<>
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
        <div className="slider-container">
          <div className="slider-wrapper">
            <Image className="obama" src={img1} alt=""/>
          </div>
            {/* <Image className="obama" src={img2} />
            <Image className="obama" src={img3} alt=""/>
            <Image className="obama" src={img4} alt=""/>             */}
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
          <img src="\Screenshot 2024-09-11 163535.png" alt="" />
        </div>
        <div className="text">
          <p>
            Manage your stock, mantain the supply chain, check order demands and
            delivery status. All at your fingertips.
          </p>
        </div>
      </div>
    </div>
    <div id="team-members" className="showcase">
      <h3>
        This is team <span className="blueHeading">Blue</span> Stock
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
            <img src="members\shreya.JPG" />
            <p>Shreya Sinha</p>
            <span>CSBS 2nd Year</span>
          </div>
          <div className="member">
            <img src="members\aditi.jpg" />
            <p>Aditi Anand</p>
            <span>CSBS 2nd Year</span>
          </div>
          <div className="member">
            <img src="members\abhraneel.jpg" />
            <p>Abhraneel Dhar</p>
            <span>CSBS 2nd Year</span>
          </div>
        </div>
        <div className="secondRow">
          <div className="member">
            <img src="members\pratayan.jpg" />
            <p>Pratayan Bera</p>
            <span>AIML 2nd Year</span>
          </div>
          <div className="member">
            <img src="members\tridip.jpg" />
            <p>Tridip Debnath</p>
            <span>CSDS 2nd Year</span>
          </div>
          <div className="member">
            <img src="members\dipayan.jpg" />
            <p>Dipayan Sen</p>
            <span>CSBS 2nd Year</span>
          </div>
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
              <img src="assets\rolesIcon\crown.png" alt="" />
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
              <img src="assets\rolesIcon\factory.png" alt="" />
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
              <img src="assets\rolesIcon\trolley.png" alt="" />
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
              <img src="assets\rolesIcon\medical_services.png" alt="" />
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
              <img src="assets\rolesIcon\store.png" alt="" />
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
  </>
  );
}
