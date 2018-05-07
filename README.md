# Server
## The Chocolate Company
![logo](https://github.com/Telerik-final-project/client/blob/master/src/assets/logo.png) 

## About
The Chocolate Company is a single-page application based on Angular 5. It's purpose is to introduce a company's mission as well as to provide career opportunities. А user is able to see the company's careers and apply for them. Then the administrator could review the application, download the applicant's CV or send him an email. Also we have provided a job filtering - filter by **keyword, career category and creation date**.
We have three user roles - **anonymous, logged in user, admin**. The admin is able to create, update or delete the dynamic buttons, shown on the Home Page. Also the admin could manage the Job Ads as well as the Contacts. This makes the app highly flexible.
We have provided a configuration through the server so a developer could configure the Facebook integration, the home page background image and the text there.

## Installation & Running
### Installation
Download/clone the repo in you local storage.
```
run:
cd choco-compnay-server
npm install
Create a DB
npm run add-migration
npm run migrate
npm run seed
```

### Running the app
```
run:
npm run start
```

## Client repo

To get a better inside of our client check out the [client repo](https://github.com/Telerik-final-project/client).
