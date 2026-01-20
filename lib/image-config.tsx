// Image optimization configuration
export const imageConfig = {
  // Device sizes for responsive images
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

  // Image sizes for the sizes attribute
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  // Supported formats
  formats: ["image/avif", "image/webp"],

  // Default quality
  quality: 85,

  // Blur placeholder data URL generator
  getBlurDataURL: (width: number, height: number) => {
    const shimmer = `
      <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#f6f7f8" offset="20%" />
            <stop stop-color="#edeef1" offset="50%" />
            <stop stop-color="#f6f7f8" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="#f6f7f8" />
        <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
      </svg>
    `
    const toBase64 = (str: string) =>
      typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str)
    return `data:image/svg+xml;base64,${toBase64(shimmer)}`
  },
}

// Common image sizes for different use cases
export const imageSizes = {
  thumbnail: { width: 150, height: 100 },
  card: { width: 400, height: 300 },
  hero: { width: 1920, height: 1080 },
  gallery: { width: 800, height: 600 },
  avatar: { width: 100, height: 100 },
}

// Responsive sizes strings for common layouts
export const responsiveSizes = {
  fullWidth: "100vw",
  halfWidth: "(max-width: 768px) 100vw, 50vw",
  thirdWidth: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}
