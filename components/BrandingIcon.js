export default function BrandingIcon({ size = 'medium' }) {
  // Size configurations for the branding icon (square aspect ratio for 1739x1739 icon)
  const sizes = {
    small: {
      width: '40px',
      height: '40px'
    },
    medium: {
      width: '50px',
      height: '50px'
    },
    large: {
      width: '60px',
      height: '60px'
    }
  }
  
  const currentSize = sizes[size]
  
  return (
    <div style={{
      width: currentSize.width,
      height: currentSize.height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img 
        src="/images/branding-icon.png" 
        alt="Geometric Branding Icon"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Maintains aspect ratio and prevents distortion
          display: 'block'
        }}
      />
    </div>
  )
}
