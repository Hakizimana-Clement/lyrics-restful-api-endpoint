# Lyrics API EndPoint

Welcome to the Lyrics API Endpoint, a Node.js and MongoDB-powered solution designed for managing lyrics through seamless CRUD operations. This RESTful API provides a robust platform for effortlessly handling lyric data.

## Table of Contents

- [Installation](#installation)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design Pattern](#design-pattern)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Challenges](#challenges)
- [Author](#author)

## Installation

To use the Lyrics API Endpoint locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Hakizimana-Clement/lyrics-restful-api-endpoint.git
```

2. Navigate to the project directory:

```bash
cd lyrics-restful-api-endpoint
```

3. Install necessary packages:

```bash
npm install
```

4. Create an environment file

```bash
touch .env && start .env
```

5. Add the port number for the server and the MongoDB database URL in the .env file.
   <br>
   Here is an example:

```env
port=8080
DB_URL="your mongo db url"
```

6. Run server

```bash
npm start
```

## Overview

The Lyrics API Endpoint empowers users to explore lyrics for songs they desire. Any user can actively contribute to the creation of lyrics by adding and updating them, enhancing the collaborative aspect of the platform. Users have the ability to perform CRUD operations, allowing them to seamlessly manage and interact with the lyric data.

### Links

- GitHub Repository URL: https://github.com/Hakizimana-Clement/lyrics-restful-api-endpoint

- Live API URL: https://lyrics-api-7mrm.onrender.com/api/lyrics

## My process

### Built with:

- Express.js
- Mongoose
- dotenv

### Design Pattern

1. Start with **app.js** to connect to the database.
2. Create a **routes** folder to manage all API routes.
3. Develop a **model** containing MongoDB schema details and data requirements.
4. Establish a **controller** folder with CRUD logic.
5. Connect all components to create a functional and maintainable API.

## Continued Development

Currently working on:

1. Streamlining logic in lyricsControllers.js to simplify repetitive processes.
2. Enhancing user experience with the implementation of user authentication, enabling users to create accounts and manage their lyrics independently. This includes the ability to perform CRUD operations without affecting the entire lyrics database.
3. Adding functionality to display lyrics created by a user on the home page for a personalized experience.

## Useful Resources

1. [How to Build a REST API with Express and Mongoose by rahmanfadhil](https://rahmanfadhil.com/express-rest-api/): This resource provided a solid foundation for creating a REST API in Node.js.

2. [The Net ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU): This YouTube channel was instrumental in teaching me how to build APIs in a simple and maintainable way.

## Challenges

Encountered challenges during the development of the Lyrics API Endpoint:

- Understanding how the .env file works.
- Handling errors in the controller folder.

## Author

- Github - [Hakizimana Clement](https://github.com/Hakizimana-Clement/)
- Twitter - [@HakizimanaClem5](https://www.twitter.com/HakizimanaClem5)
