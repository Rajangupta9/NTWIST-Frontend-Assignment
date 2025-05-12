# NTWIST Frontend Assignment

## 🧾 Project Description

This project is a multi-page mini web application built using **HTML, CSS, and Vanilla JavaScript**, created as part of the NTWIST Software Test. It showcases core frontend development skills, including semantic HTML, responsive design, DOM manipulation, and form validation.

## 📁 Folder Structure

```
NTWIST-Software-Test/
├── assets/
│   ├── css/
│   │   ├── faq.css      # Styles for the FAQ accordion
│   │   ├── form.css     # Styles for the form page
│   │   ├── main.css     # Common/shared styles
│   │   └── sort.css     # Styles for the sortable list
│   └── js/
│       ├── form.js      # Handles form validation, timing, and interaction
│       └── sort.js      # Handles alphabetical sorting of names
├── faq.html             # Page 3: FAQ accordion using only HTML & CSS
├── index.html           # Page 1: Responsive form with validation and timer
├── sort.html            # Page 2: Sortable list viewer
└── README.md            # Project documentation
```

## ✅ Features Implemented

### 📄 `index.html` – Responsive Form with Validation
- **Form Fields**: 
  - Name (required)
  - Email (required, validated)
  - Message (required)
- **Advanced Validation**:
  - HTML5 built-in validation
  - Custom pattern matching
  - Client-side error handling
- **Time Tracking**:
  - Measures user interaction duration
  - Captures time from first focus to form submission
- **User Experience**:
  - Instant feedback on form submission
  - Clear success message
  - Automatic form reset
- **Responsive Design**:
  - Mobile-friendly layout
  - Fixed-width sidebar
  - Consistent styling across devices

### 📄 `sort.html` – Sortable List Viewer
- **Name List**:
  - Predefined list of names
  - Dynamic sorting functionality
- **Sorting Mechanism**:
  - Alphabetical order
  - Client-side sorting (no page reload)
- **Interactive UI**:
  - Clean, intuitive interface
  - Sidebar layout
  - Smooth sorting transition

### 📄 `faq.html` – FAQ Accordion (No JavaScript)
- **Accordion Design**:
  - Fully functional using HTML and CSS
  - Utilizes `<details>` and `<summary>` tags
- **Styling Highlights**:
  - Custom CSS for accordion interactions
  - Smooth expand/collapse animations
  - Accessible design

## ⭐ Bonus Features

### Star Rating Widget
- **Functionality**:
  - Interactive 1-5 star rating system
  - Vanilla JavaScript implementation
- **Features**:
  - Hover and click state management
  - Visual feedback
  - No external libraries used

## 💡 Technical Highlights

- **Pure Frontend Stack**:
  - 100% Vanilla JavaScript
  - Semantic HTML5
  - Modern CSS techniques
- **Responsive Design**:
  - Flexbox and CSS Grid
  - Mobile-first approach
  - No layout shifts
- **Performance Optimization**:
  - Minimal external dependencies
  - Efficient DOM manipulation
- **Accessibility**:
  - Semantic HTML elements
  - WCAG considerations
  - Clear, readable interface

## 🚀 Quick Start

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ntwist-frontend-assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ntwist-frontend-assignment
   ```

3. Open project files:
   - `index.html`: Form page
   - `sort.html`: Sortable list
   - `faq.html`: Accordion demonstration

### Browser Compatibility
- Modern browsers supported
- Tested on:
  - Chrome
  - Firefox
  - Safari
  - Edge

## 🔧 Development Approach

- **Version Control**:
  - Descriptive commit messages
  - Feature-based branching strategy
- **Code Organization**:
  - Modular file structure
  - Separate concerns (HTML, CSS, JS)
  - Clean, readable code

## 📫 Contact & Support

**Project Maintainer**: [Your Name]
- Email: [your.email@example.com]
- GitHub: [Your GitHub Profile]

Feel free to open issues or submit pull requests for improvements or bug fixes.