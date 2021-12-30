# social-network-api-week-18

  ![](https://img.shields.io/badge/license-MIT-blue)

  ## Description
 This week's challenge was to focus strictly on the back end for a proposed social networking site. Mainly to structure the API so that users can share make friends, share their thoughts, and react to other friend's thoughts as well. There was no front end to construct as this was only creating the routes to help get, create, update, and delete data as needed. 

 The database used was the NoSQL MongoDb. With the use of Mongoose ODM, the Schema for creating the models was streamlined compared to using a more tradtional SQL database. The first step in the process was to define these schema so that it could inform how the data would be retrieved and displayed with the API routes. 

 Next I created the routes using two separate directories, the routes and controllers respectively. The routes were to set up the API and direct which routes would coorispond to each controllers call. 

 Then, with the controllers, this is where the calls were constructed to be able to accurately access the database and using RESTful programming standards to set up each of the routes. 

 Since this application was not deployed, all of the functionality can be sampled using Insomnia core. I have included a screencastify video down below showing each of the respective API calls and how the information is displayed. 

  ## Table of Contents
  1. [Installation](##installation)
  2. [User Story](#user-story)
  3. [Acceptance Criteria](#acceptance-criteria)
  4. [Demo](#demo)
  5. [Technology](#technology)
  6. [Questions](#questions)
  7. [License](#license)
  

  ## Installation
  1. Fork this repository
  2. Clone repository to your local directory
  3. Make sure you have installed Node.js 
  4. Run npm install to install the necessary dependencies
  ```
  npm install
  ```
  5. Start the server by typing "npm start" and open localhost:3001
  ```
  npm start
  ```

  ## User Story
  ```
  AS A social media startup
  I WANT an API for my social network that uses a NoSQL database
  SO THAT my website can handle large amounts of unstructured data

  ```
  ## Acceptance Criteria
  ```
  GIVEN a social network API
  WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database
  WHEN I open API GET routes in Insomnia for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON
  WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete users and thoughts in my database
  WHEN I test API POST and DELETE routes in Insomnia
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

  ```

  ## Demo

  [Social Network API](https://drive.google.com/file/d/1E259MQjDcoE1KS3-0Jzdmk0GvDQvZX1p/view)

  ## Technology Used
  **1. [Node.js](https://nodejs.org/en/)**

  **2. [MongoDB](https://www.mongodb.com)**

  **3. [Mongoose ODM](https://mongoosejs.com/)**

  **4. [Express.js](https://www.npmjs.com/package/express)**

  **5. [moment.js](https://www.npmjs.com/package/moment)**

  **6. [Insomnia](https://docs.insomnia.rest/)**

  ## Questions

  If you have any questions regarding this project, you can reach me at my GitHub account or by email at:
  <br />
  Github: [rmartin1985](https://github.com/rmartin1985)
  <br />
  Email: rickmartinatx@gmail.com

  ## License
  Licensed under the [MIT License](LICENSE)