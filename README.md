# Profile Card with Dark Mode Toggle

## Overview
This is a simple and elegant profile card with a dark mode toggle feature built using HTML, Tailwind CSS, and JavaScript. The profile card includes personal details, a profile picture, a short bio, and social media links. It also supports dark mode, with the user's preference saved in local storage.

## Features
- Responsive design with Tailwind CSS.
- Dark mode toggle with local storage persistence.
- Hover effects for interactive UI elements.
- Social media links with hover animations.
- Smooth transitions for UI elements.

## Technologies Used
- **HTML**: Structure of the profile card.
- **Tailwind CSS**: Styling and responsiveness.
- **JavaScript**: Dark mode toggle functionality.
- **Remix Icons**: Icons for social media links.

## Setup & Usage
1. Clone the repository or download the project files.
2. Open the folder  in any code editor (Vs Code), and then open with live server to view the profile card.
3. Click the toggle button to switch between light and dark mode.
4. Dark mode preference is stored in local storage.

## File Structure
```
|-- index.html   # Main HTML file
|-- index.js     # JavaScript for dark mode toggle
```

## Dark Mode Functionality
- When the page loads, it checks if dark mode is enabled in local storage.
- If enabled, it applies the `dark` class to the `html` tag.
- The toggle button updates its position accordingly.
- Clicking the toggle button switches modes and updates local storage.


