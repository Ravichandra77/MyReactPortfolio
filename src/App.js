import React  from 'react';
import './App.css';
import LoaderComponent from "./components/loader/Loader";
import FooterComponent from "./components/footer/footer";
import Header from './components/navbar/Header';
import Heros from './components/Hero/Hero';
import About from "./components/about/About";
import WorkComponent from "./components/myWork/WorkComponent";
import MyPosts from "./components/posts/Posts";
import ContactComponent from "./components/contact/Contact";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';



export default class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    loading: true,  
  }
}
componentDidMount(){
   setTimeout(() => {
    this.setState({
      loading: false
    })
  }, 1000)
}

  render() {
 
    return (
      this.state.loading ? 
<LoaderComponent /> 
  :
<React.Fragment>     
  <Router>
    <Header />
       <Switch>
        <Route path="/"  exact component={Heros} />
        <Route path="/MyReactPortfolio" component={Heros} />        
        <Route path="/about" component={About} />
        <Route path="/my-work" component={WorkComponent} />
        <Route path="/posts" component={MyPosts} />
        <Route path="/contact" component={ContactComponent} />
      </Switch>
      <FooterComponent />
  </Router>
</React.Fragment>
    );
  }
}


