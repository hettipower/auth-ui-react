import React from 'react'

export const FieldError: React.FC<{ message?: string }> = ({ message }) => (
    message ? <p className="text-xs text-red-500 mt-1">{message}</p> : null
)