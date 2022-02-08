import React from 'react';
import './container.scss';

export interface LayoutProps  { 
  children: React.ReactNode
}

export function Container(props : LayoutProps) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
