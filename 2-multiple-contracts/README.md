# React Redux Box

<img src="./box-img-lg.png" alt="react-redux box image" title="react-redux_logo" width="300" />

This box comes with everything you need to start using smart contracts from a react app and redux library for state management

You will need to install Node.js and Truffle, as stated in the tutorial - see "Setting up the development environment".


## After unboxing

to install all req'd dependencies both in the root and client projects, you can run :

```
npm run install-pkg 
```

In the main project directory:

```
truffle develop
```

Then, in the Truffle developer console:

```
compile
```

and then:

```
migrate
```

To test your smart contract(s), in truffle's developer console:

```
test
```

Now that you have successfully launched your Solidity contract onto your local blockchain, go into the client directory:

Run the project by entering the following:

```
npm start
```

To see your project in the browser, go to http://localhost:3000/

You can test your DApp by entering the following:

```
npm test
```


