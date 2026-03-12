import cv2
import os

image_dir = '/Users/pigromance/Downloads/MyPortfolio2/my-portfolio/public/image'

blur_data = {
    'asset_04d14be2.png': [[385, 422, 72, 72]],
    'kasset_04d14.png': [[385, 422, 72, 72]],
    
    'asset_0e0e5bbc.png': [
        [307, 206, 52, 52], 
        [683, 222, 61, 61], 
        [687, 215, 72, 72]
    ],
    'kasset_0e0e5.png': [
        [307, 206, 52, 52], 
        [683, 222, 61, 61], 
        [687, 215, 72, 72]
    ],
    
    'asset_c6e041ef.png': [[150, 694, 55, 55]],
    'kasset_c6e04.png': [[150, 694, 55, 55]],
    
    'asset_ee19ad3e.png': [
        [191, 389, 28, 28], [333, 454, 27, 27], [676, 477, 29, 29],
        [464, 528, 29, 29], [623, 480, 31, 31], [557, 523, 29, 29],
        [409, 529, 26, 26], [382, 458, 26, 26], [269, 451, 28, 28],
        [752, 429, 33, 33]
    ],
    'kasset_ee19a.png': [
        [191, 389, 28, 28], [333, 454, 27, 27], [676, 477, 29, 29],
        [464, 528, 29, 29], [623, 480, 31, 31], [557, 523, 29, 29],
        [409, 529, 26, 26], [382, 458, 26, 26], [269, 451, 28, 28],
        [752, 429, 33, 33]
    ],
    
    'asset_59412863.png': [[256, 102, 114, 114], [253, 77, 167, 167]],
    'kasset_59412.png': [[256, 102, 114, 114], [253, 77, 167, 167]],
    
    '23ec9de1-b6cc-4525-8800-aa52b68f6a23.png': [[284, 177, 68, 68]],
    
    'graffiti_yoons.jpg': [[145, 31, 52, 52]],
    'kasset_cf77f.jpg': [[145, 31, 52, 52]],
    
    'kasset_98e2f.png': [[629, 412, 61, 61]],
    'asset_98e2f47e.png': [[629, 412, 61, 61]],

    'typo_class_3.jpg': [[135, 12, 107, 107]],
    
    'kasset_52a60.png': [[269, 451, 28, 28]],
    'kasset_4fb64.png': [[269, 451, 28, 28]],
    'asset_4fb64fbf.png': [[269, 451, 28, 28]]
}

def blur_face(img, x, y, w, h):
    pad = int(min(w, h) * 0.25)
    x1, y1 = max(0, x - pad), max(0, y - pad)
    x2, y2 = min(img.shape[1], x + w + pad), min(img.shape[0], y + h + pad)
    
    if x1 >= img.shape[1] or y1 >= img.shape[0] or x2 <= x1 or y2 <= y1:
        return img
    
    face_region = img[y1:y2, x1:x2]
    
    ksize = int(max(w, h) * 0.5)
    if ksize % 2 == 0: ksize += 1
    if ksize < 15: ksize = 15
    
    blurred_face = cv2.GaussianBlur(face_region, (ksize, ksize), 30)
    
    mask = cv2.getGaussianKernel(blurred_face.shape[0], -1) * cv2.getGaussianKernel(blurred_face.shape[1], -1).T
    mask = mask / mask.max()
    mask = mask[..., None]
    
    img[y1:y2, x1:x2] = img[y1:y2, x1:x2] * (1 - mask) + blurred_face * mask
    return img

for filename, boxes in blur_data.items():
    filepath = os.path.join(image_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
        
    img = cv2.imread(filepath)
    if img is None:
        continue
        
    for x, y, w, h in boxes:
        img = blur_face(img, x, y, w, h)
        
    cv2.imwrite(filepath, img)
    print(f"Blurred {filename}")
