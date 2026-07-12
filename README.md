# DevLens

> Discover GitHub developers, explore repositories, analyze project statistics, and read repository documentation—all from one clean, modern interface.

**Live Demo:** https://dev-lens-ten.vercel.app

**Repository:** https://github.com/Dannyk24/dev-lens

---

## 📖 Overview

DevLens is a modern GitHub explorer built with React that allows users to discover developers, inspect repositories, analyze repository statistics, and browse project documentation without leaving the application.

Rather than being another GitHub clone, DevLens focuses on presenting the most useful information in a clean, responsive, and user-friendly experience. Users can search for developers or repositories, navigate through detailed profile pages, inspect repository metadata, read rendered README files, explore contributors, and discover related repositories based on project topics.

This project was built to strengthen my understanding of modern frontend development, asynchronous data fetching, React hooks, routing, API integration, state management, component architecture, and user experience.

---

# ✨ Features

## 🔍 Global Search

* Search GitHub developers by username
* Search repositories by name
* Debounced search requests
* Pagination support
* Instant switching between developer and repository results

---

## 👤 Developer Profiles

Each developer profile includes:

* Profile picture
* Name
* Username
* Bio
* Company
* Location
* Website
* Followers
* Following
* Public repositories
* Account creation date
* Direct link to GitHub profile

---

## 📚 Repository Details

Every repository page displays:

* Repository description
* Owner information
* Stars
* Forks
* Watchers
* Open issues
* Programming language
* Topics
* Creation date
* Last updated
* License information

---

## 📄 README Rendering

Repository README files are rendered directly inside the application using Markdown.

Supports:

* GitHub Flavoured Markdown
* Headings
* Lists
* Tables
* Blockquotes
* Links
* Code blocks
* Inline code
* Syntax highlighting

Repositories without a README are handled gracefully.

---

## 👥 Top Contributors

Displays the top contributors for every repository together with their contribution counts.

---

## 📊 Repository Statistics

Repository statistics include:

* Total commits (calculated from contributor data)
* Total contributors
* Creation date
* Last updated time

---

## 🧭 Related Repositories

Discover repositories related to the current project using GitHub repository topics.

---

## ⚡ Performance Features

* Debounced search input
* Parallel API requests using `Promise.all`
* Loading states
* Skeleton loading components
* Error boundaries and retry actions
* Efficient component structure
* Responsive layouts

---

## 🚨 Error Handling

DevLens gracefully handles situations such as:

* Failed API requests
* Missing repository README files
* Empty search results
* Network failures
* Invalid repositories
* Invalid developer usernames

Each error screen includes a retry action where appropriate.

---

# 🛠 Tech Stack

### Frontend

* React
* React Router
* Axios

### Styling

* CSS
* CSS Variables
* Responsive Flexbox/Grid Layouts

### Markdown

* React Markdown
* Remark GFM
* Rehype Highlight

### Icons

* Lucide React

### Date Formatting

* Day.js

### APIs

GitHub REST API

---

# 📁 Project Structure

```text
src/
│
├── api/
├── components/
│   ├── ui/
│   ├── DeveloperCard/
│   ├── RepoCard/
│   ├── Loader/
│   └── ...
│
├── pages/
│   ├── HomePage/
│   ├── ProfilePage/
│   ├── RepoDetailsPage/
│   └── ...
│
├── utils/
│
├── hooks/
│
├── assets/
│
└── App.jsx
```

---

# 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/Dannyk24/dev-lens.git
```

Navigate into the project.

```bash
cd dev-lens
```

Install dependencies.

```bash
npm install
```

Create an environment file.

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

Run the development server.

```bash
npm run dev
```

---

# 🧠 Concepts Practiced

During this project I worked extensively with:

* React Hooks
* Custom utility functions
* Component composition
* API abstraction
* Async/await
* Axios instances
* Promise.all
* Debouncing
* Request cancellation
* Conditional rendering
* Loading states
* Skeleton UI
* Error handling
* Pagination
* Markdown rendering
* Responsive design
* State management
* Reusable components

---

# 💡 Challenges Faced

Some of the interesting problems solved during development included:

* Building an efficient debounced search experience.
* Coordinating multiple asynchronous GitHub API requests.
* Rendering GitHub README files from Base64 encoded responses.
* Handling repositories that do not contain README files.
* Displaying loading skeletons while data was being fetched.
* Calculating repository statistics from contributor data.
* Managing multiple loading and error states across different pages.
* Preventing unnecessary API requests while users were typing.
* Organizing a growing React application into reusable components.

---

# 🔮 Future Improvements

Potential future additions include:

* Dark mode
* Advanced filtering options
* Sorting repositories
* Repository language charts
* Search history
* Favorite developers
* Favorite repositories
* Infinite scrolling
* Organization pages
* GitHub Gist support
* Trending repositories
* Recent searches
* Better Markdown image handling
* Mobile gesture improvements

---

# 📸 Screenshots

<img width="947" height="442" alt="image" src="https://github.com/user-attachments/assets/cfd91098-fee5-46b3-96f5-2c490c07304c" />
<img width="948" height="437" alt="image" src="https://github.com/user-attachments/assets/67a357e8-f4b5-45f1-a8ad-098eed64e736" />
<img width="946" height="445" alt="image" src="https://github.com/user-attachments/assets/acb237f3-2ef4-4f70-8dd7-ef5452fb15bb" />






---

# 🙏 Acknowledgements

* GitHub REST API
* React
* Vercel
* Lucide React
* React Markdown
* Day.js

---

# 📄 License

This project is open source and available under the MIT License.

---

# 👨‍💻 Author

**Daniel Olajire**

GitHub: https://github.com/Dannyk24

If you found this project interesting or have any feedback, feel free to open an issue or connect with me on GitHub.
