import React from 'react'

function MapEmbeded() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8915.013148070328!2d2.325884502176025!3d48.85713910981974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d82c25eb2d%3A0xfa3666d653524ab6!2sLes%20Deux%20Magots!5e0!3m2!1sen!2sng!4v1758896880205!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{
          border: 0,
          borderRadius: "30px",
          boxShadow: "1px 1px 7px 3px #9e9e9eff",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapEmbeded