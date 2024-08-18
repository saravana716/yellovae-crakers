import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import BannerImg from '../../Assets/HomeBannerImg.jpg'
import Card from '../TopProductCard/Card'
import ProductOfferLogo from '../../Assets/ProductCardLogo.svg'
import ProductImg from '../../Assets/cracker.png'
import CricketImg from '../../Assets/Cricket-PNG-Free-Download.png'
import CategoryImg from '../../Assets/catgotiesImg.png'
import { TbTruckDelivery } from "react-icons/tb";
import ServiceImg from '../../Assets/ServiceImg3.png'
import Stumping from '../../Assets/stump gif_7.gif'
import mycri from "../../Assets/clipart-fire-diwali-5.png"
import mycri1 from "../../Assets/Diwali-Firecrackers-PNG-Image-Free-Download (3).png"
import { FiChevronRight } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import DhoniImg from '../../Assets/download (1).png'
import ChooseImg from '../../Assets/chooseImg.png'
import ChooseImg1 from '../../Assets/jaddurunout.gif'
import ChooseImg2 from '../../Assets/Sequence 03.gif'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoDiamondSharp } from "react-icons/io5";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { RiStarSFill } from "react-icons/ri";
import DiwaliImg from '../../Assets/Untitled (6).svg'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import myvideo from "../../Assets/crackers.mp4"
const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Banner/>
      
        <section className='top-order-section'>
            <div className='header-container'>
                          <div className='cy'>
                          <div className='header-menu-container'>
                    <h1>Top <span>Products</span></h1>
                    <p>At Yellovae Crackers, we turn every celebration into a dazzling spectacle. Specializing in high-quality fireworks and pyrotechnic displays, we bring the magic of lights and colors to your special moments. With a legacy of excellence and safety, our products are designed to create unforgettable experiences for you and your loved ones.

</p>
                </div>
                <img className='cric-img' src={CricketImg} alt="" />

                          </div>
                            </div>
            <div className='product-container'>
                <Card 
                logo = {ProductOfferLogo}
                image = {ProductImg}
                title = "10 cm Parrot / Laxmi Deluxe 4"
                />
                <Card 
                logo = {ProductOfferLogo}
                image = {ProductImg}
                title = "10 cm Parrot / Laxmi Deluxe 4"
                />
                <Card 
                logo = {ProductOfferLogo}
                image = {ProductImg}
                title = "10 cm Parrot / Laxmi Deluxe 4"
                />
                <Card 
                logo = {ProductOfferLogo}
                image = {ProductImg}
                title = "10 cm Parrot / Laxmi Deluxe 4"
                />
            </div>
        </section>
        <section className='categories-section'>
            <h1>Top <span>Products</span></h1>
            <div className='categories-card-container'>
                <div className='categories-card'>
                    <img src={CategoryImg} alt="" />
                    <p>Kids</p>
                </div>
                <div className='categories-card'>
                    <img src={CategoryImg} alt="" />
                    <p>Kids</p>
                </div>
                <div className='categories-card'>
                    <img src={CategoryImg} alt="" />
                    <p>Kids</p>
                </div>
                <div className='categories-card'>
                    <img src={CategoryImg} alt="" />
                    <p>Kids</p>
                </div>
                <div className='categories-card'>
                    <img src={CategoryImg} alt="" />
                    <p>Kids</p>
                </div>
            </div>
        </section>
        <section className='serices-section'>
            <h1>Our <span>Services</span></h1>
            <div className='service-card-container'>
                <div className='service-card'>
                    <div className='main-service-card'>
                        <img src={Stumping} alt="" />
                        <div className='service-menus'>
                            <TbTruckDelivery className='service-icon'/>
                            <h4>Super Fast Delivery</h4>
                            <p>Experience delivery as swift as Dhoni’s stumping! Our express shipping ensures your firecrackers arrive lightning-fast, ready to light up your celebrations. Just like Dhoni’s quick reflexes, we get your fireworks to you fast for the perfect spark!</p>
                        </div>
                    </div>  
                    <div className='learnmore-container'>
                        <p>Learn More</p>
                        <FiChevronRight className='arrow-right'/>
                    </div>
                </div>
                <img className='sub-images' src={DhoniImg} alt="" />
            </div>
            <div className='service-card-2'>
