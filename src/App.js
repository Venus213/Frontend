import "./App.css";
import { About } from './Component/about/About';
import { Contact } from './Component/contact/Contact';
import { Blog } from './Component/blog/Blog';
import { Appointment } from './Component/appointment/Appointment';
import { Feedback } from './Component/feedback/Feedback';
import { Index } from './Component/index/Index';
import { Offer } from './Component/offer/Offer';
import { Portfolio } from './Component/portfolio/Portfolio';
import { Service } from './Component/service/Service';
import { Single } from './Component/single/Single';
import { Price } from './Component/price/Price';
import { Navbar } from './Component/navbar/Navbar';
import { Footer } from "./Component/footer/Footer";
import { Team } from "./Component/team/Team";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Teamcardprops } from "./Component/team/Teamcardprops";
import { Pricecardprops } from "./Component/price/pricecardprops";
import { Blogcardprops } from "./Component/blog/blogcardprops";
import { Signup } from "./Component/login/Signup";
import { NetworkErrorcompo } from "./Component/NetworkErrorcompo";
import { Offercardprops } from "./Component/offer/offercardprops";
import Forget from "./Component/login/Forget";
import { Profile } from "./Component/profile/Profile";
import { Userprotecter } from "./Component/Userprotecter";


function App() {
  return (
    
      <Router>
        {/* <Navbar/> */}
        <Switch>
        <Route path="/index">
            <Index/>
          </Route>
          <Route exact path="/">
            <Signup/>
          </Route>
          <Route path="/Navbar">
            <Navbar/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/appointment">
            <Userprotecter>
            <Appointment/>
            </Userprotecter>
          </Route>
          
      
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/blogcardprops">
            <Blogcardprops />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/feedback">
            <Feedback/>
          </Route>

         
          
          <Route path="/Offer">
            <Offer/>
          </Route>
          <Route path="/offercardprops">
            <Offercardprops/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/Teamcardprops">
            <Teamcardprops/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
            {/* <Route path="/signup">
              <Signup/>
            </Route> */}
          <Route path="/price/:name?">
            <Price/>
          </Route>
          <Route path="/pricecardprops">
            <Pricecardprops/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/single/:id?"> 
            <Single/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/forget">
            <Forget/>
          </Route>
          <Route path="/networkErrorcompo">
            <NetworkErrorcompo />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>

  );
}

export default App;
