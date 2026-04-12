import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtitle?: string;
  trend?: string;
  color?: string;
}

const StatCard = ({ icon: Icon, label, value, subtitle, trend, color = "text-primary" }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-card p-4 flex flex-col gap-2 border border-border/50"
    >
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-xl bg-secondary ${color}`}>
          <Icon size={18} />
        </div>
        {trend && (
          <span className="text-xs font-medium text-primary">{trend}</span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold font-display text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
