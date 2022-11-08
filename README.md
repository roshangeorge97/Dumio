<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/roshangeorge97/Dumio">
    <img src="https://raw.githubusercontent.com/suhailkakar/Decentralized-YouTube/version-1/logo.png" alt="Logo" width="110" height="80">
  </a>

<h3 align="center">Dumio - Decentralized Video sharing and Social Media platform</h3>

</div>

## About The Project

[![Ourtube][product-screenshot]](https://twitter.com/suhailkakar)

Dumio is a Video sharing and Social Media Platform similar to YouTube, but runs on Blockchain. Dumio is built for secure, and faster video sharing and broadcasting. Videos uploaded to Dumio are stored in a distributed manner through IPFS, which makes hackers lose their attack targets and makes data more secure.


### Built With

- Frontend framework: React.js
- Smart contracts: Solidity
- Ethereum web client library: Web3.js
- File storage: IPFS
- CSS Framework: Bootstrap
- Ethereum development environment: Truffle, Ganache
- Layer 2 blockchain: Polygon

<!-- GETTING STARTED -->

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, NPM and hardhat installed on your computer, before running this project.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/roshangeorge97/Dumio
   
   ```
   
2. Change Directory
   ```sh
   cd Dumio
   
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```
4. Create an `.env` file and get an API key from Livepeer studio, Web3 Storage and Imagekit. 
   ```sh
   MNEMONIC=
   ```
5. Migrate the smart contract

   For Ganache:
   ```sh
   truffle migrate
   ```
   
   For Mumbai Testnet:
      ```sh
   truffle migrate --network matic
   ```

   Note : When Deploying Polygon Network ie; Mumbai Testnet, you would get a Polling Error, so its recommended to use a Custom RPC
   
   ### Setting up a custom RPC
   
   step 1 : Sign up to  https://rpc.maticvigil.com/ and Create an App server
   
   step 2 : Copy the Custom RPC Url and Paste in the `.env` file
   
   ```
   Mumbai_Testnet_RPC_URL=
   ```
   


6. start IPFS node

   Note : you must Install IPFS in your system before starting the IPFS Node.
   
   IPFS installation :
   
   ``
   $ npm install -g ipfs
   ``
   
   Run the Node:
   
   ```
   $ jsipfs daemon
 

7. Run the app

   ```sh
   npm run start
   ```
