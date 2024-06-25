import "./App.css";
import Home from "./Component/Home/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Component/Layout/Layout";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import AccountingPage from "./Pages/AccountingPage";
import IncomeTaxPage from "./Pages/IncomeTaxPage";
import ContactPage from "./Pages/ContactPage";
import GSTPage from "./Pages/GstPage";
import Testimonial from "./Component/Testimonial/Testimonial";
import Consultant from "./Component/Consultant/Consultant";
import OtherWorkPage from "./Pages/OtherWorkPage";
import BusinessRegistrationPage from "./Pages/BusinessRegistrationPage";
import NewsPage from "./Pages/NewsPage";


function App() {
   
  
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
          <About />
          <Testimonial />
          <Consultant />
        </Route>
        <Route path="/services" exact>
          <Service />
        </Route>
        <Route path="/accounting" exact>
          <AccountingPage />
        </Route>
        <Route path="/income-tax" exact>
          <IncomeTaxPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/GST" exact>
          <GSTPage />
        </Route>
        <Route path="/others" exact>
          <OtherWorkPage />
        </Route>
        <Route path="/Business-registration" exact>
          <BusinessRegistrationPage />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
      </Switch>
    </Layout>
  );
}
export default withRouter(App);
