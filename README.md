# Logistics UK Driver and Menu Listing Application

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Debouncing for Search](#debouncing-for-search)
- [Installation and Setup](#installation-and-setup)
- [License](#license)

## Project Overview
This project is a React application designed to list drivers and menu items from provided JSON data files. It allows users to:

- View a list of drivers with details about their weekly activity.
- View menu items from a data file.
- Search for drivers by name or vehicle registration.
- Filter activity information by day of the week, showing if drivers had activities on a particular day.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Build Tool:**   Create React App
- **State Management:** React Hooks (`useState`)
- **Styling:** Tailwind CSS for UI development
- **Other Tools:**  Prettier

# Installation and Setup

## Clone repo
 ```bash
   git clone https://github.com/your-username/logistics_site.git

## Navigate to folder
 ```bash
cd logistics_site

## Run
  ```bash
npm install
  ```bash
npm start




## Folder Structure

```bash
.
├── public/               # Public static assets e.g logo.png
├── src/
│   ├── components/       # Header.jsx, SideMenu.jsx, DriverList.jsx, Search)
│   ├── data/             # Static JSON data files (drivers.json, menu.json)
│   ├── styles/           # Tailwind CSS configuration
│   ├── hooks/            # Custom hooks (useDebounce)
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point for React
│   
├── package.json          # Project packages/dependencies
├── postcss.config.js     # PostCSS config
├── tailwind.config.js    # TailwindCSS config
├── .gitignore            # Ignore files (node_modules/)
└── README.md             # Project documentation
