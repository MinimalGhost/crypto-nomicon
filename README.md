# Cryptonomicon

![home](screenshots/home.png "Cryptonomicon HomeScreen")

A cryptocurrency portfolio tracking tool with a pleasingly 80s shell.  

![portfolio](screenshots/portfolio.png "Cryptonomicon Portfolio")

## Installing / Getting Started

This project was bootstrapped with [Create React App](https://www.google.com). It also uses [npm](https://www.npmjs.com/) and a [react](https://reactjs.org/) based frontend. The backend uses [Rails 5.1.4](http://weblog.rubyonrails.org/2017/8/24/Rails-5-1-4-rc1-and-5-0-6-rc1-released/) and the [Postgres](https://www.postgresql.org/) database.

### Server setup

Fork and/or clone the repository, then from the top level directory `cd` into `cryptonomicon-api` and run:
```
rails db:create
rails db:migrate
```
Then you can spool up the server locally by running `rails s` which defaults to serving `http://localhost:3000`.

### Frontend setup

With your server up and running, navigate to the top level of the cloned repository, then `cd` into `cryptonomicon-react` and run:
```
npm install && npm start
```
to get dependencies installed locally and have it running on your local host. If you are running your API server on localhost:3000 you will be asked if you would like to start the client server on a different port. Press Y and enter to allow this. Because it is a Create-React app this will automatically open a browser window pointing to the frontend and you will be able to interact from there.

## License

[MIT](https://oss.ninja/mit?organization=Eric%20Kollegger) Copyright 2018 [Eric Kollegger](https://github.com/MinimalGhost) and [Shahin Motia](https://github.com/nspp99b)
