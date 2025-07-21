export default function ImageLogo({ size = 'medium' }) {
  // Size configurations for the image logo (square aspect ratio for 1739x1739 logo)
  const sizes = {
    small: {
      width: '80px',
      height: '80px'
    },
    medium: {
      width: '100px',
      height: '100px'
    },
    large: {
      width: '120px',
      height: '120px'
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
        src="/images/Logo.png" 
        alt="Hussein Almohmmed Law Firm Logo"
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
