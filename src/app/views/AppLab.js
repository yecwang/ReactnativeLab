'use strict';

var React = require('react-native');

var {
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Component,
} = React;

var StockApp = require('../../subapps/StockApp/index.js');

class AppLab extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            subAppName: null
        }

    }

    render()
    {

        switch(this.state.subAppName) {

            case "StockApp":
                return (
                    <StockApp />
                )
                break;
           
            default:
                return this._renderAppList();
                
                breack;
        }
        
    }

    _renderAppList() {
        return (
            <View style={styles.container}>
                <Text style={styles.TitleText}>App list:</Text>
                <TouchableHighlight 
                    onPress={this.onTrackingPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Tracking App</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={this.onStockPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Stock App</Text>
                </TouchableHighlight>
            </View>
        )   
    }

    onTrackingPressed() {
        console.log('Tracking app button was pressed!');

    }

    onStockPressed() {
        console.log("Stock app button was pressed");
        this.setState({subAppName: 'StockApp'});   
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
    TitleText: {
        color: 'black',
        fontSize: 24
    },
});

module.exports = AppLab;