# peerjs-multichat

Secure, persistent & almost serverless multichat proof of concept

Use this project to securely chat with your friends, in real-time. For installation instructions, see below.

## The challenge

Today's infrastructures rely almost every time on servers, which have a **cost** and an **environmental impact**. To be more specific, [data centers are responsible for approx. 4% of the world's energy consumption](https://data-economy.com/data-centres-world-will-consume-1-5-earths-power-2025/) (and growing). But how would you do your day without your daily binge-watching on demand?

The goal of this project is to simplify and demonstrate the *power, security* and *persistency* of serverless data exchanges. Here is the complete list of features:
- Basic chat application with usernames
- **Security:** data exchanges must be encrypted
- **Persistency:** data must be saved throught sessions (username, chat)
- **Serverless:** data must be exchanged between peers without the need of a server
- **Simplicity:** anyone must be able to use this project without knowledge of anything

## The solution

I've designed the most simple solution to fulfill the previous requirements, using:
- [*WebRTC*](https://webrtc.org/), for secure, reliable and serverless data exchanges
- [*Vue.js*](https://vuejs.org/), for fast & light-weight dynamic rendering & state management
- [*PeerJS*](https://peerjs.com), for development simplicity over WebRTC
- [*MaterializeCSS*](https://materializecss.com/), for fast & modern design

WebRTC is the Google's open-source base for peer communication in-the-browser, using [QUIC protocol](https://en.wikipedia.org/wiki/QUIC) (the most recent, fast & reliable [transport layer](https://en.wikipedia.org/wiki/Transport_layer) [network protocol](https://en.wikipedia.org/wiki/Network_protocol)). It's supported by almost every decent browser and provides a way to establish data channels between peers supporting any type of data, including real-time audio and video.

PeerJS provides a way to conect the client the a server's endpoint, waiting for peer connections from other clients. Once a connection's established, both peers communicate over WebRTC data channels from which only them can read/write.

## Installation

Simply download [index.html](./index.html) and open it with a decent (javascript-enabled) recent browser!