<h1 align="center">Simplified Coinbase Clone</h1>
<h3 align="center">Build with React, Typescript and Firebase. Tested with Jest/React Testing Library.</h3>

![Coinbase Clone Screenshot](coinbase-clone-preview.jpg)
[Go to live app](https://todoist-clone.com/)

## What is this and who is it for ⭐

This is a simplified Coinbase clone built with React, Typescript and Firebase.
After building a [Todoist Clone as my first React project](https://github.com/maker0101/Todoist_Clone) I was looking for second React training project where I could:

- Continue to practice building reusable components and hooks.
- Work with external data APIs for data fetching
- Build my first Charts :-)
- Implement Tests with React Testing Library / Jest for the first time
- Start learning and playing around with Typescript

This project focusses on the Frontend. If you like, have a look.
As this project helped me tremendously on my journey to become an awesome Frontend Developer, I hope it provides some value for you, too 🤓.

## Features and Technologies

- Written in **modern React** and **Typescript**
- **Simple** vanilla React **state management** (without Redux, Recoil or similar)
- **Coinbase UI** (as of March 2022)
- Crypto data fetched using [Coinranks awesome API](https://developers.coinranking.com/api) via [RapidAPI](https://rapidapi.com/)
- **Components tested** with React Testing Library / Jest
- **Firebase** as backend (for authentification and database)

## Getting started 🛠

- Signup for a [RapidAPI account](https://rapidapi.com/), setup an app and Subscribe for the [Coinranking API](https://rapidapi.com/Coinranking/api/coinranking1/)
- Signup for a [Firebase account](https://firebase.google.com/) if you don't have it already, create a new project, then set up a web app.
- Inside Firebase, set up Firestore and create three collections `transactions`, `yourCoins`, `yourFiat`.
- Inside Firebase, set up Firebase authentification and enable Email/Password, Anonymous, and Google SignIn.
- `git clone https://github.com/maker0101/Coinbase_Clone`
- Create an empty `.env.local` file in the root directory, copy `.env.local.example` contents into it, and fill `XXX` placeholders with your RapidAPI and Firebase project credentials.
- `npm install`
- `npm start`
- App should now be running on `http://localhost:3000/`.

## Shortcomings

I'm aware of the following shortcomings listed below:

### Performance 🚀

- Caching

### Security 🔒

- Seperate Production and development environment
- Add Backend validations
- Improve frontend validations

### Styling 🎨

- using CSS custom properties to store repeating styles (e.g. colors)

### Data management 🗄

- tbd

### Accessibility ♿

No extra efforts have been put into making this project more accessible. For a production-ready app, adding aria roles and keyboard support would go a long way into making the app more accessible.

### Testing 🧪

tbd

## Author: Max Breitsprecher

- Website: [xxx.com](https://xxx.com)
- Email: max.breitsp@gmail.com
- Github profile: [github.com/maker0101](https://github.com/maker0101)

If you have any questions or feedback, feel free to say hi. 👋

## License

[MIT](https://opensource.org/licenses/MIT)

## Shout out

- This great [YouTube video from JavaScript Mastery](https://youtu.be/9DDX3US3kss) helped me discover the Coinranking API and the Rapid API service.
- Again, i would like to thank my awesome code tutor [Esen](https://github.com/snqb) for his invaluable feedback, code reviews and words of encouragement.

## Disclaimer

This project is for entirely educational purposes. It is in no way connected to Coinbase the app or Coinbase the company. I'm just a fan of their app and figured it would be a fun, educational challenge to recreate a simplified web-app version of it.
