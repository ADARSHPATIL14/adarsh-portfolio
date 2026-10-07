import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: A4;
    margin: 18mm 18mm 18mm 18mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    color: #111;
    line-height: 1.35;
    font-size: 10.5pt;
    background: #fff;
  }
  .header {
    margin-bottom: 12px;
  }
  .name {
    font-size: 26pt;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
    color: #000;
  }
  .contact-line {
    display: flex;
    justify-content: space-between;
    font-size: 9pt;
    color: #222;
    border-bottom: 1.5px solid #000;
    padding-bottom: 4px;
    margin-bottom: 10px;
  }
  .contact-left {
    text-align: left;
  }
  .contact-right {
    text-align: right;
  }
  .contact-line a {
    color: #111;
    text-decoration: none;
  }
  .section-title {
    font-size: 11pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1px solid #111;
    padding-bottom: 2px;
    margin-top: 10px;
    margin-bottom: 6px;
  }
  .profile-text {
    font-size: 9.8pt;
    text-align: justify;
    line-height: 1.35;
    margin-bottom: 6px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 10.5pt;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 2px;
  }
  .item-title {
    font-weight: bold;
    color: #000;
  }
  .item-tag {
    font-weight: bold;
    font-style: normal;
    font-size: 9.8pt;
  }
  .item-sub {
    display: flex;
    justify-content: space-between;
    font-size: 9.5pt;
    font-style: italic;
    margin-bottom: 3px;
  }
  ul {
    margin-left: 18px;
    margin-bottom: 6px;
  }
  li {
    font-size: 9.5pt;
    line-height: 1.35;
    margin-bottom: 2.5px;
    text-align: justify;
  }
  .skills-list {
    margin-left: 18px;
    list-style-type: disc;
  }
  .skills-list li {
    font-size: 9.5pt;
    margin-bottom: 3px;
  }
  .skills-list strong {
    font-weight: bold;
  }
</style>
</head>
<body>

  <div class="header">
    <div class="name">Adarsh Patil</div>
    <div class="contact-line">
      <div class="contact-left">
        <a href="mailto:adarshpatil9390@gmail.com">adarshpatil9390@gmail.com</a> &nbsp;|&nbsp; 
        <span>9390302205</span> &nbsp;|&nbsp; 
        <span>Bengaluru, Karnataka, India</span>
      </div>
      <div class="contact-right">
        <a href="https://github.com/ADARSHPATIL14">https://github.com/ADARSHPATIL14</a> &nbsp;|&nbsp; 
        <a href="https://www.linkedin.com/in/adarshpatil14/">https://www.linkedin.com/in/adarshpatil14/</a>
      </div>
    </div>
  </div>

  <div class="section-title">PROFILE</div>
  <p class="profile-text">
    B.Tech Computer Science and Engineering student with a 9.05 CGPA, building a strong foundation in programming, data structures, databases, and software development. Currently developing skills in C, C++, Java, SQL, Git/GitHub, and web technologies through academic and personal projects. Seeking opportunities to apply problem-solving skills through software development internships.
  </p>

  <div class="section-title">PROJECT EXPERIENCE</div>

  <div class="item-header">
    <span class="item-title">Simple Line Editor</span>
    <span class="item-tag">C Programming Project</span>
  </div>
  <ul>
    <li>Developed a menu-driven command-line text editor supporting insert, delete, display, search, word count, help, and exit operations.</li>
    <li>Worked on core document operations and designed test cases for validating insertion, deletion, and display functionality.</li>
    <li>Explored extensions including file save/load, find/replace, undo, line count, and word count.</li>
  </ul>

  <div class="item-header">
    <span class="item-title">LeetCode Solutions Repository</span>
    <span class="item-tag">DSA / GitHub</span>
  </div>
  <ul>
    <li>Created a structured repository for organizing solutions across arrays & strings, basic algorithms, stacks, and linked lists.</li>
    <li>Practiced problem solving and maintained solutions with clear folder organization and README documentation.</li>
  </ul>

  <div class="item-header">
    <span class="item-title">PureSip — Portable Water Purifier Bottle</span>
    <span class="item-tag">Innovation & Entrepreneurship</span>
  </div>
  <ul>
    <li>Worked on a portable water-purification bottle concept aimed at students, travelers, office workers, fitness users, and outdoor enthusiasts.</li>
    <li>Contributed to customer persona, stakeholder analysis, feasibility, competitor analysis, TAM/SAM/SOM, go-to-market planning, and business projections.</li>
  </ul>

  <div class="section-title">EDUCATION</div>
  <div class="item-header">
    <span class="item-title">REVA University</span>
    <span class="item-tag">Expected 2029</span>
  </div>
  <div class="item-sub">
    <span>B.Tech — Computer Science & Engineering</span>
    <span>Bengaluru, Karnataka</span>
  </div>
  <ul>
    <li><strong>CGPA:</strong> 9.05 / 10.0</li>
  </ul>

  <div class="section-title">TECHNICAL SKILLS & INTERESTS</div>
  <ul class="skills-list">
    <li><strong>Programming:</strong> C, C++, Java, Python</li>
    <li><strong>Core CS:</strong> Data Structures & Algorithms, OOP, DBMS, SQL</li>
    <li><strong>Tools:</strong> Git, GitHub, VS Code, MySQL</li>
    <li><strong>Other:</strong> IoT basics, Arduino, NodeMCU, MATLAB basics</li>
    <li><strong>Interests:</strong> Software Development; Problem Solving; Data Structures & Algorithms; Open-Source & GitHub Projects</li>
  </ul>

</body>
</html>
`;

async function generatePdf() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setContent(resumeHtml, { waitUntil: 'networkidle0' });

  const publicDest = 'c:\\Users\\ADARSH PATIL\\Desktop\\adarsh portfolio\\portfolio\\public\\resume.pdf';
  const distDest = 'c:\\Users\\ADARSH PATIL\\Desktop\\adarsh portfolio\\portfolio\\dist\\resume.pdf';

  await page.pdf({
    path: publicDest,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '18mm',
      right: '18mm',
    },
  });

  console.log('✓ Generated:', publicDest);

  if (fs.existsSync(path.dirname(distDest))) {
    fs.copyFileSync(publicDest, distDest);
    console.log('✓ Copied to dist:', distDest);
  }

  await browser.close();
  console.log('PDF generation complete!');
}

generatePdf().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
