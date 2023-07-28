# User Management Web Application

This is a simple User Management web application built using HTML, CSS, and JavaScript. The application allows users to add new users and displays the list of users in a table format. Below, you'll find a brief overview of the UI components and their functionalities.

## UI Components

### 1.New User Form

The "New User" form is used to add new users to the system. It contains the following input fields:

- Username: Enter the username of the new user (required).
- Display Name: Enter the display name of the new user (required).
- Phone: Enter the phone number of the new user (required).
- Email: Enter the email address of the new user (required).
- User Roles: Select the user role for the new user from the dropdown list. Options include "Guest," "Admin," and "Superadmin."
  Enabled: Check the box to enable the user.

Clicking the "Save User" button will add the new user to the table below.

### 2. User Table

The table displays the list of users that have been added. It has the following columns:

- ID: The unique ID assigned to each user, automatically generated when a new user is added.
- User Name: The username of the user.
- Email: The email address of the user.
- Enabled: Indicates whether the user is enabled or not.

Additionally, there are "Filter" icons on the column headers, but the filtering functionality is not implemented in the current version.

## Application Behavior

1. When the page loads, you will see an empty table with the "New User" form on the right side.

2. To add a new user, fill in the required information in the form and click the "Save User" button. The user will be added to the table with a unique ID.

3. The form can be reset after adding a user by clicking the "Save User" button. The user input fields will be cleared for the next entry.

## How To Run the Application

1. Save the provided HTML, CSS, and JavaScript code in separate files with the following names:

- HTML: index.html
- CSS: style.css
- JavaScript: app.js
- Font Awesome CSS: Include the link to Font Awesome CSS as given in the provided code.

2. Place these files in the same directory on your web server or local machine.

3. Open the index.html file in a web browser. You should see the User Management web application.

4. Use the "New User" form to add new users, and the table will be populated with the user information.

## Note

- The application doesn't have any server-side functionality, so the user data will not persist if the page is refreshed or closed. This is just a front-end prototype for demonstration purposes.

- The filtering functionality on the table is not implemented in the current version. It can be added in the future for better user experience.

This README provides an overview of the User Management web application, explaining its UI components, functionalities, and usage instructions. If you have any specific questions or need further assistance, don't hesitate to reach out to me.
