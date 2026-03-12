import os
from PIL import Image

def optimize_images(directory):
    max_width = 1000
    target_dpi = (72, 72)
    standard_limit_bytes = 1 * 1024 * 1024  # 1MB
    pano_limit_bytes = 2 * 1024 * 1024      # 2MB

    supported_formats = ('.png', '.jpg', '.jpeg', '.webp')

    for root, _, files in os.walk(directory):
        for file in files:
            if not file.lower().endswith(supported_formats):
                continue
                
            filepath = os.path.join(root, file)
            try:
                img = Image.open(filepath)
                # Keep original format
                original_format = img.format
                if original_format is None:
                    ext = os.path.splitext(file)[1].lower()
                    if ext in ['.jpg', '.jpeg']: original_format = 'JPEG'
                    elif ext == '.png': original_format = 'PNG'
                    elif ext == '.webp': original_format = 'WEBP'
                    else: original_format = 'JPEG'

                width, height = img.size
                
                # Check if panorama (aspect ratio > 2.5:1)
                is_panorama = (width / float(height) > 2.5) or (height / float(width) > 2.5)
                size_limit = pano_limit_bytes if is_panorama else standard_limit_bytes
                
                modified = False
                
                # 1. Resize if width > 1000px
                if width > max_width:
                    ratio = max_width / float(width)
                    new_height = int(height * ratio)
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    width, height = img.size
                    modified = True
                    print(f"Resized {file} to {max_width}x{new_height}")

                # 2. Check DPI
                info = img.info
                current_dpi = info.get('dpi', (0, 0))
                if current_dpi[0] > 72 or current_dpi[1] > 72:
                    modified = True
                    print(f"Adjusting DPI for {file} from {current_dpi} to {target_dpi}")
                
                file_size = os.path.getsize(filepath)
                
                # 3. If modified or file size exceeds limit, re-save with compression
                if modified or file_size > size_limit:
                    print(f"Optimizing {file} (Original size: {file_size / 1024 / 1024:.2f}MB, Panorama: {is_panorama})")
                    
                    if img.mode in ('RGBA', 'P') and original_format in ['JPEG', 'JPG']:
                        img = img.convert('RGB')
                        
                    temp_filepath = filepath + ".tmp"
                    
                    if original_format in ['JPEG', 'JPG', 'WEBP']:
                        quality = 95
                        while quality > 10:
                            save_kwargs = {'format': original_format, 'dpi': target_dpi}
                            if original_format in ['JPEG', 'JPG']:
                                save_kwargs['quality'] = quality
                                save_kwargs['optimize'] = True
                            else:
                                save_kwargs['quality'] = quality
                                
                            img.save(temp_filepath, **save_kwargs)
                            new_size = os.path.getsize(temp_filepath)
                            
                            if new_size <= size_limit:
                                break
                            quality -= 5
                            
                    elif original_format == 'PNG':
                        # PNG compression
                        img.save(temp_filepath, format='PNG', dpi=target_dpi, optimize=True)
                        new_size = os.path.getsize(temp_filepath)
                        
                        # If still too large, we might need to reduce colors or convert to WEBP
                        # However, for safety of transparency, we'll just keep the optimized PNG
                    
                    # Replace original file if the new one is actually smaller or if we had to resize
                    if os.path.exists(temp_filepath):
                        new_size = os.path.getsize(temp_filepath)
                        if new_size < file_size or modified:
                            os.replace(temp_filepath, filepath)
                            print(f"-> Saved {file} (New size: {new_size / 1024 / 1024:.2f}MB)")
                        else:
                            os.remove(temp_filepath)
                            print(f"-> Kept original (Optimization didn't reduce size enough)")

            except Exception as e:
                print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    image_dir = "public/image"
    print(f"Starting image optimization in {image_dir}...")
    optimize_images(image_dir)
    print("Optimization complete.")
