import React, { useState, useEffect } from 'react';
import './Iframe.css'

function Iframe() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.lightworkdigital.com/js/form_embed.js';
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    setIframeSrc("https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41");
  }, []);

  return (
    <div>
    <iframe className='ffc_iframe' src={iframeSrc}></iframe>
    </div>
  );
}

export default Iframe;
