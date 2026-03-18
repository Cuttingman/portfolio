/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const path = 'src/components/sections/PigromanceModal.tsx';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  '/image/PIGROMANCE_Run_저용량_복사.gif': '/image/pigromance_run.gif',
  '/image/PIGROMANCE_InGame_02_616px.gif': '/image/pigromance_ingame.gif',
  '/image/Meatlet_Idle_복사.gif': '/image/char_meatlet.gif',
  '/image/Porklet_Parts_복사.gif': '/image/char_porklet.gif',
  '/image/BlackBird_Fly_복사.gif': '/image/char_blackbird.gif',
  '/image/Cuttingman_Walk(Axe)_복사.gif': '/image/char_cuttingman.gif',
  '/image/SE_Speak(Sorry)_(Pipeman)_복사.gif': '/image/char_pipeman.gif',
  '/image/SeedPig_Smell_복사.gif': '/image/char_seedpig.gif',
  '/image/굿즈모음(1500px).png': '/image/goods_all.png',
  '/image/YF4A0264_복사.png': '/image/goods_package.png',
  '/image/피규어_스튜디오_사진.png': '/image/goods_assembled.png',
  '/image/YF4A0199_(1)_복사.png': '/image/goods_usb.png',
  '/image/YF4A0291_복사.png': '/image/goods_mask.png',
  '/image/키링psd_복사.png': '/image/goods_keyring.png',
  '/image/YF4A0224_복사.png': '/image/goods_sticker.png',
  '/image/YF4A0230_복사.png': '/image/goods_bag.png',
  '/image/콘티1.png': '/image/storyboard_1.png',
  '/image/콘티2.png': '/image/storyboard_2.png',
  // keyvisual class replacement
  'imgClassName="w-full h-auto object-cover"': 'imgClassName="w-full h-auto object-cover max-h-[80vh]"',
  // Characters aspect ratio
  'aspect-[3/4]': 'aspect-[2/3]',
  // Characters object-cover -> object-contain
  'w-full h-full object-cover className="block w-full h-full" onClick={setGalleryIndex} />': 'w-full h-full object-contain className="block w-full h-full" onClick={setGalleryIndex} />',
  // Stomuch size
  'w-full md:w-1/2 mx-auto': 'w-full md:w-2/3 mx-auto md:max-w-3xl',
  'aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl': 'aspect-video w-full rounded-3xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

// Modify the video tag part
const videoBlock = `<video
                src="/video/미틀렛 캐릭터턴어라운드.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              />`;
const iframeBlock = `<iframe
                src="https://www.youtube.com/embed/8WJwtm6Sc8o?autoplay=1&mute=1&loop=1&playlist=8WJwtm6Sc8o"
                title="캐릭터 턴어라운드"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />`;

content = content.replace(videoBlock, iframeBlock);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed component successfully.');
