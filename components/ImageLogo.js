export default function ImageLogo({ size = 'medium' }) {
  // Size configurations for the image logo
  const sizes = {
    small: {
      width: '100px',
      height: '70px'
    },
    medium: {
      width: '130px',
      height: '85px'
    },
    large: {
      width: '160px',
      height: '100px'
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
        alt="Hussein Al Mohammed Law Firm Logo"
        style={{
          width: '100%',
          height: '100%',
          //objectFit: 'contain', // Maintains aspect ratio
          display: 'block'
        }}
      />
    </div>
  )
}
