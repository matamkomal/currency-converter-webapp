import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Polarity from "./Polarity";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
  marginLeft: 50,
};


class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fromc: "",
      toc: "",
      amount: "",
      polarity: undefined,
    };
  }

  currencyConverter() {
    fetch("http://192.168.99.100:8000/currencyconverter", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Authorization",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fromc: this.fromc.getValue(),
        toc: this.toc.getValue(),
        amount: this.textField.getValue(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data---" +data.response)
        this.setState({ polarity: data.response.result })
      });
  }

  onEnterPress = (e) => {
    if (e.key === "Enter") {
      this.currencyConverter();
    }
  };

  render() {
    const polarityComponent =
      this.state.polarity !== undefined ? (
        <Polarity
          fromc={this.state.fromc}
          toc={this.state.toc}
          amount={this.state.amount}
          polarity={this.state.polarity}
        />
      ) : null;
    return (
      <div className="centerize">
        <center>
          <MuiThemeProvider>
            <h2>Currency Converter</h2>
            <TextField
              ref={(ref) => (this.fromc = ref)}
              onKeyUp={this.onEnterPress.bind(this)}
              hintText="From country"
            />{" "}
            <br />
            <TextField
              ref={(ref) => (this.toc = ref)}
              onKeyUp={this.onEnterPress.bind(this)}
              hintText="To country"
            />{" "}
            <br />
            <TextField
              ref={(ref) => (this.textField = ref)}
              onKeyUp={this.onEnterPress.bind(this)}
              hintText="Amount"
            />{" "}
            <br />
            <RaisedButton
              label="Send"
              style={style}
              onClick={this.currencyConverter.bind(this)}
            />
            {polarityComponent}
          </MuiThemeProvider>{" "}
        </center>
      </div>

    )
  }

}

export default About;