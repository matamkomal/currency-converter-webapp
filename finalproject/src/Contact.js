import React, {Component} from'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HistoricRates from './HistoricRates';
//import 'react-dropdown/style.css';

const style = {
    marginLeft: 12,
  };

class Contact extends Component{
     
    constructor(props) {
        super(props);
        this.state = {
          base: "",
          symbols: "",
          from_date:"",
          timeseries:undefined
        };
    
    }   
      timeSeries() {
    
          fetch("http://localhost:8085/timeseries", {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Authorization",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from_date: this.from_date.getValue(),
            base: this.base.getValue(),
            symbols: this.symbols.getValue()
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            this.setState({timeseries: data.response.rates.INR})
            console.log("timeseries-----",this.state.timeseries);
          });
      }
    
      onEnterPress = (e) => {
        if (e.key === "Enter") {
          this.timeSeries();
        }
      };
    
      render() {
        const historicRatesComponent =
          this.state.timeseries !== undefined ? (
            <HistoricRates
              base={this.state.base}
              symbols={this.state.symbols}
              from_date={this.state.from_date}
              timeseries={this.state.timeseries}
            />
          ) : null;
        return (
          <div className="centerize">
          <center>
            <MuiThemeProvider>
              <Paper zDepth={1} className="content">
                <h2>Historical Rates Calculator</h2>
                <TextField
                  ref={(ref) => (this.base = ref)}
                  onKeyUp={this.onEnterPress.bind(this)}
                  hintText="Base country currency"
                />{" "}
                <br />
                <TextField
                  ref={(ref) => (this.symbols = ref)}
                  onKeyUp={this.onEnterPress.bind(this)}
                  hintText="Compare country currency"
                />{" "}
                <br />
                <TextField
                  ref={(ref) => (this.from_date = ref)}
                  onKeyUp={this.onEnterPress.bind(this)}
                  hintText="From date"
                />{" "}
                <br />
                <RaisedButton
                  label="Send"
                  style={style}
                  onClick={this.timeSeries.bind(this)}
                />
                {historicRatesComponent}
                
              </Paper>{" "}
            </MuiThemeProvider>{" "}
            </center>
          </div>
        );
      }

        }
    

export default Contact;