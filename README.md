# 🍪 Cookie Cache Bakery

An interactive web-based simulator for understanding **Page Replacement Algorithms** through a bakery-themed learning experience.

Currently hosting the website @ https://justinesicat.github.io/cookiecachebakery/ (last updated June 05, 2026).

## 📖 About the Project

**Cookie Cache Bakery** is an educational web application designed to simplify the understanding of **Operating Systems memory management concepts**, specifically **Page Replacement Algorithms**.

Instead of traditional memory frames and pages, the simulator uses a **cookie bakery analogy**, where cookies move in and out of an oven to represent how memory pages are loaded and replaced.

The project provides an interactive way to visualize how different algorithms behave under varying reference strings and frame sizes.

## 🎯 Objectives

This project aims to:

- Simplify difficult **Operating Systems concepts**
- Provide an **interactive visualization** of memory management
- Help students compare algorithm efficiency
- Make learning more engaging using a real-world analogy

## ✨ Features

### 🍪 Interactive Bakery Simulation
Simulate memory management using a cookie-themed interface.

### 🧠 Page Replacement Algorithms
Supports the following algorithms:

- **FIFO (First In, First Out)**
- **LRU (Least Recently Used)**
- **Optimal Page Replacement**

### ⚙️ Custom Inputs
Users can:

- Enter their own **reference string**
- Adjust the **number of memory frames**
- Select an algorithm dynamically

### 📊 Performance Metrics
The simulator calculates:

- **Page Hits**
- **Page Faults**
- Memory frame changes per step

### 🎨 User-Friendly Interface
- Clean and responsive UI
- Beginner-friendly visualization
- Interactive simulation results

## 📂 Project Structure

```txt
cookiecachebakery/
│── index.html                # Main interface
│── style.css                 # Website styling
│── script.js                 # Simulation logic
│── README.md                 # Project documentation
│── OS-CS-FINALS-SICAT.pdf    # Full documentation
```

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Hosting
- GitHub Pages

## ⚡ How to Use

### 1. Enter a Reference String

Example:

```txt
7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2
```

---

### 2. Set Number of Frames

Choose how many memory frames (oven slots) will be available.

Example:

```txt
3
```

---

### 3. Choose an Algorithm

Select one:

- FIFO
- LRU
- OPTIMAL

---

### 4. Run Simulation

The system will visualize:

- Memory frame updates
- Hits and faults
- Replacement behavior

## 🧠 Algorithms Implemented

### FIFO (First In, First Out)
The oldest page loaded into memory is replaced first.

### LRU (Least Recently Used)
The least recently accessed page is replaced.

### Optimal Page Replacement
Replaces the page that will not be used for the longest time in the future.

## 📚 Academic Context

**Course:** Operating Systems  
**Project Type:** Finals Project  
**Focus Topic:** Memory Management & Page Replacement Algorithms

This project was developed to demonstrate understanding of:

- Memory Management
- Paging Systems
- Page Replacement Strategies
- Algorithm Efficiency Analysis
- Interactive Learning Design

## 👨‍💻 Developer

**Justine Philip T. Sicat**  

BS Computer Science Student of Tarlac State University

## 📄 Documentation

Full project documentation is included in:

```txt
OS-CS-FINALS-SICAT.pdf
```

## 📄 License

This project is intended for **educational purposes only**.

---

If you found this project interesting, feel free to ⭐ the repository.
