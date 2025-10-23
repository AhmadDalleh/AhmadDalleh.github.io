<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ahmad Dalleh - Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background: #f5f7fa;
      color: #333;
      scroll-behavior: smooth;
    }
    a { text-decoration: none; color: inherit; }
    header {
      text-align: center;
      padding: 50px 20px;
      background: linear-gradient(135deg, #4b6cb7, #182848);
      color: white;
    }
    header h1 {
      margin: 0;
      font-size: 2.5em;
    }
    header h2 {
      margin: 10px 0;
      font-weight: 400;
    }
    header p {
      max-width: 800px;
      margin: 20px auto 0 auto;
      line-height: 1.6;
      font-size: 1.1em;
    }
    .section {
      max-width: 1200px;
      margin: 50px auto;
      padding: 0 20px;
    }
    h2.section-title {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2em;
      color: #182848;
    }
    .contact-info, .skills, .languages, .soft-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .contact-info div, .skills div, .languages div, .soft-skills div {
      background: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      min-width: 200px;
      text-align: center;
    }
    .experience, .projects, .education {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .experience-item, .project-item, .education-item {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .experience-item:hover, .project-item:hover, .education-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    }
    .experience-item h3, .project-item h3, .education-item h3 {
      margin-top: 0;
      color: #4b6cb7;
    }
    .certificates {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    }
    .card h3 { margin-top: 0; font-size: 1.2em; }
    .card p { margin: 5px 0; font-size: 0.95em; color: #555; }
    .card a {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 15px;
      background: #4b6cb7;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.3s;
    }
    .card a:hover { background: #182848; }
    footer {
      text-align: center;
      padding: 20px;
      background: #182848;
      color: white;
      margin-top: 50px;
    }
  </style>
</head>
<body>

<header>
  <h1>Ahmad Dalleh</h1>
  <h2>Backend Developer (.NET)</h2>
  <p>Dot Net Developer with hands-on experience in building scalable and high-performance backend solutions. Skilled in API development, ASP.NET Core, Entity Framework Core, SQL Server, Redis caching, and Domain-Driven Design (DDD). Strong knowledge of microservices, RESTful API design, and CI/CD pipelines using Azure DevOps. Passionate about delivering reliable enterprise applications with a focus on performance, scalability, and maintainability.</p>
</header>

<section class="section">
  <h2 class="section-title">Contact Info</h2>
  <div class="contact-info">
    <div>Email: <a href="mailto:ahmeddalleh8@gmail.com">ahmeddalleh8@gmail.com</a></div>
    <div>Location: Sharjah, UAE</div>
    <div>Phone: +971 557487498</div>
    <div>GitHub: <a href="https://www.github.com/AhmadDalleh" target="_blank">AhmadDalleh</a></div>
    <div>LinkedIn: <a href="https://www.linkedin.com/in/ahmad-dalleh-659304382" target="_blank">Ahmad Dalleh</a></div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Technical Skills</h2>
  <div class="skills">
    <div>ASP.NET Core, Entity Framework Core, ABP Framework</div>
    <div>RESTful APIs, DDD, Dependency Injection</div>
    <div>SQL Server, Redis, MySQL, PostgreSQL</div>
    <div>C#, Java, Python, C++</div>
    <div>Azure DevOps, GitHub, Swagger, Postman</div>
    <div>Unit Testing, Integration Testing, Blackbox Testing</div>
    <div>Microservices, Agile/Scrum, SDLC</div>
    <div>Database Optimization</div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Experience</h2>
  <div class="experience">
    <div class="experience-item">
      <h3>Back End Developer - OswaTech (01/2024 – Present, Syria / 08/2024 – Present, London)</h3>
      <ul>
        <li>Developed and maintained high-performance backend systems for an e-commerce platform using ASP.NET Core, Entity Framework Core, and SQL Server.</li>
        <li>Designed efficient APIs and managed data with SQL Server, enhancing overall application performance.</li>
        <li>Utilised Redis caching for improved API response time and database query optimisation, reducing latency by over 40%.</li>
        <li>Collaborated with cross-functional teams to ensure seamless integration of web applications.</li>
      </ul>
    </div>
    <div class="experience-item">
      <h3>QA Tester (Part-time) - Marmaz Tech</h3>
      <ul>
        <li>Conducted comprehensive integration and unit testing to ensure software quality and reliability.</li>
        <li>Collaborated within an Agile Scrum environment, enhancing team productivity and project delivery.</li>
        <li>Implemented Blackbox testing techniques, improving user experience by 30%.</li>
        <li>Refined QA processes, reducing testing time by 25%.</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Projects</h2>
  <div class="projects">
    <div class="project-item">
      <h3>E-Commerce Backend (nopCommerce)</h3>
      <ul>
        <li>Designed a modular backend system inspired by nopCommerce covering products, orders, customers, payments.</li>
        <li>Applied layered architecture with DDD principles for scalability and maintainability.</li>
        <li>Integrated Redis caching and RESTful APIs, deployed on Azure Cloud.</li>
      </ul>
      <p>Tech Stack: ASP.NET Core, ABP Framework, EF Core, SQL Server, Redis, Swagger, Azure</p>
    </div>
    <div class="project-item">
      <h3>Dynamic Research Content Management System</h3>
      <ul>
        <li>Secure admin dashboard for adding and managing research content dynamically.</li>
        <li>Authentication, authorization, and role-based access control implemented.</li>
        <li>Optimised SQL Server queries and deployed using Azure Cloud Services.</li>
      </ul>
      <p>Tech Stack: ASP.NET Core, EF Core, SQL Server, TinyMCE, ABP Framework, Azure</p>
    </div>
    <div class="project-item">
      <h3>Developer – Company Networking Platform</h3>
      <ul>
        <li>Built a platform connecting developers and companies with profiles, project showcases, messaging, and skill tagging.</li>
        <li>API integration for GitHub and LinkedIn, authentication and RBAC implemented.</li>
        <li>Optimised database queries using SQLite and responsive UI with Django Template Engine.</li>
      </ul>
      <p>Tech Stack: Django, SQLite, Python, Git, GitHub API</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Education</h2>
  <div class="education">
    <div class="education-item">
      <h3>Bachelor of Software Engineering - Yarmouk Private University (01/2020 – 08/2025, Syria)</h3>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Certifications</h2>
  <div class="certificates">
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
  <div class="languages">
    <div>Arabic (Native)</div>
    <div>English (Fluent)</div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Soft Skills</h2>
  <div class="soft-skills">
    <div>Problem-Solving & Analytical Thinking</div>
    <div>Attention to Detail</div>
    <div>Continuous Learning & Adaptability</div>
    <div>Teamwork & Collaboration</div>
    <div>Strong Communication</div>
    <div>Independent & Self-Motivated</div>
  </div>
</section>

<footer>
  &copy; 2025 Ahmad Dalleh
</footer>

</body>
</html>
