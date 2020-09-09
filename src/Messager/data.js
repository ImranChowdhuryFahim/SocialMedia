import React, { Component } from "react";

export const ChatContext = React.createContext();

export class ChatProvider extends Component {
  constructor() {
    super();
    this.state = {
      ChatHeads: [
        {
          Id: 1,
          Name: "Abdul Matin",
          LastMessage: "kirre ki khobor",
          Time: "12.04 Pm",
          Src:
            "https://scontent.fdac74-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/81348814_2393097351006112_6393431859480494080_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=cIpGoTP4hyIAX-tVf45&_nc_ht=scontent.fdac74-1.fna&oh=e3f4b6b90eaa7d391032e57784950865&oe=5F763147",
          msg : ['hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl']
        },
        {
          Id: 2,
          Name: "Abdul Moeid",
          LastMessage: "kirre ki khobor1",
          Time: "12.06 Pm",
          Src:
            "https://scontent.fdac74-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/117035471_2533708996881087_3927314896259866462_o.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_ohc=cbdmWVA_37wAX84B_QK&_nc_ht=scontent.fdac74-1.fna&oh=d29db84d43b263a0d7df2345d71d7381&oe=5F7714D4",
            msg : ['hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl','hello', 'hi', 'hwl']
        },
        {
          Id: 3,
          Name: "Moja Jahid",
          LastMessage: "kirre ki khobor2",
          Time: "12.08 Pm",
          Src:
            "https://scontent.fdac74-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/79085648_1409016895931596_1364129587994296320_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=nHVUAaBbmiEAX8bbC_n&_nc_ht=scontent.fdac74-1.fna&oh=9753c78f44c80237e758c0f5f0959d81&oe=5F7557C3",
          msg : ['hello', 'hi', 'hwl','hello', 'hi', 'hwl']
        
          },
        {
          Id: 4,
          Name: "Talha Khan",
          LastMessage: "kirre ki khobor3",
          Time: "12.09 Pm",
          Src:
            "https://scontent.fdac74-1.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/115824790_2908560592599434_1021743797251165316_n.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_ohc=U3m47UAZUyQAX8mD9gx&_nc_ht=scontent.fdac74-1.fna&oh=2a0f86aceb023feab07314e5d2309a65&oe=5F76B3F9",
            msg : ['hello', 'hi', 'hwl','hello', 'hi', 'hwl']
        },
      ],
      CurrentActive: 1
    };
  }


  updateCurrentActive(e) {
    this.setState({ CurrentActive: e });
  }

  render() {
    return (
      <ChatContext.Provider
        value={{
          chatheads: this.state.ChatHeads,
          currentactive: this.state.CurrentActive,
          updateCurrentActive: (e) => this.updateCurrentActive(e),
        }}
      >
        {this.props.children}
      </ChatContext.Provider>
    );
  }
}
