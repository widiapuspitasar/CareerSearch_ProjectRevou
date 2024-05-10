<h1 align="center">REVOU PROJECT</h1>
<h2 align="center">CAREERSEARCH</h2>

<p align="center">
<img src="public\assets\logo.png.png" width="200" height="200" />
![logo](https://github.com/widiapuspitasar/CareerSearch_ProjectRevou/blob/main/company/public/assets/logo.png?raw=true)
 
<h4 align="center"> GROUP C</h4>


## Overview

Welcome to CareerSearch, a modern job search platform designed to simplify the job search process and empower users with valuable resources and insights for career development. Whether you're a seasoned professional or just starting your career journey, CareerSearch is here to help you find your next opportunity and navigate the complexities of the job market with ease.

## Table of Contents
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Demo User Flow](#demo-user-flow)
- [Demo Company Flow](#demo-company-flow)
- [Contributing](#contributing)
- [Contact](#contact)


## Description
CareerSearch is a modern job search platform designed to simplify the job search process and empower users with valuable resources and insights for career development. The platform aims to connect job seekers with relevant job opportunities while providing transparency in application tracking and personalized recommendations.

## Tech Stack
- *Frontend:* React with Vite, Tailwind CSS, Material-UI
- *Backend:* Python with Flask
- *Database:* MySQL
- *Integration:* REST API with Flask, Docker
- *Deploy:* Vercel and Railway

## Features
- *Efficient Job Search:* Browse and search for job opportunities across various industries and locations.
- *Application Tracking:* Track the status of job applications in real-time and receive updates on application progress.
- *Profile Creation:* Create detailed profiles showcasing skills, experiences, and qualifications.
- *Resourceful Content:* Access valuable resources such as articles, blog posts, and videos for resume writing, interview preparation, and career development.
- *REST API Integration:* Utilize RESTful APIs for seamless communication between frontend and backend systems.
- *Docker Integration:* Containerize the application with Docker for easy deployment and scalability.

## Installation
1. Clone the repository: 
```bash
#Frontend
git clone https://github.com/widiapuspitasar/CareerSearch_ProjectRevou.git

#Backend
git clone https://github.com/widiapuspitasar/backend_project.git
```
2. Install dependencies: npm install (for frontend) and pip install -r requirements.txt (for backend)
```bash
#Frontend
npm install

#Backend
pip install -r requirements.txt
```

3. Start the application: 

```bash
#Frontend
npm run dev

#Backend
flask --app index run --debug
```

### Building a REST API with Flask, MySQL, Docker, and React

This guide outlines the steps to create a REST API using Flask, MySQL database, Docker, and integrate it with a React frontend.

### Step 1: Prepare MySQL Database
- Ensure you have MySQL server installed.
- Create the necessary database and tables to store data. You can use SQL commands or database management tools like phpMyAdmin.

### Step 2: Create REST API with Flask
- Install Flask and Flask-SQLAlchemy extension to connect Flask with MySQL.
- Develop API endpoints to perform CRUD operations (Create, Read, Update, Delete) on data in the MySQL database.
- Configure MySQL database connection settings in the Flask application.

### Step 3: Dockerize Flask App
- Create a Dockerfile to configure the Docker container for your Flask application.
- Specify dependencies and necessary environment configurations in the Dockerfile.
- Create a docker-compose.yml file if needed to set up services to be used alongside the Flask application, such as MySQL service.

### Step 4: Display API through React
- Develop a React application using Create React App or other React application builders.
- Utilize fetch or axios to make HTTP requests to the API created with Flask.
- Set state and display the data received from the Flask API in React components.

### Example Implementation
- You can create Python models for your MySQL tables using Flask-SQLAlchemy.
- Develop API endpoints using Flask with Flask decorators like @app.route('/').
- Dockerize the Flask application with a Dockerfile that configures the environment and dependencies of the application.
- Create a React application containing components to display data from the Flask API.

### Notes
- Make sure to configure CORS (Cross-Origin Resource Sharing) to allow the React application to communicate with the Flask API running on a different domain.
- Don't forget to connect the Flask application to the MySQL database using the correct configuration, including host, username, password, and database name.


### Prerequisites

Before running the application, make sure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- MySQL: [Install MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

## Usage
- Visit the CareerSearch website and sign up for an account at https://career-search-project-revou-widiapuspitasars-projects.vercel.app
- Documentation for the API endpoints can be found at https://documenter.getpostman.com/view/32968385/2sA3JM6Lg7
- Explore job opportunities, track your applications, and access valuable resources to advance your career.
- Customize your profile to showcase your skills and experiences to potential employers.
- Connect with recruiters and employers to expand your professional network and discover new opportunities.

## Schema Application
Class Diagram 

![Class Diagram](public\assets\Readme\db-schema.png)

Arsitecture Diagram 

![Class Diagram](public\assets\Readme\arsitecture_diagram.png)

Rest API Architecture System

![Class Diagram](public\assets\Readme\rest_api_schema.png)

## Demo User Flow

### Home Page 
![Home Page](public\assets\Readme\home_page.png)

### About Us
![Home Page](public\assets\Readme\aboutUs.png)

### Registration and Login User
1. User navigates to the registration page.
2. User fills out the registration form with their email, name, and password.
3. User submits the registration form.
4. Upon successful registration, user is redirected to the login page.
5. User logs in using their registered email and password.

![User Login](public\assets\Readme\user_login.png)

![User Signup](public\assets\Readme\user_signup.png)

### Home Page User
1. After successful login, user is automatically redirected to the home page.
2. User sees a list of job postings uploaded by various companies.
3. User can click on the love icon to save a job posting as favorite.
4. User can click on the job title to view its details.
5. User can apply for a job by clicking the "Apply Job" button.

![Company Home Page](public\assets\Readme\user_home.png)

### Job Details Page
1. User clicks on the job title from the home page to view its details.
2. User sees detailed information about the job, including job description, requirements, and application process.
3. User clicks the "Apply Job" button to apply for the job.

![Company Home Page](public\assets\Readme\job_detail.png)

### Favorite Jobs
1. User can view their list of favorite jobs on the home page.
2. User can click on the favorite job to view its details.
3. User can click the unlove icon to remove a job from the list of favorites.

![Company Home Page](public\assets\Readme\user_favorite.png)

### Profile Creation and Editing
1. User clicks on the profile icon in the navigation bar to access the profile page.
2. If user has not created a profile yet, they are prompted to create one.
3. User fills out the profile information and submits the form to create a profile.
4. User can click the "Edit Profile" button to update their profile information.

![Company Home Page](public\assets\Readme\user_profile_create.png)


## Demo Company  Flow
### Company Login and Sign UP
1. Company navigates to the registration page.
2. Company fills out the registration form with their email, company name, representative's name, and password.
3. Company submits the registration form.
4. Upon successful registration, company is redirected to the login page.
5. Company logs in using their registered email and password.

![Company Login](public\assets\Readme\company_login.png)

![Company Signup](public\assets\Readme\company_signup.png)


### Company Home Page

1. After successful login, company is automatically redirected to the home page.
2. Company can see a list of job postings created by their company.
3. Company can click the "Post Job" button to create a new job posting.
4. Company fills out the job posting form with all required information and clicks "Post" to publish the job.
5. Newly posted job listings are displayed on the home page.

![User Home Page](public\assets\Readme\company_home.png)

![User Home Page](public\assets\Readme\company_post_job.png)

### List List Applies

1. Company can view a list of job applications received for their job postings.
2. Company can click on an applicant's name to view their profile and application details.
3. Company can see the applicant's profile details and update the application status accordingly.

![User Home Page](public\assets\Readme\company_listapplies.png)

![User Home Page](public\assets\Readme\company_viewprofile.png)

### Profile Creation and Editing
1. Company clicks on the profile icon in the navigation bar to access the profile page.
2. If company has not created a profile yet, they are prompted to create one.
3. Company fills out the profile information and submits the form to create a profile.
4. Company can click the "Edit Profile" button to update their profile information.

![User Home Page](public\assets\Readme\company_createprofile.png)

![User Home Page](public\assets\Readme\company_profile.png)

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs, feature requests, or enhancements you'd like to see in CareerSearch.

## Contact
You can contact our team via email:

- **Widia Puspitasari** (Team Lead | Backend Engineer)  
  Email: [puspitasariwidia@gmail.com](mailto:puspitasariwidia@gmail.com)

- **Kevin Jeonghun** (Frontend Engineer)  
  Email: [kevinjeonghun@gmail.com](mailto:kevinjeonghun@gmail.com)

- **Muhammad Umar** (Frontend Engineer)  
  Email: [umartsqb@gmail.com](mailto:umartsqb@gmail.com)

- **Muhammad Aldiansyah** (Documentation)  
  Email: [aldiansyahwork@gmail.com](mailto:aldiansyahwork@gmail.com)
