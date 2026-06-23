:root {
    --primary-color: #2c5e3b;
    --primary-light: #448055;
    --secondary-color: #8db580;
    --accent-color: #d4a373;
    --dark-color: #1e3525;
    --light-color: #faf8f5;
    --white: #ffffff;
    --text-color: #3a473e;
    --border-color: #e2ebd5;
    --transition-smooth: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--light-color);
    color: var(--text-color);
    line-height: 1.7;
    font-size: 16px;
}

header {
    background: linear-gradient(rgba(30, 53, 37, 0.75), rgba(30, 53, 37, 0.85)), 
                url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
    color: var(--white);
    text-align: center;
    padding: 120px 20px;
}

header h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 15px;
}

header p {
    font-size: 1.25rem;
    max-width: 650px;
    margin: 0 auto;
    opacity: 0.95;
}

nav {
    background-color: var(--primary-color);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

nav ul li a {
    display: block;
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    padding: 20px 25px;
    text-transform: uppercase;
    font-size: 0.95rem;
    transition: var(--transition-smooth);
}

nav ul li a:hover {
    background-color: var(--primary-light);
}

.container {
    max-width: 1100px;
    margin: 50px auto;
    padding: 0 25px;
}

section {
    background: var(--white);
    padding: 45px;
    border-radius: 12px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(44, 94, 59, 0.04);
    border: 1px solid var(--border-color);
}

section h2 {
    color: var(--dark-color);
    font-size: 1.8rem;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 3px solid var(--secondary-color);
    display: inline-block;
}

.grid-estratos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.card {
    background-color: var(--light-color);
    padding: 30px 25px;
    border-radius: 8px;
    border-top: 5px solid var(--primary-color);
    transition: var(--transition-smooth);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(44, 94, 59, 0.08);
}

.card h3 {
    color: var(--primary-color);
    margin-bottom: 12px;
}

ul.beneficios-list {
    list-style: none;
    margin-top: 20px;
}

ul.beneficios-list li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
}

ul.beneficios-list li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: var(--primary-light);
    font-weight: bold;
}

footer {
    background-color: var(--dark-color);
    color: var(--white);
    text-align: center;
    padding: 30px 20px;
    margin-top: 60px;
    border-top: 4px solid var(--accent-color);
}

@media (max-width: 768px) {
    nav ul { flex-direction: column; }
    nav ul li { width: 100%; text-align: center; }
    section { padding: 25px; }
}
