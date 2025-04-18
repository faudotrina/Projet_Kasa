import { useState } from 'react'
import { ChevronUp, ChevronDown  } from 'lucide-react';
import '../../styles/collapse.scss'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
        {title} 
        {isOpen ? <ChevronDown className='chevron' /> : <ChevronUp className='chevron' />}
      </button>
      {isOpen && <div className="dropdown-content">{text}</div>}
    </div>
  )
}

export default Collapse
