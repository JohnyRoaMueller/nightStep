# nightStep – A Project for Showcasing Venues

nightStep is a single-page application that allows venue operators, such as clubs and bars, to present their locations clearly and attractively. Operators can post events, upload images, and maintain a small personal blog through the application, while users in the "Guest" role can visit the individual venue pages and learn about their offerings.


## Technology Stack & Architecture

### Backend: Spring Boot
- **API Communication:** RESTful API between frontend and backend
- **Architecture:** Controller-Service-Repository pattern
- **Authentication & Security:** JWT

### Frontend: React
- **UI Framework:** Material UI components
- **Design:** Responsive design


##### Build System: Gradle

##### Database: MariaDB


## Implemented Features

- Route-based navigation through the application
- Role-based user registration
- Role-based display of functionalities
- Ability for users to edit their own data
- Event Posting functionality for hosts


## Planned Extensions

- **Lost and Found Section:** for hosts
- **Follow Feature:** guests can follow venues or events
- **Group Finding:** for guests who have indicated interest in an event



## Demo

### Overview
![Overview](demo_gifs/overview.gif)
##### Overview - mobile
<img src="demo_gifs/overview_mobile.gif" width="300" alt="Creating Event mobile" />

### Creating Guest Account
![Creating Guest Account](demo_gifs/creating_guest_account.gif)
##### Creating Guest Account - mobile
<img src="demo_gifs/creating_guest_account_mobile.gif" width="300" alt="Creating Event mobile" />

### Creating Event
![Creating Event](demo_gifs/creating_event.gif)
##### Creating Event - mobile
<img src="demo_gifs/creating_event_mobile.gif" width="300" alt="Creating Event mobile" />

