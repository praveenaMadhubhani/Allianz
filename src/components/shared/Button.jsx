export const ButtonSuccess = ({disabled, children, padding, width, id, type, onClick}) => {
    return (
      <button 
          className={`${padding ? padding : 'py-2 px-4'} 
              ${width ? width:'w-[180px]'} 
              bg-[#a3472e] text-white text-[18px] font-bold flex items-center justify-center gap-3
              hover:bg-[#EF6B48] rounded-full font-montserrat`} 
              id={id} 
              type={type ? type : "button"} 
              onClick={onClick}
              disabled={disabled}>
  
              {children}
  
      </button>
    )
  }
  
  export const ButtonDanger = ({disabled, children, padding, width, id, type, onClick}) => {
      return (
        <button 
          className={`${padding ? padding : 'py-2 px-4'} 
              ${width ? width:'w-[180px]'} 
              bg-white bg-opacity-20 text-white text-[18px] font-medium flex items-center justify-center gap-3
              hover:bg-[#EF6B48] rounded-full font-montserrat`} 
              id={id} 
              type={type ? type : "button"} 
              onClick={onClick}
              disabled={disabled}>
  
              {children}
  
      </button>
      )
  }
  
  export const Button = ({disabled, children, styleClass, id, type, onClick}) => {
      return (
        <button 
          className={styleClass} 
          id={id} 
          type={type ? type : "button"} 
          onClick={onClick}
          disabled={disabled}>
  
                {children}
        </button>
      )
  }
  
  export const ButtonSave = ({disabled, children, padding, wfull, id, type, onClick}) => {
      return (
        <button 
          className={`${padding ? padding : 'py-2 px-6'} 
          ${wfull && 'w-full'} 
          bg-blue-500 text-white text-sm font-medium flex items-center justify-center gap-3 rounded-md
          hover:bg-blue-700`} 
          id={id} 
          type={type ? type : "button"} 
          onClick={onClick}
          disabled={disabled}>
  
                {children}
  
        </button>
      )
  }
  
  export const ButtonNormal = ({disabled, children, padding, width, id, type, onClick}) => {
      return (
        <button 
        className={`${padding ? padding : 'py-2 px-4'} 
            ${width ? width:'w-[180px]'} 
            bg-[#b47c6c] text-white text-[18px] font-bold flex items-center justify-center gap-3
             rounded-full font-montserrat`} 
            id={id} 
            type={type ? type : "button"} 
            onClick={onClick}
            disabled={disabled}>

            {children}

    </button>
      )
  }