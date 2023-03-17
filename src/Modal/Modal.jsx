import { useState, useRef, useEffect } from "react";

const Modal = (props) => {
  const { showDiv, onClose, children, class_style, open, handleOpen } = props
  // const [modalClass, setModalClass] = useState();
  const modalRef = useRef(null);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (showDiv) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [onClose])
  return (
    <div className={class_style} ref={modalRef}>
     {children}
    </div>
  )
}

export default Modal