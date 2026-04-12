import { motion } from "framer-motion";
import { TrendingDown, Scale, Ruler, Calendar } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const weightData = [82.5, 82.1, 81.8, 81.5, 81.2, 80.9, 80.5, 80.3, 80.1, 79.8, 79.5, 79.3];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Progress = () => {
  const maxWeight = Math.max(...weightData);
  const minWeight = Math.min(...weightData);
  const range = maxWeight - minWeight || 1;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold font-display text-foreground">Progress</h1>
          <p className="text-sm text-muted-foreground">Your journey at a glance</p>
        </motion.div>
      </div>

      {/* Key Stats */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Scale, label: "Weight", value: "79.3 kg", change: "-3.2 kg" },
            { icon: Ruler, label: "Body Fat", value: "18.2%", change: "-2.1%" },
            { icon: Calendar, label: "Streak", value: "12 days", change: "Best: 28" },
          ].map(({ icon: Icon, label, value, change }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-3 text-center"
            >
              <Icon size={18} className="mx-auto text-primary mb-1" />
              <p className="text-lg font-bold font-display text-foreground">{value}</p>
              <p className="text-[10px] text-muted-foreground">{label}</p>
              <p className="text-[10px] text-primary font-medium mt-0.5">{change}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weight Chart */}
      <div className="px-5 mb-6">
        <div className="rounded-2xl bg-card border border-border/50 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-foreground">Weight Trend</h3>
            <div className="flex items-center gap-1 text-xs text-primary font-medium">
              <TrendingDown size={14} /> -3.2 kg
            </div>
          </div>
          <div className="relative h-40">
            <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 35}
                  x2="300"
                  y2={i * 35}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                />
              ))}
              {/* Line */}
              <motion.polyline
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={weightData
                  .map((w, i) => {
                    const x = (i / (weightData.length - 1)) * 290 + 5;
                    const y = 130 - ((w - minWeight) / range) * 120 + 5;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
              {/* Area fill */}
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                fill="url(#areaGrad)"
                points={`5,140 ${weightData
                  .map((w, i) => {
                    const x = (i / (weightData.length - 1)) * 290 + 5;
                    const y = 130 - ((w - minWeight) / range) * 120 + 5;
                    return `${x},${y}`;
                  })
                  .join(" ")} 295,140`}
              />
              {/* Dots */}
              {weightData.map((w, i) => {
                const x = (i / (weightData.length - 1)) * 290 + 5;
                const y = 130 - ((w - minWeight) / range) * 120 + 5;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="hsl(var(--primary))"
                  />
                );
              })}
            </svg>
          </div>
          <div className="flex justify-between mt-2">
            {months.filter((_, i) => i % 3 === 0).map((m) => (
              <span key={m} className="text-[10px] text-muted-foreground">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Strength Progress */}
      <div className="px-5 mb-6">
        <h3 className="font-display font-semibold text-foreground mb-3">Strength Progress</h3>
        <div className="space-y-3">
          {[
            { name: "Bench Press", current: "80 kg", prev: "65 kg", pct: 80 },
            { name: "Squat", current: "100 kg", prev: "85 kg", pct: 70 },
            { name: "Deadlift", current: "120 kg", prev: "100 kg", pct: 85 },
          ].map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-display font-semibold text-foreground">{ex.name}</span>
                <span className="text-sm font-bold text-primary">{ex.current}</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ex.pct}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">Started at {ex.prev}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projection */}
      <div className="px-5 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center"
        >
          <p className="text-xs text-muted-foreground mb-1">At your current pace</p>
          <p className="text-xl font-bold font-display text-foreground">75 kg by August</p>
          <p className="text-xs text-primary font-medium mt-1">Stay consistent — you're on track! 💪</p>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Progress;
