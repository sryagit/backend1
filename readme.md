Here’s your ready-to-use **`README.md`** file 👇
(You can copy and paste it directly into your project root folder.)

---

````markdown
# 🚀 Backend Server (Node.js + Express)

This is a simple **Node.js + Express backend** project that displays a "Hello World" message.  
It is deployed live on **Render**:  
👉 [https://backend1-wvtt.onrender.com](https://backend1-wvtt.onrender.com)

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **Render (for deployment)**
- **Git & GitHub (for version control)**

---

## 📦 Project Setup

### 1️⃣ Create the Project Folder
```bash
mkdir backend
cd backend
````

### 2️⃣ Initialize Node.js

```bash
npm init -y
```

### 3️⃣ Install Express

```bash
npm install express
```

---

## 🧠 Code (index.js)

```js
// Import express
const express = require('express');

// Create an app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 🧩 Git Commands

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/sryagit/backend1.git
git branch -M main
git push -u origin main --force
```

---

## 🌐 Deployment on Render

1. Visit [Render.com](https://render.com)
2. Create a new **Web Service**
3. Connect your GitHub repository
4. Set build command:

   ```
   npm install
   ```
5. Set start command:

   ```
   node index.js
   ```
6. Once deployed, your backend will be live at:
   👉 [https://backend1-wvtt.onrender.com](https://backend1-wvtt.onrender.com)

---

## 📜 License

This project is open source and available under the **MIT License**.

---

## 👤 Author

**Suraj Yadav**
🔗 GitHub: [@sryagit](https://github.com/sryagit)

```

---

Would you like me to make it look **more professional** with badges (Node.js version, Render deploy status, etc.) at the top?
```
