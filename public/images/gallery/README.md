# Gallery Template

This folder contains the gallery images for the Herbally website.

## How to Use

1. **Add Images**: Place your gallery images in this folder with descriptive names:
   - `herb1.jpg`, `herb2.jpg` - For herbal product images
   - `workshop1.jpg`, `workshop2.jpg` - For educational workshop images
   - `products1.jpg`, `products2.jpg` - For product showcase images
   - `garden1.jpg`, `garden2.jpg` - For garden tour images
   - `lab1.jpg`, `lab2.jpg` - For research facility images

2. **Update Gallery Data**: Edit the `galleryItems` array in `/components/gallery.tsx` to:
   - Update image URLs to match your actual files
   - Modify titles and descriptions
   - Add or remove categories as needed
   - Add more gallery items

3. **Recommended Image Specifications**:
   - Format: JPG, PNG, or WebP
   - Size: 800x800px minimum for best quality
   - Aspect ratio: Square (1:1) recommended for grid display
   - File size: Keep under 500KB for optimal loading

4. **Categories**: The gallery supports filtering by categories. Current template categories:
   - Herbs
   - Education
   - Products
   - Nature
   - Research

5. **Features**:
   - Responsive grid layout
   - Category filtering
   - Lightbox with navigation
   - Mobile-friendly design
   - Dark mode support

## Customization

To customize the gallery:
- Modify the `galleryItems` array in `/components/gallery.tsx`
- Adjust the grid layout by changing the CSS classes
- Add new categories or remove existing ones
- Customize the styling to match your brand