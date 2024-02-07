import './App.css';
import { TfiEmail,TfiGoogle } from "react-icons/tfi";
import { FaCertificate , FaFacebookF,FaTwitter,FaLinkedin,FaYoutube,FaWhatsapp,FaStar,FaStarHalfAlt ,FaUniversity,FaHandPointRight } from "react-icons/fa";
import { TiSocialInstagram} from "react-icons/ti";

import ss from './image/logo.svg'
import ss2 from './image/logo2.svg'
import ee from './image/1.jpeg'
import i1 from './image/1.webp'
import i2 from './image/2.webp'
import i3 from './image/3.jpg'
import i4 from './image/4.webp'
import i5 from './image/5.webp'
import i6 from './image/6.jpg'
import i7 from './image/kex.webp'
import i8 from './image/ha.jpg'
import i9 from './image/8.jpg'
import i10 from './image/10.webp'
import i11 from './image/ca.PNG'
import i12 from './image/12.jpg'
import i13 from './image/1.png'
import i14 from './image/2.png'
import i15 from './image/3.png'
import i16 from './image/4.png'
import i17 from './image/5.png'
import i18 from './image/6.png'


function App()
{
  return(
    <>
    {/*  Top nav bar */}
    <div className=' top-nav' >
      <div className=' container ' >
        <div className='d-flex ' >
          <div className='left d-flex '>
            <div><i><TfiEmail></TfiEmail></i>info@cdmi.in</div> 
            <div><i><FaCertificate/></i> Verify Certificate</div>
          </div>
          <div className='center '>
              <div>HAVE ANY QUESTION ? +91 90333 16003</div>
          </div>
          <div className='right '>
              <div className='d-flex'>
                <i><FaFacebookF /></i><i><FaTwitter /></i><i><TfiGoogle /></i><i><FaLinkedin /></i><i><TiSocialInstagram /></i><i><FaYoutube /></i><i><FaWhatsapp /></i>
              </div>
          </div>
        </div>
      </div>
    </div>

    {/*  menu bar */}

    

    <div className=' menu-bar' >
      <div className=' container ' >
        <div className='d-flex ' >
          <div className='logo'>
           <img src={ss}></img>
          </div>
          <div className='menu d-flex'>
            <h4>HOME</h4>
            <h4>COURSES</h4>
            <h4>ACTIVITIES</h4>
            <h4>BLOG</h4>
            <h4>KNOW US</h4>
            <h4>GET IN TOUCH</h4>
            <h4>STUDENT ZONE</h4>
          </div>
            
        </div>
      </div>
    </div>
    <div className='hi'>
      <img src={ee}></img>
    </div>


    {/* offered courses */}

    <div className='container'>
      <div className='course space'>
          <h3>Creative Course</h3>
          <h1>OFFERED COURSES</h1>

          <div className='row d-flex'>
            <div className='box'>
              <div className='img'>
                <img src={i1}></img>
                <div className='list'>
                  <h2>Development Courses</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <button>Know More..!</button></p>
                </div>  
              </div>
            </div>
            <div className='box'>
              <div className='img'>
                <img src={i2}></img>
                <div className='list'>
                  <h2>Design Courses</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><button>Know More..!</button></p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='img'>
                <img src={i3}></img>
                <div className='list'>
                  <h2>Programming IT</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><button>Know More..!</button></p>
                </div>
              </div>
            </div>

            
          </div>
          <div className='row d-flex space'>
            <div className='box'>
              <div className='img'>
                <img src={i4}></img>
                <div className='list'>
                  <h2>Development Courses</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <button>Know More..!</button></p>
                </div>  
              </div>
            </div>
            <div className='box'>
              <div className='img'>
                <img src={i5}></img>
                <div className='list'>
                  <h2>Design Courses</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><button>Know More..!</button></p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='img'>
                <img src={i6}></img>
                <div className='list'>
                  <h2>Programming IT</h2><hr></hr>
                  <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><button>Know More..!</button></p>
                </div>
              </div>
            </div>
            
          </div>
          <div className='view'><button>View All Course</button></div>
      </div>
    </div>

    {/* About Us */}

    <div className=''>
      <div className='about d-flex'>
        <div className='a-one'>
          <h1>ABOUT US</h1>
          <h2>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h2>
          <h3>Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. 
          Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</h3>
          <h4><button>Enroll Now..!</button></h4>
        </div>

        <div className='a-two'>
          <img src={i7}></img>
        </div>
      </div>
    </div>

    {/* happy student */}

    <div className='happy-s'>
      <img src={i8}>
      </img>
      <div className='data'>
        <div className='container'>
          <div className='p1'>
            <h2>18000+</h2>
            <h3>HAPPY STUDENTS</h3>
          </div>
          <div className='p2'>
            <h2>10+</h2>
            <h3>CERTIFICATION APPROVAL</h3>
          </div>
          <div className='p3'>
            <h2>100+</h2>
            <h3>CERTIFIED TEACHERS</h3>
          </div>
          <div className='p4'>
            <h2>12000+</h2>
            <h3>STUDENTS PLACED</h3>
          </div>
        </div>
      </div>
    </div>
   

    {/* Alumni speak */}

    <div className='container'>
      <div className='speak d-flex'>
        <div className='s-one'>
          <h1>HAPPY STUDENTS </h1>
          <h2>ALUMNI SPEAK</h2>
          <img src={i11}></img>
          <p>I have joined creative multimedia institute for UI/UX Design course two months ago. Had a really great experience in learning the course. I am thankful to the sir who taught us really well with different approaches. This learning process gave me confidence on how to explore myself better with higher level of understanding. Thank you creative multimedia.</p>
          <div className='ee'>
            <img src={i12}></img>
            <div>
              <h1>KOLADIYA MANSi</h1>
              <div className='d-flex'>
                <h2>UI/UX Designer </h2>
                <h3> @ patoliya infotech</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='s-two'>
          <img src={i10}></img>
        </div>
      </div>
    </div>

{/* why choice creative */}

    <div className='hello  '>
      <div className='container'>
      <div className=' choice  space '>
        <h1>READ OUR DIFFERENCE</h1>
        <h2>WHY CHOOSE CREATIVE</h2>
        <div className='crow-1 '>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Industry Experts As Trainers</h1>
            <h2>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Latest Curriculum</h1>
            <h2>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Latest Technology</h1>
            <h2>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</h2>
          </div>
          
        </div>
        <div className='crow-1 '>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Interview Assistance</h1>
            <h2>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Free Upgradation</h1>
            <h2>We will be provided free upgradation for any newer version of the course you have.</h2>
          </div>
          <div className='bo1 '>
            <img src={i12}></img>
            <h1>Lifetime Support</h1>
            <h2>We will provide you lifetime support on all the courses you learned from us.</h2>
          </div>
          
        </div>
      </div>
      </div>
    </div>

    {/* student placement */}

    <div className='container'>
      <div className='place'>
        <h1>STUDENT PLACEMENT</h1>
        <h2> OUR RECRUITMENT PARTNERS</h2>
        <div className='job d-flex'>
          <img src={i13}></img>
          <img src={i14}></img>
          <img src={i15}></img>
          <img src={i16}></img>
          <img src={i17}></img>
          <img src={i18}></img>
        </div>
      </div>
    </div>

    {/* OUR DEMAND */}

    <div className='container demand'>
      <h2>Our Demanded Course - </h2>
      <div className=''>
        <button>C++ Programming Language Training Institute</button>
        <button>Latest technology course training institute in varachha</button>
        <button>Autocad training institute in surat</button>
        <button>Laravel training institute in Mota Varachha</button>
        <button>computer institutes in yogichowk</button>
        <button>Maya animation training institute</button>
        <button>Advance Unity 3d training institute in surat</button>
        <button>Game design training institute in varachha</button>
        <button>Graphics design training in varachha</button>
        <button>Maya 3d animation training institute in surat</button>
        <button>3ds max civil training course</button>
        <button>Civil engineering training institute in varachha</button>

      </div>
      <h1>Show more...</h1>
    </div>

    {/* Futter */}
    <div className='futter'>
    <div className='container'>
      <div className='foo d-flex'>
        <div className='f1'>
          <img src={ss2}></img>
          <h1>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</h1>
          <h2>FOLLOW US ON</h2>
          <div className='icon'>
              <i><FaFacebookF /></i><i><FaTwitter /></i><i><TfiGoogle /></i><i><FaLinkedin /></i><i><TiSocialInstagram /></i><i><FaYoutube /></i><i><FaWhatsapp /></i>
          </div>
        </div>
        <div className='f2'>
          <h1>FEATURE LINKS</h1>
          <h2><FaHandPointRight /> About Us</h2>
          <h2><FaHandPointRight /> Blogs</h2>
          <h2><FaHandPointRight /> Join Us</h2>
          <h2><FaHandPointRight /> Company Login</h2>
          <h2><FaHandPointRight /> Certificate Verification</h2>
        </div>
        <div className='f3'>
          <h1>CONTACT US</h1>
          <h2>HEAD OFFICE - YOGICHOWK</h2>
          <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,</p>
          <p> Varachha, Surat.</p>
          <div className='mo'>MO.<h3>+91 69594 98752</h3></div>
          <h4>OTHER BRANCHES</h4>
          <h5><FaUniversity /> Katargam</h5>
          <h5><FaUniversity />  Mota Varachha</h5>
          <h5><FaUniversity /> Adajan</h5>
          <h5><FaUniversity /> Navsari</h5>
        </div>
      </div>
    </div>
    </div>

    <div className='last'>
      <h1>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h1>
    </div>


    </>
  )
}

export default App;
