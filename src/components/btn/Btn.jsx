import React from 'react'
import './Btn.css'

export default function Btn({label, className, style}) {
  return (
    <div className={className ?? 'btn-component'} style={style}>
      {label}
    </div>
  )
}
