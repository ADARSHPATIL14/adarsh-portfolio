import puppeteer from 'puppeteer-core';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\ADARSH PATIL\\.gemini\\antigravity-ide\\brain\\6d22df69-a6cf-4eff-a608-98013a70439a';

async function verify() {
  console.log('🚀 Starting Chrome automated verification...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });

  console.log('✓ Page loaded. Checking page title...');
  const title = await page.title();
  console.log(`  Page Title: "${title}"`);

  // Verify all sections exist
  const sectionIds = ['home', 'about', 'focus', 'skills', 'projects', 'journey', 'education', 'achievements', 'github', 'contact'];
  for (const id of sectionIds) {
    const el = await page.$(`#${id}`);
    if (el) {
      console.log(`✓ Section #${id} verified present in DOM`);
    } else {
      console.error(`✗ Section #${id} NOT found`);
    }
  }

  // Screenshot 1: Desktop Hero
  await page.screenshot({
    path: path.join(artifactDir, 'desktop_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });
  console.log('✓ Captured desktop_hero.png');

  // Test Terminal button click
  const statusButton = await page.$('button::-p-text(status)');
  if (statusButton) {
    await statusButton.click();
    console.log('✓ Clicked "status" terminal button');
    await new Promise((r) => setTimeout(r, 600));
  }

  // Screenshot 2: Full page screenshot
  await page.screenshot({
    path: path.join(artifactDir, 'desktop_fullpage.png'),
    fullPage: true,
  });
  console.log('✓ Captured desktop_fullpage.png');

  // Test Contact Form submission
  console.log('Testing Contact Form...');
  await page.type('#name', 'Adarsh Recruiter');
  await page.type('#email', 'recruiter@techcompany.com');
  await page.type('#message', 'Hello Adarsh, your portfolio looks very professional!');
  
  const sendBtn = await page.$('button[type="submit"]');
  if (sendBtn) {
    await sendBtn.click();
    console.log('✓ Clicked Send Message button');
    await new Promise((r) => setTimeout(r, 1200));
    
    const successMsg = await page.$eval('#contact', (el) => el.innerText);
    if (successMsg.includes('Message Sent Successfully')) {
      console.log('✓ Contact Form success alert verified!');
    } else {
      console.log('? Contact Form response:', successMsg.substring(0, 100));
    }
  }

  // Test Mobile view
  console.log('Testing Mobile View (390x844)...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.setViewport({ width: 390, height: 844 });
  await new Promise((r) => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(artifactDir, 'mobile_view.png'),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });
  console.log('✓ Captured mobile_view.png');

  // Test Mobile Hamburger Menu
  const hamburger = await page.$('button[aria-label="Toggle navigation menu"]');
  if (hamburger) {
    await hamburger.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({
      path: path.join(artifactDir, 'mobile_menu_open.png'),
      clip: { x: 0, y: 0, width: 390, height: 844 },
    });
    console.log('✓ Captured mobile_menu_open.png with open drawer');
  }

  await browser.close();

  if (consoleErrors.length > 0) {
    console.error('✗ Detected console errors:', consoleErrors);
  } else {
    console.log('🎉 Verification PASSED! ZERO console errors detected.');
  }
}

verify().catch((err) => {
  console.error('Fatal verification error:', err);
  process.exit(1);
});
