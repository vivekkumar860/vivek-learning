import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostBlog from './pages/PostBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <CookieConsent />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/blogs" component={Blog} />
                    <Route path="/post" component={PostBlog} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
