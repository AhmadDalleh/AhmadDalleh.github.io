<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ahmad Dalleh - Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #4b6cb7;
      --secondary: #182848;
      --light-bg: #f5f7fa;
      --text-dark: #333;
    }

    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: var(--light-bg);
      color: var(--text-dark);
      scroll-behavior: smooth;
      line-height: 1.6;
    }

    a { text-decoration: none; color: var(--primary); }

    header {
      text-align: center;
      padding: 80px 20px 50px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      position: relative;
      overflow: hidden;
    }

    header::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.2);
      z-index: 0;
    }

    .header-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .profile-photo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px solid #fff;
      object-fit: cover;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      transition: transform 0.4s ease;
    }
    .profile-photo:hover {
      transform: scale(1.05);
    }

    header h1 {
      margin: 0;
      font-size: 2.5em;
    }

    header h2 {
      margin: 10px 0;
      font-weight: 400;
      font-size: 1.3em;
    }

    header p {
      max-width: 800px;
      margin: 10px auto 0;
      font-size: 1.05em;
    }

    .section {
      max-width: 1200px;
      margin: 60px auto;
      padding: 0 20px;
    }

    h2.section-title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2em;
      color: var(--secondary);
      position: relative;
    }

    h2.section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: var(--primary);
      margin: 10px auto;
      border-radius: 2px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    .card, .experience-item, .project-item, .education-item {
      background: white;
      border-radius: 15px;
      padding: 25px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
    }

    .card:hover, .experience-item:hover, .project-item:hover, .education-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    }

    .contact-info div, .skills div, .languages div, .soft-skills div {
      text-align: center;
      background: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.05);
      transition: 0.3s ease;
    }

    .contact-info div:hover, .skills div:hover, .languages div:hover, .soft-skills div:hover {
      transform: scale(1.05);
    }

    ul {
      margin: 10px 0 0 20px;
      padding: 0;
    }

    ul li {
      margin-bottom: 8px;
    }

    .certificates a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 15px;
      background: var(--primary);
      color: white;
      border-radius: 8px;
      transition: background 0.3s ease;
    }

    .certificates a:hover {
      background: var(--secondary);
    }

    footer {
      text-align: center;
      padding: 25px;
      background: var(--secondary);
      color: white;
      margin-top: 60px;
    }

    @media (max-width: 600px) {
      header h1 { font-size: 2em; }
      header h2 { font-size: 1.1em; }
      .profile-photo { width: 120px; height: 120px; }
    }
  </style>
</head>

<body>

  <header>
    <div class="header-content">
      <!-- 👇 Add your photo here -->
      <img src="![WhatsApp Image 2025-08-25 at 12 09 16_da44a018](https://github.com/user-attachments/assets/394c2437-747e-450e-8434-82e42f1e6180)
