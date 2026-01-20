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
  
  // Take screenshot
  await page.screenshot({ path: '/tmp/nyon-home-hero-test.png', fullPage: false });
  
  console.log('Screenshot saved: /tmp/nyon-home-hero-test.png');
  
  await browser.close();
})();
