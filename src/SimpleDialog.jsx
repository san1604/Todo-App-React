import React, { useState } from 'react';

function SimpleDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleDialog}>Open Dialog</button>

      {isOpen && (
        <div style={overlayStyle}>
          <div style={dialogStyle}>
            <h3>Hello!</h3>
            <p>This is a simple dialog box built with React state.</p>
            <button onClick={toggleDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple styling
const overlayStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const dialogStyle = {
  backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px'
};

export default SimpleDialog;