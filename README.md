# nightStep – A Project for Showcasing Venues

nightStep is a single-page application (SPA) that enables venues, such as clubs and bars, to showcase their locations, post events, and share content in a clear and engaging way. The application provides interactive features for browsing events, viewing venue details, and exploring multimedia content.


## Technology Stack & Architecture

### Backend: Spring Boot
- RESTful API for frontend communication
- Layered architecture: Controller → Service → Repository
- JWT-based authentication and role-based authorization
- Data persistence in MongoDB with caching via Redis

### Frontend: React
- Single-Page Application (SPA) built with React
- Functional components with Hooks for state and side effects
- Material-UI for reusable, responsive components

### Build System
- Gradle (Backend)
- npm (Frontend)

## Implemented Features
- Route-based navigation with React Router for a seamless SPA experience
- Role-based user registration and login with JWT authentication
- Conditional rendering and access control based on user roles
- User profile management: view and edit personal data
- Event management for hosts: create, update, and delete events
- Responsive design for desktop and mobile devices


## Planned Extensions
- **Lost & Found Section:** a dedicated area for hosts to manage lost items or announcements
- **Follow Feature:** allow users to follow venues or events and receive updates
- **Group Discovery:** help users find groups attending the same events
- **Enhanced Search & Filtering:** enable advanced search for venues and events by category, location, or date
- **Notifications System:** real-time alerts for new events or updates
- **Media Management:** allow hosts to upload and organize multiple images and videos per event
- **Analytics Dashboard:** provide hosts with basic metrics on event attendance and user engagement




### Demo

#### Overview  
![Overview](demo_gifs/overview.gif)
Shows the main dashboard with venue listings and navigation.
##### Overview - mobile
<img src="demo_gifs/overview_mobile.gif" width="300" alt="Overview mobile" />
Shows the responsive layout with collapsible menus for small screens.

---

#### Creating Guest Account
![Creating Guest Account](demo_gifs/creating_guest_account.gif)
Demonstrates user registration, input validation, and role assignment.
##### Creating Guest Account - mobile
<img src="demo_gifs/creating_guest_account_mobile.gif" width="300" alt="Creating Guest Account mobile" />
Shows the same registration process adapted for mobile screens.

---

#### Creating Event
![Creating Event](demo_gifs/creating_event.gif)
Shows how a host can create a new event with title, description, date, and image upload.
##### Creating Event - mobile
<img src="demo_gifs/creating_event_mobile.gif" width="300" alt="Creating Event mobile" />
Shows the same workflow optimized for mobile, demonstrating responsive design.
