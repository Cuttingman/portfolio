import cv2
import os
import shutil

image_dir = '/Users/pigromance/Downloads/MyPortfolio2/my-portfolio/public/image'
out_dir = '/Users/pigromance/.gemini/antigravity/brain/1e98aaa5-70fe-48bd-af3e-fd5b80ba61af/browser/faces'
if os.path.exists(out_dir):
    shutil.rmtree(out_dir)
os.makedirs(out_dir)

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
profile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_profileface.xml')

html = "<html><body><h1>Detected Faces</h1><ul>\n"

for filename in os.listdir(image_dir):
    if not (filename.lower().endswith('.jpg') or filename.lower().endswith('.png') or filename.lower().endswith('.jpeg')):
        continue
    filepath = os.path.join(image_dir, filename)
    img = cv2.imread(filepath)
    if img is None: continue
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(20, 20))
    profiles = profile_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(20, 20))
    
    all_faces = []
    if len(faces) > 0:
        all_faces.extend(faces)
    if len(profiles) > 0:
        all_faces.extend(profiles)
    
    for i, (x, y, w, h) in enumerate(all_faces):
        # expand bounding box slightly
        cx, cy = x + w//2, y + h//2
        s = max(w, h)
        x1 = max(0, cx - int(s*0.7))
        y1 = max(0, cy - int(s*0.7))
        x2 = min(img.shape[1], cx + int(s*0.7))
        y2 = min(img.shape[0], cy + int(s*0.7))
        
        face_img = img[y1:y2, x1:x2]
        face_filename = f"{filename}_face_{i}_{x}_{y}_{w}_{h}.jpg"
        cv2.imwrite(os.path.join(out_dir, face_filename), face_img)
        html += f"<li>{filename} - Face {i}: <br/><img src='{face_filename}' style='height:150px;'/> <br/> Box: {x},{y},{w},{h}</li>\n"

html += "</ul></body></html>"
with open(os.path.join(out_dir, 'index.html'), 'w') as f:
    f.write(html)
print(f"Generated {out_dir}/index.html")
