# Erc20TokenFaucet

Testnet Erc20 tokens faucet

## Demo

![demo](https://github.com/drunken005/Erc20TokenFaucet/blob/master/app/public/demo/demo.png)

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ docker build -t erc20TokenFaucet .
$ docker run -it -d -e PRIVATE_KEY="eth account private key" --name faucet erc20TokenFaucet /bin/bash
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.