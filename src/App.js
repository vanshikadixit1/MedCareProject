import React from "react";
import logo from './image/home-img.png';
import abo from './image/about-img.png';
import blog1 from './image/blog-1.jpg';
import blog2 from './image/blog-2.jpg';
import blog3 from './image/blog-3.jpg';
import bookimg from './image/booking.png';
import doc1 from './image/doc-1.jpg';
import doc2 from './image/doc-2.jpg';
import doc3 from './image/doc-3.jpg';
import doc4 from './image/doc-4.jpg';
import doc5 from './image/doc-5.jpg';
import doc6 from './image/doc-6.jpg';
import pic1 from './image/pic-1.png';
import pic2 from './image/pic-2.png';
import pic3 from './image/pic-3.png';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './script.js';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
    const { loginWithRedirect, isAuthenticated  } = useAuth0();
    const { logout } = useAuth0();
  return (
    <>
    <header className="header">
    <a href="/" className="logo"> <i className="fas fa-heartbeat"></i> medcare. </a>
    <nav className="navbar">
        <a href="#home">home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#doctors">doctors</a>
        <a href="#book">book</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
        {isAuthenticated ? (
            <li>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          </li>
        ) : (
            <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
        )}
       
        
  
        
    </nav>

    <div id="menu-btn" className="fas fa-bars"></div>

</header>

<section className="home" id="home">

    <div className="image">
        <img src ={logo} alt=""/>
    </div>

    <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>software helps deliver superior healthcare delivery for doctors, clinics and hospitals.</p>
        <a href="/" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
    </div>

</section>

<section className="icons-container">

    <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
    </div>

    <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
    </div>

    <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>bed facility</p>
    </div>

    <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>available hospitals</p>
    </div>

</section>
<section className="services" id="services">

    <h1 className="heading"> our <span>services</span> </h1>

    <div className="box-container">

        <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>E-Prescription</h3>
            <p>A powerful but simple e-prescription (EMR) will allow you to prescribe and share medications and advise.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>expert doctors</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>bed facility</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

        <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>total care</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

    </div>

</section>

<section className="about" id="about">

    <h1 className="heading"> <span>about</span> us </h1>

    <div className="row">

        <div className="image">
            <img src={abo} alt=""/>
        </div>

        <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
            <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>

    </div>

</section>
<section className="doctors" id="doctors">

    <h1 className="heading"> our <span>doctors</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={doc1} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc2} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc3} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc4} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc5} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <img src={doc6} alt=""/>
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
                <a href="/" className="fab fa-facebook-f"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>
<section className="book" id="book">

    <h1 className="heading"> <span>book</span> now </h1>    

    <div className="row">

        <div className="image">
            <img src={bookimg} alt=""/>
        </div>

        <form action="">
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" className="box"/>
            <input type="number" placeholder="your number" className="box"/>
            <input type="email" placeholder="your email" className="box"/>
            <input type="date" className="box"/>
            <input type="time" className="box"/>
            <input type="submit" value="book now" className="btn"/>
        </form>
    </div>

</section>

<section className="review" id="review">
    
    <h1 className="heading"> client's <span>review</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={pic1} alt=""/>
            <h3>john deo</h3>
            
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

        <div className="box">
            <img src={pic2} alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

        <div className="box">
            <img src={pic3} alt=""/>
            <h3>john deo</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
        </div>

    </div>

</section>

<section className="blogs" id="blogs">

    <h1 className="heading"> our <span>blogs</span> </h1>

    <div className="box-container">

        <div className="box">
            <div className="image">
                <img src={blog1} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="/"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="/"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog2} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="/"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="/"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog3} alt=""/>
            </div>
            <div className="content">
                <div className="icon">
                    <a href="/"> <i className="fas fa-calendar"></i> 1st may, 2021 </a>
                    <a href="/"> <i className="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                <a href="/" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>

    </div>

</section>

<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a href="#home"> <i className="fas fa-chevron-right"></i> home </a>
            <a href="#services"> <i className="fas fa-chevron-right"></i> services </a>
            <a href="#about"> <i className="fas fa-chevron-right"></i> about </a>
            <a href="#doctors"> <i className="fas fa-chevron-right"></i> doctors </a>
            <a href="#book"> <i className="fas fa-chevron-right"></i> book </a>
            <a href="#review"> <i className="fas fa-chevron-right"></i> review </a>
            <a href="#blogs"> <i className="fas fa-chevron-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>our services</h3>
            <a href="/"> <i className="fas fa-chevron-right"></i> dental care </a>
            <a href="/"> <i className="fas fa-chevron-right"></i> message therapy </a>
            <a href="/"> <i className="fas fa-chevron-right"></i> cardioloty </a>
            <a href="/"> <i className="fas fa-chevron-right"></i> diagnosis </a>
            <a href="/"> <i className="fas fa-chevron-right"></i> ambulance service </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="/"> <i className="fas fa-phone"></i> +91 9998887776 </a>
            <a href="/"> <i className="fas fa-phone"></i> +91 6665554443 </a>
            <a href="/"> <i className="fas fa-envelope"></i> Suraj.agarwal_cs20@gla.ac.in</a>
            <a href="/"> <i className="fas fa-envelope"></i> Vanshika.dixit_cs20@gla.ac.in </a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="/"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="/"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="/"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="/"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="/"> <i className="fab fa-linkedin"></i> linkedin </a>
            <a href="/"> <i className="fab fa-pinterest"></i> pinterest </a>
        </div>

    </div>

</section>

    </>
  );
}


export default App;