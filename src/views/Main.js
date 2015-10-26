'use strict';

var React = require('react-native');
var Login = require('./Login');
var AppLab = require('./AppLab');

var {    
    Component,
} = React;


class Main extends Component {

    // TIP: in none es6, should use getInitialState() instead constuctor
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        }
    }

    componentDidMount() {
        console.log('component did mount');
    }

    render() {

        if (this.state.isLoggedIn) {
            return (
                <AppLab />
            );
        } else {
            return (
                //TIP: use the bind(this) to bind this(the this in this method is refer class Main, otherwise it can't find this mothod, because the 'this' is differnt context in a callback in Login.js
                <Login onLogin={this.onLogin.bind(this)} />
            );
        }        
    }

    onLogin() {
        this.setState({isLoggedIn: true});
    }

}

module.exports = Main;