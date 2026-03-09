const fs = require('fs');

const path = 'src/components/sections/PigromanceModal.tsx';
let content = fs.readFileSync(path, 'utf8');

const images = [
  "/image/PIGROMANCE_Run_저용량_복사.gif",
  "/image/Meatlet_Walk_복사.gif",
  "/image/Meatlet_Idle_복사.gif",
  "/image/Porklet_Parts_복사.gif",
  "/image/BlackBird_Fly_복사.gif",
  "/image/Cuttingman_Walk(Axe)_복사.gif",
  "/image/SE_Speak(Sorry)_(Pipeman)_복사.gif",
  "/image/SeedPig_Smell_복사.gif",
  "/image/굿즈모음(1500px).png",
  "/image/YF4A0264_복사.png",
  "/image/피규어_스튜디오_사진.png",
  "/image/YF4A0199_(1)_복사.png",
  "/image/YF4A0291_복사.png",
  "/image/키링psd_복사.png",
  "/image/YF4A0224_복사.png",
  "/image/YF4A0230_복사.png",
];

// Ensure valid JSX (fixing the `</>` issue)
// find the last `</div>` before `<GalleryLightbox`
content = content.replace(/<\/div>\n      <\/div>\n      <GalleryLightbox/g, '</div>\n      <GalleryLightbox'); // might be unbalanced, let's just make it valid
// actually, let's use a robust replacement:

images.forEach((src, idx) => {
  // Regex to match the exact img tag
  // e.g. <img src="..." alt="..." className="..." />
  const regex = new RegExp(`<img\\s+src="${src}"\\s+alt="([^"]+)"\\s+className="([^"]+)"\\s*\\/>`);
  const match = content.match(regex);
  if (match) {
    const alt = match[1];
    const className = match[2];
    const replacement = `<GalleryImageTrigger src="${src}" alt="${alt}" index={${idx}} imgClassName="${className}" className="block w-full h-full" onClick={setGalleryIndex} />`;
    content = content.replace(regex, replacement);
  } else {
     // fallback if order or whitespace differs
     const regex2 = new RegExp(`<img\\n\\s*src="${src}"\\n\\s*alt="([^"]+)"\\n\\s*className="([^"]+)"\\n\\s*\\/>`);
     const match2 = content.match(regex2);
     if (match2) {
        const alt = match2[1];
        const className = match2[2];
        const replacement = `<GalleryImageTrigger src="${src}" alt="${alt}" index={${idx}} imgClassName="${className}" className="block w-full h-full" onClick={setGalleryIndex} />`;
        content = content.replace(regex2, replacement);
     }
  }
});

fs.writeFileSync(path, content);
