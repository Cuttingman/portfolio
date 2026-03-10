const fs = require('fs');
const path = require('path');

const srcDir = '/Users/pigromance/Downloads/MyPortfolio2/Notion_PortfolioAssets/image';
const destDir = 'public/image';

function safeCopyMatch(keyword, destName) {
  const files = fs.readdirSync(srcDir);
  const match = files.find(f => {
    // Normalize string to check
    return f.normalize('NFC').replace(/\s/g, '').includes(keyword) || 
           f.normalize('NFD').replace(/\s/g, '').includes(keyword);
  });
  if (match) {
    fs.copyFileSync(path.join(srcDir, match), path.join(destDir, destName));
    console.log(`Copied ${match} to ${destName}`);
  } else {
    console.log(`Missing for keyword ${keyword}`);
  }
}

// Copy the missing files with English names directly to match the requested component updates
fs.copyFileSync(path.join(srcDir, 'PIGROMANCE_Character_1.png'), path.join(destDir, 'PIGROMANCE_Character_1.png'));
fs.copyFileSync(path.join(srcDir, 'PIGROMANCE_Character_2.png'), path.join(destDir, 'PIGROMANCE_Character_2.png'));
fs.copyFileSync(path.join(srcDir, 'PIGROMANCE_Character_3.png'), path.join(destDir, 'PIGROMANCE_Character_3.png'));
fs.copyFileSync(path.join(srcDir, 'PIGROMANCE_Character_4.png'), path.join(destDir, 'PIGROMANCE_Character_4.png'));
fs.copyFileSync(path.join(srcDir, 'Screenshot_1.png'), path.join(destDir, 'Screenshot_1.png'));
fs.copyFileSync(path.join(srcDir, 'Screenshot_2.png'), path.join(destDir, 'Screenshot_2.png'));

safeCopyMatch('피규어스튜디오', 'figure_studio.png');

console.log('Copy operation done.');

// Now replace in PigromanceModal.tsx
const modalPath = 'src/components/sections/PigromanceModal.tsx';
let content = fs.readFileSync(modalPath, 'utf8');

const replacements = {
  // Array definition mapping
  '/image/pigromance_run.gif': '/image/Screenshot_1.png',
  '/image/pigromance_ingame.gif': '/image/Screenshot_2.png',
  '/image/char_meatlet.gif': '/image/PIGROMANCE_Character_1.png',
  '/image/char_porklet.gif': '/image/PIGROMANCE_Character_2.png',
  '/image/char_blackbird.gif': '/image/PIGROMANCE_Character_3.png',
  '/image/char_cuttingman.gif': '/image/PIGROMANCE_Character_4.png',
  '/image/char_pipeman.gif': '/image/PIGROMANCE_Character_4.png',
  '/image/char_seedpig.gif': '/image/PIGROMANCE_Character_4.png',
  '/image/goods_assembled.png': '/image/figure_studio.png',
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

// Global CSS rule matching Character sections inside the grid
// For characters, user wants object-fit: contain to prevent cropping.
// Looking at the JSX, it currently has imgClassName="w-full h-full object-contain m-0" which is correct!
// BUT wait, does the grid container need aspect-video or what? The user said:
// "Use object-fit: contain for the characters to prevent cropping."
// "Use aspect-video or h-auto for the story screenshots to ensure they fill the red-boxed areas perfectly."
content = content.replace('w-full h-auto rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video', 'w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video');
content = content.replace('w-full h-auto rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video order-2 md:order-1', 'w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video order-2 md:order-1');

fs.writeFileSync(modalPath, content, 'utf8');
console.log('Component paths replaced successfully.');
