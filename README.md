# Simple Searchable Contact Modals with Redux in React
This repository demonstrates the use of Redux for state management in a React project that implements two searchable contact modals:

* **US Contacts**: A modal to view and search a list of US-based contacts.
* **Global Contacts**: A separate modal to search and manage contacts from around the world.

## Getting Started

### Clone the repository:

```Bash
git clone https://github.com/SM-Haris/redux-demo-app.git
```

Use code with caution.
content_copy

### Install dependencies:

```Bash
npm install
```

Use code with caution.
content_copy

### Run the development server:

```Bash
npm start
```

Use code with caution.
content_copy
This will start the development server and open the application in your browser.

## Project Structure
The project follows a well-organized structure:

* **src**: Contains React components and Redux logic for contact modals and search functionality.
* **components**: Houses reusable React components for modals and search bars.
* **store**: Defines the Redux store, reducers, and actions to manage contact data and search queries.
* **App.js**: The main application entry point that renders the modal components.

## Functionality
The application provides two functionalities:

* **Searchable Contact Modals**: Clicking dedicated buttons opens respective modals for US and Global contacts. Each modal displays a list of contacts and allows searching by name or other relevant criteria.
* **Contact Details View**: Selecting a contact from either modal leads to another modal displaying their detailed information.

## Learning Resources
For a deeper understanding of Redux and React integration, refer to the official documentation:

* Redux: https://redux.js.org/
* React-Redux: https://redux.js.org/api/bindactioncreators

This repository provides a foundational example. You can extend it to include features like adding new contacts, editing existing ones, and implementing pagination for extensive contact lists.