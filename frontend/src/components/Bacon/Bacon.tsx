import React, { useState } from "react"

const Bacon: React.FC = () => {
  const [count, setCount] = useState<number>(1)
  const image = "/images/bacon.jpg"

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <section>
      <button type="button" onClick={handleClick}>
        Yeah, I want more bacon!
      </button>
      <ul>
        {Array.from(Array(count).keys()).map(() => (
          <li><img src={image} alt="Beautiful slices of fried bacon" /></li>
        ))}
      </ul>
    </section>
  )
}

export default Bacon
