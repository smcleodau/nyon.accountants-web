const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to home page
  await page.goto('https://nyon.accountants', { waitUntil: 'networkidle' });
  
  // Wait a bit for any animations
  await page.waitForTimeout(2000);
  
  // Take full page screenshot
  await page.screenshot({ path: '/tmp/nyon-home-fullpage.png', fullPage: true });
  
  console.log('Full page screenshot saved: /tmp/nyon-home-fullpage.png');
  
  // Check if HeroIllustration SVG is in the DOM
  const heroSvg = await page.locator('svg').count();
  console.log(`SVG elements found: ${heroSvg}`);
  
  await browser.close();
})();
