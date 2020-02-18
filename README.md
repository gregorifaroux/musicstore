# musicstore

Music store demo using a NodeJS API with React client and CSS animation

## Live Demo

[Live Demo](http://musicstoredemo.herokuapp.com/)

## Technologies

- ReactJS front-end
- Node.js RESTful APIs back-end
- Responsive design and animation in CSS

## Getting Started

### Requirements:

- **Node** (tested with v12.14.1 & v10.17.0)
- **npm** (tested with 6.13.4 & 6.11.3 )

### To install (first time only):

```
$ npm install
```

### To build the production distribution:

```
$ npm run build
```

### To start (Production):

```
$ npm run start:prod
```

open your browser to [https://localhot:8000](http://localhost:8000/)

### To start (Dev):

#### Server

```
$ cd server
$ npm run dev
```

#### Client

```
$ cd client
$ npm start
```

Open your browser to [https://localhost:3000](http://localhost:3000/)

## Tech/framework used

### NodeJS / Express

#### General information

- airbnb lint
- logs via [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)

We reduce risks for the following attacks:

- Man in middle Attacks
  - server side validation
- Denial-Of-Service (DOS) Attacks
  - limit the body payload
  - set rate limit for users
- Cross-Site Scripting (XSS) Attacks
  - Sanitize user data, on input
  - Give your project special HTTP headers using helmet dependency
- Brute Force Attacks
  - express-rate-limit dependency
- NoSQL Injection Attacks
  - Sanitize inputs
