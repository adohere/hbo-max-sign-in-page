import React, { ChangeEvent, useState } from 'react'

interface Props {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({label,placeholder,type,value,onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='w-full input-field flex flex-col'>
      <label className='text-white text-[14px] mb-[8px]'>{label}</label>
      <div className='relative'>
        {type === "password" ?  (
          <input
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full'
          />
        ):(
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full'
          />
        )}
        <span className={`cursor-pointer select-none absolute right-[16px] top-1/2 translate-y-[-50%] ${type !== "password" ? 'hidden' : 'block'}`} onClick={toggleShowPassword}>
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="19.29" height="13.779" viewBox="0 0 19.29 13.779">
              <g id="visible--eye-eyeball-open-view" transform="translate(0 -2)">
                <path id="Subtract" d="M4.041,4.054A9.748,9.748,0,0,1,9.645,2a9.758,9.758,0,0,1,5.6,2.054,19.589,19.589,0,0,1,3.527,3.358l.007.007a2.385,2.385,0,0,1,0,2.94l-.007.007a19.589,19.589,0,0,1-3.527,3.358,9.739,9.739,0,0,1-5.6,2.054,9.766,9.766,0,0,1-5.6-2.053A19.686,19.686,0,0,1,.514,10.365l-.007-.007a2.383,2.383,0,0,1,0-2.939l.007-.007A19.589,19.589,0,0,1,4.041,4.054Zm5.6,7.935a3.1,3.1,0,1,0-3.1-3.1A3.1,3.1,0,0,0,9.645,11.989Z" transform="translate(0)" fill="#fff" fill-rule="evenodd"/>
              </g>
            </svg>
          ):(
            <svg xmlns="http://www.w3.org/2000/svg" width="19.289" height="19.27" viewBox="0 0 19.289 19.27">
              <g id="invisible-1--disable-eye-eyeball-hide-off-view" transform="translate(-0.056 -0.063)">
                <path id="Union" d="M.345,1.815A1.042,1.042,0,0,1,1.817.342l3.651,3.65A8.809,8.809,0,0,1,9.7,2.809a9.759,9.759,0,0,1,5.6,2.056,19.606,19.606,0,0,1,3.526,3.357l.006.007a2.378,2.378,0,0,1,0,2.939l-.006.008a20.108,20.108,0,0,1-3.124,3.056l3.349,3.35a1.042,1.042,0,0,1-1.472,1.472ZM12.5,11.027A3.1,3.1,0,0,0,8.371,6.9ZM.571,8.221A21.064,21.064,0,0,1,2.384,6.284l9.867,9.867a7.953,7.953,0,0,1-2.55.436,9.757,9.757,0,0,1-5.6-2.054A19.7,19.7,0,0,1,.57,11.176l-.006-.008a2.378,2.378,0,0,1,0-2.939L.57,8.221Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
              </g>
            </svg>
          )}
        </span>
      </div>
    </div>
  )
}

export default Input