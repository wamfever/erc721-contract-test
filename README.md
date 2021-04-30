# KEYKO - TEST Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure
The project is divided into 4 main functional folders inside `src/`, which are:
### `library/`
### `main/`
### `modules/`
### `resources/`

We use `library/` for the shared component pieces of the app and its types (in the `common/` subfolder), and configuration files (generic forms configuration, contract data etc.), more complex functions that are used in multiple places throughout the app (in the `utilities/` subfolder). 

The `main/` folder is used for service files and routing configuration. Here you would also include store integration (Redux, Saga etc.).

For the application's components, we use the `modules` folder - each module is a separate screen which has its own smaller components (that are not shared throughout the app).

The `resources/` folder is used for the application's static assets (images, styles, fonts etc.).

## Flow
The app starts on the homepage `/`, which allows the user to connect a wallet provider (only Metamask implemented in the test).

Upon connecting, the user is then redirected to the dashboard page `/dashboard` where they can see their available panels, depending on their role.

Automatic redirect to `/dashboard` is also implemented, in case user already connected their Metamask to the website in the past.

We have 2 non-exclusive roles for each connected wallet:
- owner
- minter (isMinter -> true)

We have 8 widgets:
- Grant minter (owner only)
- Remove minter (owner only)
- Mint (minter only)
- Transfer (all connected users)
- Change Hair Color (all connected users can use it on their proprietary tokens)
- Change Eyes Color (all connected users can use it on their proprietary tokens)
- Change Height (all connected users can use it on their proprietary tokens)
- Change Age (all connected users can use it on their proprietary tokens)
- (additional) Table of all minted tokens

## CSS
We use a combination of `styled-components` for wrappers and regular `.scss` files for inner classes. 

The main CSS library is Bootstrap. 

Each React component (defined anywhere throughout the project) has its own `.scss` file on the same level as a sibling. 

## Testing points
- general frontend architecture
- routing and navigation
- conditional rendering based on user roles
- generic forms rendering - each form is being generated from the same component, configured in the Dashboard module
- real-time forms by roles (removing Minter role will make the Minter widget disappear, and granting Minter role will make the Minter widget appear)
- reactive table on mint / update tokens
- good understanding of React best practices
- knowledge regarding TS typing system
- usage of React Hooks for functional components, and avoidance of class components in general
- web3js usage for calling
    - public contract variables
    - public read functions
    - public write functions
    - functions restricted only to a small group of users
    - onlyOwner functions
- deployment and prerequisites for the contract which can be found [here](https://rinkeby.etherscan.io/address/0x871e46Bf148d90d334a719dEf062Fd0ed33Bb3aF#contracts)

## Testing
Run `npm run test` 🚀🚀🚀🌑.

## Further improvements
1. The table can be paginated on request (only retrieve a small batch of tokens at a time), and have a Search functionality implemented.
2. Loading states throughout the web3-integrated components (forms, table, connect screen).
3. For the generic form, the web3 call can be integrated inside the form with more time, having the web3 function also configured inside it.
4. Loading states for all web3-integrated forms can also be generically implemented, and only configured.
5. Store integration - additionally, build a widget dependency tree for full reactiveness of the Dashboard page.
6. Implement multiple wallet providers.
7. Even better typings for components.

## Running locally
### On the existing contract
1. ``npm install``
2. ``npm start``

If you want to play with the whole interface, we will provide you ownership of the current contract.

### On fresh Contract
1. Follow the instructions [here](https://github.com/wamfever/erc721-contract-solidity-helper)
2. After setting ``ContractData.tsx`` follow the steps from the existing contract section
