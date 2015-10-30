'use strict';

var React = require('react-native');

var {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Component,
    ActivityIndicatorIOS,
    Platform
} = React;

class Login extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            username: '',
            password: '',
            success: null
        }
    }

    render()
    {
        var errorView = <View />;
        if (this.state.success === false && this.state.showProgress === false) {
            errorView = <Text style={styles.error}>
                Wrong username and password!
            </Text>;
        }

        var indicatorView = <View />;
        if (Platform.OS === 'ios') {
            indicatorView = <ActivityIndicatorIOS
                                animating={this.state.showProgress}
                                style={styles.loader}
                                size="large" />;
        } else {
            if (this.state.showProgress === true) {
                indicatorView = <Text style={styles.indicator}>
                                    Verifying.........
                                 </Text>;
            }
        }

        return (

            <View style={styles.container}>
             {/* TIP: how to comment out JSX  <Image style={styles.logo} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/> */}
                <Text style={styles.heading}>Yuhan Playground</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.loginInput} 
                    placeholder="username"></TextInput>
                <TextInput 
                    onChangeText={(text) => this.setState({password: text})}
                    style={styles.loginInput} 
                    placeholder="password" 
                    secureTextEntry={true}></TextInput>
                <TouchableHighlight 
                    onPress={this.onLoginPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
                {errorView }
                {indicatorView }
              
                
            </View>
        );
    }

    onLoginPressed() {
        this.setState({showProgress : true});
        var authService = require('../services/AuthService');
        var user = {
            username : this.state.username,
            password : this.state.password
        }
        authService.login(user, (err, result) => {
         
            this.setState({showProgress : false});
            if (result.success === true) {
                this.setState({success: true});   
                if(this.props.onLogin) {
                    this.props.onLogin();
                }
            }
            else {
               this.setState({success: false});    
            }
        });
    }
}

var styles = React.StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    logo: {
        marginTop: 10,
        width: 66,
        height:55
    },
    heading: {
        fontSize: 30,
        marginTop: 20,
        color: '#48BBEC'
    },
    loginInput: {
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 0,
        color: '#48BBEC'
    },
    loader: {
        marginTop : 20
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontSize: 20,
    },
    indicator:{
        color: '#48BBEC',
        marginTop: 10,
        fontSize: 20,
    }
});

module.exports = Login;