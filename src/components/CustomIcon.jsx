import React from 'react';

export default function CustomIcon({iconType}) {
  return (
      <span 
      style={{textDecoration: 'none', fontSize: 'inherit'}} 
      className={`lui-icon lui-icon--${iconType ? iconType : ''}`}
      >
      </span>
  );
}