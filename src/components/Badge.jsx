import { motion } from 'framer-motion';

export default function Badge({ caption }) {
  return <motion.span className="badge">{caption}</motion.span>;
}
