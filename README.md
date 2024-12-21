Responsive Design:
I implemented CSS Grid Layout to ensure the dashboard adapts seamlessly across various devices, including desktops, tablets, and mobiles.
Media queries were added to enable smooth layout transitions for different screen widths, optimizing usability on all devices.

Form Validation:
I made sure that users can't submit empty forms and that the data entered is correct.

Main Components:
I broke the dashboard into reusable parts like Navbar, Sidebar, CenterArea, Position, and Pogressbar. This makes the code cleaner and easier to manage.

Data Structure :
I structured the Sidebar and Progressbar data into arrays, simplifying their management and rendering. This approach enhances code readability and maintainability.
It also boosts performance by efficiently iterating through the arrays.

Technologies Used:
React.js for building the frontend.
Tailwind CSS for styling (with a bit of custom CSS).
React Dropzone for handling file uploads.
React-Hook-Form for form validation.

Approach and Structure of Dashboard

App Component:
The main component that holds the entire dashboard layout, including the Navbar, Sidebar, CenterAreaArea, and Progressbar.

Navbar:

A navigation bar with icons for notifications and user profile. It also shows the logo and title.

Sidebar:

A vertical menu with links like Dashboard, MyCases, and Activities. I used an array to store the sidebar links for better performance.
CenterArea:

This section shows dynamic content, like the Timeline and Claimbox, which tracks the progress of current claims.

Progressbar:
This ensures clear status for users.A step tracker displays progress, with each position according to completion status.

Challenges:

Ensuring Responsiveness:
Making the dashboard look good on all devices was a challenge, but I used CSS Grid and media queries to make the layout adjust to different screen sizes.

Form Validation:
I spent some time making sure file uploads worked properly. I used React Dropzone to handle file drops and validated that the files were the right type and size.

DESKTOP VIEW:
![image](https://github.com/user-attachments/assets/7816c91b-cb45-4639-9b2a-d9765f9ba108)

MOBILE VIEW:
![image](https://github.com/user-attachments/assets/37647768-cdd8-4b0c-961f-caf0f2fcaba0)
![image](https://github.com/user-attachments/assets/f6272460-3979-4009-9964-0957d6b8fd5f)

IPAD VIEW:
![image](https://github.com/user-attachments/assets/32f4994d-1711-4ef0-84d9-60f26b7686eb)





