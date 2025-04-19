import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import '../../styles/collapse.scss'

function Collapse({ title, text, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
        {title}
        {isOpen ? (
          <ChevronDown className="chevron" />
        ) : (
          <ChevronUp className="chevron" />
        )}
      </button>
      {isOpen ? <div className="dropdown-content">{text}</div> : null}
    </div>
  )
}

export default Collapse
