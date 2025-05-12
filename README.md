Here’s the updated `README.md` file, tailored specifically to match your folder structure (as shown in the image), with a concise description for each file.

---

```markdown
# NTWIST Frontend Assignment

## 🧾 Project Description

This project is a multi-page mini web application built using **HTML, CSS, and Vanilla JavaScript**, created as part of the NTWIST Software Test. It demonstrates core frontend development skills, including semantic HTML, responsive layouts, DOM manipulation, and form validation.

---

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

````

---

## ✅ Features Implemented

### 📄 `index.html` – Responsive Form with Validation
- **Fields**: Name, Email, and Message with HTML5 validation (`required`, `type`, `pattern`)
- **Time Tracking**: Tracks duration from first focus to submit
- **Confirmation**: Displays a success message and resets the form on submit
- **Styling**: Uses `form.css` with a fixed-width sidebar layout
- **JavaScript**: `form.js` handles logic and DOM manipulation

### 📄 `sort.html` – Sortable List Viewer
- **Static List**: Displays a list of hardcoded names
- **Sorting**: JavaScript-based sorting (no page reload)
- **Styling**: Uses `sort.css` with a sidebar layout
- **JavaScript**: `sort.js` for sort functionality

### 📄 `faq.html` – FAQ Accordion (No JS)
- **Accordion**: Fully functional using only HTML and CSS
- **Approach**: `<details>` tag for collapsible sections
- **Styling**: Defined in `faq.css`

---

## ⭐ Bonus Feature (If implemented)
- **Star Rating Widget**: Clickable 1–5 star rating system
- **Technologies**: HTML, CSS, JavaScript (no external libraries)

---

## 💡 Technical Highlights

- **Responsive Design**: Mobile-friendly using Flexbox and CSS Grid
- **Layout**: No layout shift on hover/focus; uses fixed sidebar where required
- **Accessibility**: Semantic HTML elements used for clarity and structure
- **No Libraries**: 100% Vanilla JS, HTML, and CSS

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ntwist-frontend-assignment.git
````

2. Navigate to the folder:

   ```bash
   cd ntwist-frontend-assignment
   ```

3. Open the desired HTML file in your browser:

   * `index.html` for the form
   * `sort.html` for sortable list
   * `faq.html` for the accordion

---

## 🔧 Git Usage

* Descriptive commit messages
* Organized folder structure for CSS and JS assets
* Separate files per feature for clarity and modularity

---

## 📫 Contact

For any queries or clarifications, feel free to reach out via email.

```

---

Would you like help adding the timer logic or the star rating widget too?
```
