# Nithya Event Booking 

A premium, responsive front-end web application designed for booking corporate events, private parties, and workshops. The project features a modern UI with sophisticated interactions, client-side validation, and a seamless light/dark mode toggle.

<br/>

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/340dbdff-2224-408a-813e-20154beb7bf6" />

<br/><br/>
**[🟢 View Live Demo](https://NKumar-B.github.io/SoftGrowTech_Event_booking_website/)** 
## Features

* **Premium UI/UX:** Built with a default dark theme featuring sophisticated animated glowing underlines, smooth hover transitions, and glassmorphism elements.
* **Light/Dark Mode Toggle:** Users can switch between themes instantly. The choice is saved to the browser's `localStorage`, ensuring the theme persists across pages and reloads.
* **Scroll Spy Navigation:** The navigation bar automatically highlights the active section as the user scrolls down the page, providing a great user experience.
* **Client-Side Form Validation:** The booking form prevents submission and provides real-time error feedback if fields (Name, Email, Date, Guests) are empty or formatted incorrectly.
* **Interactive Modal Popup:** Upon successful form submission, a hidden modal seamlessly animates into view displaying a summary of the user's booking details.
* **Fully Responsive:** Uses modern CSS properties to ensure the layout adapts beautifully to desktops, tablets, and mobile devices.

## Tech Stack

This project is built entirely using native web technologies, ensuring fast load times without the need for external libraries or frameworks:

* **HTML5:** Semantic structure and accessible form elements.
* **CSS3:** Custom properties (CSS Variables), Flexbox, Grid, keyframe animations, pseudo-elements (`::after`), and advanced transitions.
* **Vanilla JavaScript (ES6+):** DOM manipulation, Event Listeners, Intersection Observers (for Scroll Spy), Regex validation, and Local Storage management.

## Project Structure

```text
nithya-event-booking/
│
├── index.html       # The main landing page (Hero, Services, Contact)
├── booking.html     # The booking form and confirmation modal
├── styles.css       # All styling, animations, and theme variables
├── script.js        # Form logic, theme toggle, and scroll spy
└── README.md        # Project documentation
```

## How to Run Locally

Because this project uses standard HTML/CSS/JS, no complex build tools or package managers are required.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/NKumar-B/SoftGrowTech_Event_booking_website.git](https://github.com/NKumar-B/SoftGrowTech_Event_booking_website.git)
   ```
2. **Navigate to the directory:**
   ```bash
   cd SoftGrowTech_Event_booking_website
   ```
3. **Open the project:**
   Simply double-click the `index.html` file to open it in your default web browser. 
   
   *(Recommended: Use the "Live Server" extension in VS Code for a better development experience with hot-reloading).*

## Deployment

This project is currently deployed and hosted for free using **GitHub Pages**. 

To deploy your own version:
1. Push your code to a GitHub repository.
2. Go to your repository **Settings** > **Pages**.
3. Set the Source to **Deploy from a branch**.
4. Select your `main` branch and click **Save**. 
5. Your site will be live in a few minutes!

## Future Enhancements

While currently a static front-end, this project is designed as a foundation to scale into a production-ready, full-stack application. Planned future features include:

**Backend Integration & Database Architecture**
* **RESTful API:** Build a robust backend API using a framework like Django or FastAPI to process booking submissions and manage event inventory.
* **Relational Database:** Integrate a production-grade database like PostgreSQL to handle relational data (Users, Events, Bookings) securely.

**Frontend Modernization**
* **Component-Based UI:** Migrate the vanilla codebase to React.js (powered by Vite) for improved state management and scalability.
* **Utility-First Styling:** Transition custom CSS to Tailwind CSS to speed up development and maintain a consistent design system across new pages.

**Business Logic & Real-World Features**
* **User Authentication:** Implement secure login and registration so users can view booking history, download tickets, or cancel reservations.
* **Payment Gateway:** Connect a service like Stripe or Razorpay to process real transactions for paid event packages.
* **Automated Confirmations:** Integrate an email service (e.g., SendGrid) to automatically send PDF tickets and calendar invites upon successful booking.

**AI & Automation**
* **Smart Chat Assistant:** Add an AI-driven chatbot to act as a virtual concierge, answering venue FAQs and guiding users to the right event package.
* **Dynamic Recommendations:** Utilize predictive analytics to suggest upcoming events and workshops based on a user's past booking history.