<div className='cridiv'>
<img src={mycri} alt="" className='cri' />
</div>                
<div className='service-card'>
                    <div className='main-service-card'>
                        <img src={ChooseImg2} alt="" />
                        <div className='service-menus'>
                            <FaBoxOpen className='service-icon'/>
                            <h4>Best Packaging</h4>
                            <p>"Just like the safe hands of Suresh Raina catching a flying ball, we pack our firecrackers with precision and care to ensure your celebrations are both spectacular and secure."</p>
                        </div>
                    </div>  
                    <div className='learnmore-container'>
                        <p>Learn More</p>
                        <FiChevronRight className='arrow-right'/>
                    </div>
                </div>
            </div>
            <div className='service-card-container'>
                <div className='service-card'>
                    <div className='main-service-card'>
                        <img src={ChooseImg1} alt="" />
                        <div className='service-menus'>
                            <Ri24HoursFill className='service-icon'/>
                            <h4>24 x 7 Service</h4>
                            <p>Get 24/7 support as reliable as Jadeja’s all-rounder skills. Whether it's day or night, we're always here to help—just like Jadeja, ready to deliver at any moment!</p>
                        </div>
                    </div>  
                    <div className='learnmore-container'>
                        <p>Learn More</p>
                        <FiChevronRight className='arrow-right'/>
                    </div>
                </div>
                <div className='cridiv'>
<img src={mycri1} alt="" className='cri1' />
</div>  
            </div>
        </section>
        <section className='why-choose-us-section'>
            <img className='choose-img' src={ChooseImg} alt="" />
            <div className='choose-us-menus'> 
                <h1>Why <span>Choose Us</span></h1>
                <div className='choose-content-container'>
                    <div className='bg-img'>
                       <HiOutlineLightBulb className='choose-icons'/>
                    </div>
                    <div className='innovative'>
                        <h4>Innovative Range of Crackers</h4>
                        <p>We offer crackers that redefine fireworks with inventive designs and dazzling effects.</p>
                    </div>
                </div>
                <div className='choose-content-container'>
                    <div className='bg-img'>
                       <IoDiamondSharp className='choose-icons'/> 
                    </div>
                    <div className='innovative'>
                        <h4>Supreme Quality, Affordable Prices</h4>
                        <p>All our products are of supreme quality and are available at affordable prices to everyone.</p>
                    </div>
                </div>
                <div className='choose-content-container'>
                    <div className='bg-img'>
                       <MdOutlineThumbUpOffAlt className='choose-icons'/>
                    </div>
                    <div className='innovative'>
                        <h4>Best Fireworks Brand in India</h4>
                        <p>We are the best fireworks brand in fountains & children fancy category with large varieties.</p>
                    </div>
                </div>
                <div className='choose-content-container'>
                    <div className='bg-img'>
                       <LuHeartHandshake className='choose-icons'/>
                    </div>
                    <div className='innovative'>
                        <h4>Customer Satisfaction:</h4>
                        <p>We prioritize your satisfaction, ensuring the best shopping experience possible.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-us-section'>
            <div className='sub-about-us'>
                <h1>What People say<span>  About Us </span></h1>
                <div className='about-us-boxes-container'>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box about-us-box2'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='about-us-box'>
                        <p>Septmber 10,2024</p>
                        <h4>Super fast delivery and excellent variety. The firecrackers added so much fun to our festival. Highly recommended</h4>
                        <div className='profile-sec'>
                            <div className='profile'>
                                <p>B</p>
                            </div>
                            <div className='name-details'>
                                <h4>BALAGANESH K</h4>
                                <div className='stars-container'>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                    <RiStarSFill className='star'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

<div className='videosection'>
    <div className='videosec'>
        <div className='videosecleft'>
<iframe src={myvideo} frameborder="0"></iframe>
        </div>
        <div className='videosecright'>
            <div className='videotop'>
                <h3>Unique Crackers from Sivakasi Yellovae Crackers</h3>
            </div>
            <div className='videobottom'>
                <div className='videocon'>
                    <img src={mycri1} alt="" />
                    <div className='videocon1'>
                        <h4>Unique Crackers from Sivakasi Yellovae Crackers</h4>
                    </div>
                    <button>View</button>
                </div>
                <div className='videocon'>
                    <img src={mycri1} alt="" />
                    <div className='videocon1'>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cumque.</h4>
                    </div>
                    <button>View</button>

                </div>
                <div className='videocon'>
                    <img src={mycri1} alt="" />
                    <div className='videocon1'>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cumque.</h4>
                    </div>
                    <button>View</button>

                </div>
                <div className='videocon'>
                    <img src={mycri1} alt="" />
                    <div className='videocon1'>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cumque.</h4>
                    </div>
                    <button>View</button>
                </div>
                <div className='videocon'>
                    <img src={mycri1} alt="" />
                    <div className='videocon1'>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cumque.</h4>
                    </div>
                    <button>View</button>

                </div>

            </div>
        </div>
    </div>
</div>

        <img className='diwali-img' src={DiwaliImg} alt="" />
        <Footer />
    </div>
  )
}

export default HomePage