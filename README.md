# Spotalyze

Analyze your listening habits and visualize your data/recommendations.

Spotalyze communicates with the Spotify API to fetch your listening habits and use that data to make intelligent suggestions of artists and songs you may like. It also gives you a "Taste Rating" which is a number that determines how popular your music taste is compared to the whole of Spotify users.

&nbsp;

## Live Site

https://cranky-poincare-a82dde.netlify.app/

_Note: recommendations will NOT work as Spotify restricts them to verified apps. You can see your recommendations by running the server on your own computer_

---

&nbsp;

## How do I run it?

### Clone the repository:

```
git clone https://github.com/AryaBuddha/Spotalyze
```

&nbsp;

### Download all required dependencies

(make sure NodeJS and Yarn are installed):

```
yarn install
```

&nbsp;

### Setup Spotify Developer App:

Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and click _Create An App_. Next, click _Edit Settings_ and set the _Redirect URIs_ to `http://localhost:3000/login` (Or the default port of React on your computer). Click _Save_. Copy your **Client ID** and **Client Secret**.

&nbsp;

### Create an env file:

Create a `.env` file at the root of your directory. Fill it with the following:

```
REACT_APP_CLIENT_SECRET=<Client Secret>
REACT_APP_CLIENT_ID=<Client ID>
REACT_APP_REDIRECT_URI=<Redirect URI>
```

_Replace everything between the <> with your own values_

&nbsp;

### Start the Server:

```
yarn start
```

Navigate to the URI you provided to Spotify, but without the `/login`.

Ex: `http://localhost:3000/login` would instead be `http://localhost:3000`.
