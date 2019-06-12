import React from 'react';
import Menu from './Menu';
import Home from './home/Home';
import Create from './create/Create';
import Join from './join/Join';
import Editor from './editor/Editor';
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
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        
        <Router >
          <Menu />
          <Route path="/" component={Home} exact/>
          <Route path="/create" component={Create} />
          <Route path="/join" component={Join} />
          <Route path="/editor" component={Editor} />
        </Router>
        
      </div>
    );
  }
}

export default App;
