import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  const hiddenAnimationState = { y: 1000, scale: 0, opacity: 0};
  const exitAnimationState = { y: 0, scale: 0, opacity: 0 };
  const animateState = { y: 0, scale: 1, opacity: 1 }; 
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
        open 
        className="modal"
        variants={{
          hidden: hiddenAnimationState,
          visible: animateState,
        }}
        initial="hidden"
        animate="visible"
        whileHover= {{ scale: 1.02 }}
        exit={exitAnimationState}
        transition={{ duration: 0.3 }}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