" alt="Ahmad Dalleh" class="profile-photo">
      <h1>Ahmad Dalleh</h1>
      <h2>Backend Developer (.NET)</h2>
      <p>Dot Net Developer with hands-on experience in building scalable and high-performance backend solutions. Skilled in API development, ASP.NET Core, Entity Framework Core, SQL Server, Redis caching, and Domain-Driven Design (DDD). Strong knowledge of microservices, RESTful API design, and CI/CD pipelines using Azure DevOps. Passionate about delivering reliable enterprise applications with a focus on performance, scalability, and maintainability.</p>
    </div>
  </header>

  <section class="section">
    <h2 class="section-title">Contact Info</h2>
    <div class="grid contact-info">
      <div>Email: <a href="mailto:ahmeddalleh8@gmail.com">ahmeddalleh8@gmail.com</a></div>
      <div>Location: Sharjah, UAE</div>
      <div>Phone: +971 557487498</div>
      <div>GitHub: <a href="https://www.github.com/AhmadDalleh" target="_blank">AhmadDalleh</a></div>
      <div>LinkedIn: <a href="https://www.linkedin.com/in/ahmad-dalleh-659304382" target="_blank">Ahmad Dalleh</a></div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Technical Skills</h2>
    <div class="grid skills">
      <div>ASP.NET Core, Entity Framework Core, ABP Framework</div>
      <div>RESTful APIs, DDD, Dependency Injection</div>
      <div>SQL Server, Redis, MySQL, PostgreSQL</div>
      <div>C#, Java, Python, C++</div>
      <div>Azure DevOps, GitHub, Swagger, Postman</div>
      <div>Unit Testing, Integration Testing</div>
      <div>Microservices, Agile/Scrum, SDLC</div>
      <div>Database Optimization</div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Experience</h2>
    <div class="grid">
      <div class="experience-item">
        <h3>Back End Developer - OswaTech</h3>
        <p><strong>(01/2024 – Present, Syria / 08/2024 – Present, London)</strong></p>
        <ul>
          <li>Developed and maintained high-performance backend systems for e-commerce.</li>
          <li>Improved API speed using Redis caching and SQL optimization.</li>
          <li>Collaborated across teams to integrate applications seamlessly.</li>
        </ul>
      </div>
      <div class="experience-item">
        <h3>QA Tester (Part-time) - Marmaz Tech</h3>
        <ul>
          <li>Performed comprehensive integration and unit testing.</li>
          <li>Applied Blackbox testing improving UX by 30%.</li>
          <li>Enhanced Agile workflow reducing test time by 25%.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Projects</h2>
    <div class="grid">
      <div class="project-item">
        <h3>E-Commerce Backend (nopCommerce)</h3>
        <ul>
          <li>Built modular backend architecture following DDD principles.</li>
          <li>Integrated Redis caching and RESTful APIs, deployed to Azure.</li>
        </ul>
        <p><strong>Tech Stack:</strong> ASP.NET Core, ABP, EF Core, Redis, Swagger, Azure</p>
      </div>

      <div class="project-item">
        <h3>Dynamic Research CMS</h3>
        <ul>
          <li>Developed secure admin dashboard for managing research content.</li>
          <li>Implemented authentication, role-based access, and optimized SQL queries.</li>
        </ul>
        <p><strong>Tech Stack:</strong> ASP.NET Core, EF Core, SQL Server, ABP Framework</p>
      </div>

      <div class="project-item">
        <h3>Company Networking Platform</h3>
        <ul>
          <li>Built a developer-company connection system with messaging and tagging.</li>
          <li>Integrated GitHub API and implemented authentication.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Django, SQLite, Python</p>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Education</h2>
    <div class="education-item card">
      <h3>Bachelor of Software Engineering</h3>
      <p>Yarmouk Private University (2020 – 2025, Syria)</p>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Certifications</h2>
    <div class="grid certificates">
      <div class="card">
        <h3>Foundational C# with Microsoft</h3>
        <p>freeCodeCamp</p>
        <a href="https://www.freecodecamp.org/certification/fccd78807c4-1265-47a3-85fe-5479151dd9ea/foundational-c-sharp-with-microsoft" target="_blank">View Certificate</a>
      </div>
      <div class="card">
        <h3>Problem Solving</h3>
        <p>HackerRank</p>
        <a href="https://www.hackerrank.com/certificates/iframe/7a8e96fce396" target="_blank">View Certificate</a>
      </div>
      <div class="card">
        <h3>Introduction to Databases</h3>
        <p>Meta</p>
        <a href="https://www.coursera.org/verify/02JTFW6QM33O" target="_blank">View Certificate</a>
      </div>
      <div class="card">
        <h3>APIs</h3>
        <p>Meta</p>
        <a href="https://www.coursera.org/verify/2BH9SMCTEJ3H" target="_blank">View Certificate</a>
      </div>
      <div class="card">
        <h3>ASP.NET MVC Plus For Seniors</h3>
        <p>Udemy</p>
        <a href="https://www.udemy.com/certificate/UC-7cf24b5b-fe9b-4004-b6ee-e394215c5fb2/" target="_blank">View Certificate</a>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Languages</h2>
    <div class="grid languages">
      <div>Arabic (Native)</div>
      <div>English (Fluent)</div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Soft Skills</h2>
    <div class="grid soft-skills">
      <div>Problem Solving & Analytical Thinking</div>
      <div>Attention to Detail</div>
      <div>Continuous Learning</div>
      <div>Teamwork & Collaboration</div>
      <div>Strong Communication</div>
      <div>Self-Motivation</div>
    </div>
  </section>

  <footer>
    &copy; 2025 Ahmad Dalleh | All Rights Reserved
  </footer>

</body>
</html>
