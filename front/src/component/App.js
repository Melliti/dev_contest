import React from 'react';
import Menu from './Menu';
import Home from './home/Home';
import Create from './create/Create';
import Join from './join/Join';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    views: [<Home />, <Create />, <Join />],
    view: <Create />
  };

  onMenuSelect = (index) => {
    const selected = this.state.views[index];
    this.setState({view: selected});
  }

  render () {
    var path = "/" + this.state.view.type.name;
    console.log(path);
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        
        {/* define routes */}

        <Router >
          <Menu />
          <Route path="/" component={Home} exact/>
          <Route path="/create" component={Create} />
          <Route path="/join" component={Join} />

          {/* <Menu onSelect={this.onMenuSelect}/> */}
          {/* <Route path={"/home"} component={Home} />
          <Route path={"/create"} component={Create} />
          <Route path={"/join"} component={Join} /> */}
        </Router>
        
        {/* {this.state.view} */}
      </div>
    );
  }
}

export default App;
