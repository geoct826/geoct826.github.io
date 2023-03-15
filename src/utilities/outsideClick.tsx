import React from 'react'

const useOutsideClick = (openId, callback) => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      const handleClick = (event) => {
        let parentId = "none"
        if (event.target.parentElement != null) {
          parentId = event.target.parentElement.id
        }

        if (ref.current && !ref.current.contains(event.target) && parentId != openId && event.target.id !== openId) {
            callback();
          }
      }
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      }
    }, [ref])
  
    return ref
  }

  export default useOutsideClick