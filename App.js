const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const NavBar = require('./NavBar');
const Home = require('./Home');

class App extends React.Component {
    render() {
        return (
        <Router> 
            <div> 
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route render={function () {
                        return <p>Not Found</p>
                    }} />
                </Switch>
            </div>
        </Router>
        )    
}
    
}

module.exports = App;