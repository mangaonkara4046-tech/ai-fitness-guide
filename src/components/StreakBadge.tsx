import { Flame } from "lucide-react";
import { motion } from "framer-motion";

interface StreakBadgeProps {
  days: number;
}

const StreakBadge = ({ days }: StreakBadgeProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
    >
      <Flame size={18} className="text-primary animate-pulse-glow" />
      <span className="text-sm font-bold font-display text-primary">{days} day streak</span>
    </motion.div>
  );
};

export default StreakBadge;
