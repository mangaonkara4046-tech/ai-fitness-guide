import { motion } from "framer-motion";
import { User, Settings, Trophy, Moon, LogOut, ChevronRight, Crown, Bell, Shield } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: Settings, label: "Settings", desc: "Account & preferences" },
  { icon: Bell, label: "Notifications", desc: "Reminders & alerts" },
  { icon: Trophy, label: "Achievements", desc: "12 badges earned" },
  { icon: Moon, label: "Relax Mode", desc: "Pause tracking" },
  { icon: Shield, label: "Privacy", desc: "Data & security" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <User size={28} className="text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display text-foreground">Alex Johnson</h1>
            <p className="text-sm text-muted-foreground">Member since Jan 2025</p>
          </div>
        </motion.div>
      </div>

      {/* Premium Banner */}
      <div className="px-5 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 flex items-center gap-3"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Crown size={24} className="text-primary-foreground" />
          <div className="flex-1">
            <h3 className="font-display font-bold text-primary-foreground">Go Premium</h3>
            <p className="text-xs text-primary-foreground/70">AI coaching, advanced analytics & more</p>
          </div>
          <ChevronRight className="text-primary-foreground" />
        </motion.div>
      </div>

      {/* Stats Summary */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Workouts", value: "86" },
            { label: "Days Active", value: "124" },
            { label: "Kcal Burned", value: "42.3k" },
          ].map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-3 text-center"
            >
              <p className="text-lg font-bold font-display text-foreground">{value}</p>
              <p className="text-[10px] text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="px-5">
        <div className="space-y-1">
          {menuItems.map(({ icon: Icon, label, desc }, i) => (
            <motion.button
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-card transition-all"
            >
              <div className="p-2 rounded-xl bg-secondary">
                <Icon size={18} className="text-muted-foreground" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.button>
          ))}
        </div>

        <button className="w-full flex items-center gap-3 p-3 rounded-xl mt-4 hover:bg-destructive/10 transition-all">
          <div className="p-2 rounded-xl bg-destructive/10">
            <LogOut size={18} className="text-destructive" />
          </div>
          <span className="text-sm font-medium text-destructive">Log Out</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
