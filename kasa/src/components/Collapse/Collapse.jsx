import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/collapse.scss'

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
        {title} <i class="fa-solid fa-angle-up"></i>
      </button>
      {isOpen && <div className="dropdown-content">{text}</div>}
    </div>
  )
}

export default Collapse
