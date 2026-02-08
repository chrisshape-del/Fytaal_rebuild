from PIL import Image
import os
import numpy as np

def remove_white_bg(input_path, output_path, threshold=240):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Identify white pixels (R, G, B > threshold)
        r, g, b, a = data.T
        white_areas = (r > threshold) & (g > threshold) & (b > threshold)
        
        # Set alpha to 0 for white pixels
        data[..., 3][white_areas.T] = 0
        
        # Create new image
        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Successfully processed {input_path} -> {output_path}")
        return True
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False

# Process both logos
base_dir = r"d:\Forgr Demo's\Fytaal rebuild\pictures"
files = [
    ("logo binnenkant.jpg", "logo_binnenkant_transparent.png"),
    ("logo buitenkant.jpg", "logo_buitenkant_transparent.png")
]

success = True
for input_name, output_name in files:
    input_path = os.path.join(base_dir, input_name)
    output_path = os.path.join(r"d:\Forgr Demo's\Fytaal rebuild\public\pictures", output_name)
    
    # Ensure output directory exists (public/pictures)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    if not remove_white_bg(input_path, output_path):
        success = False

if success:
    print("All images processed successfully.")
else:
    print("Some images failed.")
