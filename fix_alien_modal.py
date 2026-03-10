import os
import re

file_path = '/Users/pigromance/Downloads/MyPortfolio2/my-portfolio/src/components/sections/AlienAbductionModal.tsx'
list_path = '/Users/pigromance/Downloads/MyPortfolio2/my-portfolio/image_list.txt'

with open(list_path, 'r', encoding='utf-8') as f:
    lines = f.read().splitlines()
    
    img1 = next(l for l in lines if '우수상장' in l or '우수상장' in l)
    img2 = next(l for l in lines if ('피그플랜트' in l or '피그플랜트' in l) and '3.jpg' in l)
    img3 = next(l for l in lines if ('피그플랜트' in l or '피그플랜트' in l) and '4.jpg' in l)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the array elements
content = re.sub(r'src:\s*"/image/[^"]*우수상장[^"]*"', f'src: "/image/{img1}"', content)
content = re.sub(r'src:\s*"/image/[^"]*피그플랜트[^"]*3.jpg"', f'src: "/image/{img2}"', content)
content = re.sub(r'src:\s*"/image/[^"]*피그플랜트[^"]*4.jpg"', f'src: "/image/{img3}"', content)

# Replace the GalleryImageTrigger src
content = re.sub(r'src="/image/[^"]*우수상장[^"]*"', f'src="/image/{img1}"', content)
content = re.sub(r'src="/image/[^"]*피그플랜트[^"]*3.jpg"', f'src="/image/{img2}"', content)
content = re.sub(r'src="/image/[^"]*피그플랜트[^"]*4.jpg"', f'src="/image/{img3}"', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated images to: \n{img1}\n{img2}\n{img3}")
