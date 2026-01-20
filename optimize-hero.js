const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = './public/images/hero/hero-image-original.png';
const outputDir = './public/images/hero';

async function optimizeHeroImage() {
  try {
    console.log('Optimizing hero image...');

    // Generate WebP versions at different sizes
    const sizes = [
      { width: 2560, name: 'hero-2560.webp', quality: 85 },
      { width: 1920, name: 'hero-1920.webp', quality: 85 },
      { width: 1280, name: 'hero-1280.webp', quality: 80 },
      { width: 828, name: 'hero-828.webp', quality: 75 },
    ];

    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: size.quality })
        .toFile(path.join(outputDir, size.name));

      const stats = fs.statSync(path.join(outputDir, size.name));
      console.log(`✓ ${size.name} - ${(stats.size / 1024).toFixed(0)}KB`);
    }

    // Generate fallback JPEG
    await sharp(inputPath)
      .resize(1920, null, { fit: 'inside' })
      .jpeg({ quality: 85 })
      .toFile(path.join(outputDir, 'hero-fallback.jpg'));

    const fallbackStats = fs.statSync(path.join(outputDir, 'hero-fallback.jpg'));
    console.log(`✓ hero-fallback.jpg - ${(fallbackStats.size / 1024).toFixed(0)}KB`);

    console.log('\n✅ Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeHeroImage();
