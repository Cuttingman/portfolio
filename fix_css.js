const fs = require('fs');

const path = 'src/components/sections/PigromanceModal.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Story Section GIF Cropping Fix
// Change object-cover to object-contain, and add bg-black to frame
content = content.replace(
  'imgClassName="w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video"',
  'imgClassName="w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-contain aspect-video bg-black"'
);
content = content.replace(
  'imgClassName="w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-cover aspect-video order-2 md:order-1"',
  'imgClassName="w-full h-full rounded-3xl shadow-xl m-0 border border-white/10 object-contain aspect-video order-2 md:order-1 bg-black"'
);

// 2. Illustration Section - Stomuch
// Change container bg-white/5 to bg-black, remove p-6 bg-[#111] object-contain and replace with object-cover w-full h-full
content = content.replace(
  'className="w-full md:w-3/4 mx-auto md:max-w-4xl rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"',
  'className="w-full md:w-3/4 mx-auto md:max-w-4xl rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"'
);
content = content.replace(
  'imgClassName="w-full h-full object-contain bg-[#111] p-6"',
  'imgClassName="w-full h-full object-cover"'
);

// 3. General Layout Integrity
// rounded-2xl should become rounded-3xl for all image containers inside grids
content = content.replace(/rounded-2xl/g, 'rounded-3xl');

// Image wrappers and frames bg-black standardisation:
// Replace bg-white/90, bg-black/50, bg-white/5 on strictly image wrappers with bg-black if they are inner containers
content = content.replace(/bg-white\/90/g, 'bg-black');
content = content.replace(/bg-black\/50/g, 'bg-black');

// For character illustrations loop, enforce bg-black
content = content.replace(
  'className="w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"',
  'className="w-full rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"'
);

// Keyvisual container
content = content.replace(
  'className="w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mb-8"',
  'className="w-full rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mb-8"'
);

fs.writeFileSync(path, content, 'utf8');
console.log('CSS classes correctly updated.');
