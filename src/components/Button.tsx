import React from 'react'

interface ButtonsProps {
  label: string;
  type: string;
}

const Button: React.FC<ButtonsProps> = ({label,type}) => {
  return (
    <div className={`${type} button`}>{label}</div>
  )
}

export default Button