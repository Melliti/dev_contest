import React from 'react'
import { NavLink, Link } from 'react-router-dom';

class Menu extends React.Component {

    state = {
        activeClass: [true, false, false]
    }

    setActive(index) {
        var activeClass = [];
        for (var i = 0; i < this.state.activeClass.length; i++) {
            activeClass[i] = false;
        }

        activeClass[index] = true;
        this.setState({activeClass});
        // this.props.onSelect(index);
    }

    render () {
        return (
            <div className="ui three item menu">
                <Link to="/" onClick={() => this.setActive(0)} className={this.state.activeClass[0] ? "item active" : "item"}>Home</Link>
                <NavLink to="/create" onClick={() => this.setActive(1)} className="item">Create</NavLink>
                <NavLink to="/join" onClick={() => this.setActive(2)} className="item">Join</NavLink>
            </div>
        );
    }

}

export default Menu;
