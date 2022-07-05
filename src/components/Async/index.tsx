import { useEffect, useState } from "react"

export const Async = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }, [])
  return (
    <div>
      <div>Hello World</div>
      {isVisible && <button>Button</button>}
      {!isVisible && <button>Removed</button>}
    </div>
  )
}