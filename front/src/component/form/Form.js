import React from 'react';

class Form extends React.Component {
    state = {
        email: '',
        roomName: ''
    }

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }    

    onFormSubmit(event) {
        event.preventDefault();
        console.log('onSubmit');
        console.log(event);
    }

    renderFields() {
       return( this.props.fields.map(( field ) => {
            return (
                <div key={field} className="twelve wide field">
                    <label>{field}</label>
                    {field !== 'Password' ? <input type="text" onChange={(e) => this.setState({ roomName: e.target.value })}/> : 
                    <input type="password" placeholder="Optional" onChange={(e) => this.setState({ roomName: e.target.value })}/>}
                </div>
                );
        })
       );
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="ui centered grid">
                    {this.renderFields()}
                </div>
                <div className="ui centered grid">
                    <input type="submit" value="Submit" onSubmit={this.onFormSubmit} />
                </div>
            </form>
        );
    }
}

export default Form;