export default function Footer() {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50px',        // ✅ Match the paddingBottom above
        lineHeight: '50px',    // vertically center text
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #ddd',
        fontSize: '0.9rem',
        color: '#333',
        zIndex: 1000,
      }}
    >
      Build By AlomgiR HosseN
    </footer>
  )
}
