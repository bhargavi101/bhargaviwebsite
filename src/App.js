import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resumeData:{
        "main": {
          "name":"Bhargavi Angadi",
          "occupation":"Front-end developer, programmer and designer",
          "description1":"An Enthusiastic",
          "description2": "creating awesome and fun websites. Lets ",
          "image":"profilepic.jpg",
          "bio":"I love designing and creating simple, intutive and fun user experiences that keep customers engaged and happy. I am passionate about designing and coding.The balance between the two helps me to understand the feasibility and application of each product. Each design sprint helps me learn something new and evolve as an UI Developer.",
          "email": "bhargavia93@gmail.com",
          "address":{
            "street":"1440 E Broadway Rd",
            "city":"Tempe",
            "state":"AZ",
            "zip": "85282"
          },
          "social":[
            {
              "name":"facebook",
              "url":"https://www.facebook.com/bhargavi.angadi",
              "className":"fa fa-facebook"
            },
            {
              "name":"twitter",
              "url":"https://twitter.com/BhargaviAngadi",
              "className":"fa fa-twitter"
            },
            {
              "name":"linkedin",
              "url":"https://www.linkedin.com/in/bhargavi-a-089a5b63/",
              "className":"fa fa-linkedin"
            },
            {
              "name":"instagram",
              "url":"https://www.instagram.com/bhargaviangadi/",
              "className":"fa fa-instagram"
            },
            {
              "name":"github",
              "url":"https://github.com/bhargavi101",
              "className":"fa fa-github"
            }
          ]
        },
        "resume":{
          "education":[
            {
              "school":"University of Texas at Tyler",
              "degree":"Master of Science - Computer Science",
              "graduated":"Summer 2018",
              "gpa": "4.0"

            },
            {
              "school":"Jawaharlal Nehru Technological University",
              "degree":"Bachelor of Technology - Civil Engineering",
              "graduated":"May 2015",
              "gpa": "3.75"

            }
          ],
          "work":[
            {
              "company":"Matson Navigation",
              "title":"Front End Developer ",
              "years":"Aug 2018 - Present",
              "description":"Working in designing the user interface for an application.Responsible of designing application forms along with validations and also responsible for building the client-side application using the Rest Services.Involved in improving the performance of the applications.",
              "skills": "HTML5, CSS3, ES6, ReactJS, Redux, MySQL database, GIT"
            },
            {
              "company":"University of Texas at Tyler",
              "title":"Graduate Assistant ",
              "years":"January 2017 - May 2018",
              "description":"Worked in developing a responsive bootstrap application. Involved in designing the application from mockups and designing login page, dashboards and work order forms. Involved in integrating the application with services.",
              "skills": "HTML5, CSS3,ES6, React JS, Bootstrap, Node JS(Server), GIT"
            },
            {
              "company":"Spatial Consultants",
              "title":"Front End Developer",
              "years":"June 2015 - February 2016",
              "description":"Worked on designing an application for the clients to give a glimpse of organization projects. Designed in developing the dashboards for the applications",
              "skills": "HTML5, CSS3, JavaScript, jQuery, Bootstrap, MySQL , GIT"
            },
            {
              "company":"MC Designs",
              "title":"Web Developer (Intern)",
              "years":"April 2014 - June 2014",
              "description":"Worked in developing a responsive web pages using Bootstrap to improve the user experienece.Experienced in using CSS framework.",
              "skills": "HTML5, CSS3, JavaScript, jQuery, Bootstrap"
            }
          ],
          "skills":[
            {
              "name":"HTML5",
              "level":"90%"
            },
            {
              "name":"CSS3",
              "level":"90%"
            },
            {
              "name":"JavaScript",
              "level":"80%"
            },
            {
              "name":"Java",
              "level":"70%"
            },
            {
              "name":"ReactJS",
              "level":"75%"
            },
            {
              "name":"jQuery",
              "level":"80%"
            },
            {
              "name":"ES6",
              "level":"75%"
            }
          ]
        },
        "portfolio":{
          "projects": [
            {
              "title":"Kindle Book Prototype",
              "description":"Developed an online marketplace where users can buy e-books. Implemented the functionalities like displaying the search list and redirecting the selected book to Google play store. Used the Google Book API to fetch the list of the book.",
              "skills":"HTML5, CSS3, ES6, React JS, Google APIs",
              "url":"https://github.com/bhargavi101/KindelPrototype"
            },
            {
              "title":"Interesting Details of the Location – Academic Project",
              "description":"Developed a context aware application, Local Fun. Implemented functionalities to display the videos and images and also notifying the current weather condition for the location search. Developed the application using Google Place API, YouTube API and open weather API.",
              "skills":"HTML5, CSS3, JavaScript, jQuery, Google API, You Tube API, Open Weather API",
              "url":"https://github.com/bhargavi101/LocalFun"
            },
            {
              "title":"Canvas Instructor’s Application – Android",
              "description":"Developed and educational platform called Instructor's application. Designed registration and login form with validations. Comprised of different functionalities for uploading, downloading the course content and also add new courses or else take the existing courses. Implemented procedures to integrate with database to retrieve and store data in database. ",
              "skills":"Android, Java, Firebase Database",
              "url":"https://github.com/bhargavi101/CanvasPrototypeAndroid"
            },
            {
              "title":"Weather Forecast Prototype – Android",
              "description":"Developed and an application to know the weather of the location search. Implemented functionalities to retrieve the weather forecast from Yahoo Weather API.",
              "skills":"Android, Java, Yahoo Weather API",
              "url":"https://github.com/bhargavi101/Weatherapp"
            },
            {
              "title":"E-Commerce Web Site",
              "description":"Developed and e-commerce website using shopify platform. Created the theme in shopify and designed the website from the mockups, dashboards and navigation between different pages. Implemented functionalities for animation using jQuery coursel. ",
              "skills":"Shopify, HTML5, CSS3, JavaScript, jQuery",
              "url":""
            },
            {
              "title":"Predicting AirBnb Price Listing Using Big Data Predicting AirBnb Price Listing Using Big Data ",
              "description":"Gathered data from open sources,performing big data Analysis using R Language. Created a display of visualizing metric using R libraries. Predicted the future prices based on location, room type and neighborhood. Used the k-algorithm, clustering and SVM algorithm to find the best price for analyzing the data.",
              "skills":"K-Algorithm, Clustering, SVC algorithm, R Programming Language",
              "url":""
            }
          ]
        }
      },
      dataFetched: false,
    }
  }

  // componentDidMount = () => {
  //   this.getData()
  // }
  //
  // getData = () =>{
  //   axios
  //   .get(`http://localhost:3000/resumeData.json`)
  //   .then((response) => {
  //     this.setState({
  //       resumeData: response.data,
  //       dataFetched: true,
  //     })
  //   })
  //   .catch((error) => {
  //
  //   })
  // }
  // getData(){
  //   $.ajax({
  //     url:'http://localhost:3000/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       console.log(data)
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       alert(err);
  //     }
  //   });
  // }
  render() {
    return (
        <div className="App">
          <Header resumeInfo = {this.state.resumeData.main}/>
          <About  resumeInfo= {this.state.resumeData.main}/>
          <Resume resumeInfo= {this.state.resumeData.resume}/>
          <Projects resumeInfo= {this.state.resumeData.portfolio}/>
          <Contact resumeInfo={this.state.resumeData.main}/>
        </div>
    );
  }
}

export default App;
