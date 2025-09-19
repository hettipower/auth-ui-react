import React, { useState } from 'react'
import { Input } from './Input'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }

export const PasswordInput: React.FC<Props> = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div className="relative">
            <Input {...props} type={show ? 'text' : 'password'} />
            <button type="button" className="absolute right-3 top-[34px] text-xs text-zinc-500" onClick={() => setShow((s) => !s)}>
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}