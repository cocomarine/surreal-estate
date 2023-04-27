# Surreal Estate

A React app with MongoDB integration for property listing and searching, incorporating Facebook login and tested with React Testing Library.

## Table of contents

- [Introduction](#introduction)
- [Concepts covered](#concepts-covered)
- [Setup & getting started](#setup-&-getting-started)
- [Using the app](#using-the-app)
- [Author](#author)

## Introduction
This is a property search engine similar to RightMove or Zoopla with multiple pages: 
- A listings page where users can search for different properties, sort/filter the results and, when logged in, save properties.
- A saved property page where users can view or remove saved properties.
- An add property page where new properties can be added to the listing.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=kM8F9_hztGM" target="_blank">
 <figcaption>Demo video</figcaption>
</a>

## Concepts covered
- React to build user interfaces (UI) and web applications
- Incorporating HTML in React using JSX (JavaScript XML)
- Use of PropTypes for validating props to ensure that data passed between components is of the correct type
- Client-side routing using React Router to enable seamless transitions between pages without reloading the entire app
- Implementing Single Sign On (SSO) authentication by using Facebook's JavaScript API
- Understanding API documentation
- Connecting a local express server to a remote MongoDB using docker-compose
- React Testing Library (RTL) to test UI to ensure that components are functioning as intended
- Making a HTTP request to an external API using axios and processing the response to display relevant data to the user
- Error handling using axios


## Setup & getting started
- Create a fork of this repo and clone the fork. 
- Change directory into the cloned folder and install project dependencies. This app requires React, Axios and dev dependencies RTL.
- To test the app, run `npm test`.
- To start the app, run `npm start`. This starts the app at http://localhost:3000. 

## Future work
- Improving UI
- Implementing photo upload feature

------------------

## Author

👤 **HJ Kang** 
- GitHub [@cocomarine](https://github.com/cocomarine) 
- LinkedIn [@hj-kang07](https://www.linkedin.com/in/hj-kang07/) 
