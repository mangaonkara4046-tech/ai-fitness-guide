import { motion } from "framer-motion";
import { Flame, Droplets, Footprints, Dumbbell, Sparkles, ChevronRight } from "lucide-react";
import ProgressRing from "@/components/ProgressRing";
import StatCard from "@/components/StatCard";
import StreakBadge from "@/components/StreakBadge";
import DailyChecklist from "@/components/DailyChecklist";
import BottomNav from "@/components/BottomNav";

const Dashboard = () => {
  const calorieGoal = 2200;
  const caloriesConsumed = 1450;
  const calorieProgress = Math.round((caloriesConsumed / calorieGoal) * 100);

  const checklistItems = [
    { label: "Log all meals", done: true },
    { label: "Complete workout", done: true },
    { label: "Drink 8 glasses of water", done: false },
    { label: "Get 7+ hours sleep", done: true },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-muted-foreground">Good morning</p>
            <h1 className="text-2xl font-bold font-display text-foreground">Alex</h1>
          </div>
          <StreakBadge days={12} />
        </motion.div>
      </div>

      {/* Main Calorie Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center py-6 relative"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-48 h-48 rounded-full" style={{ background: "var(--gradient-glow)" }} />
        </div>
        <ProgressRing
          progress={calorieProgress}
          size={180}
          strokeWidth={12}
          value={caloriesConsumed.toLocaleString()}
          unit={`/ ${calorieGoal.toLocaleString()} kcal`}
          label="Calories Today"
        />
        <p className="text-xs text-muted-foreground mt-2">
          {calorieGoal - caloriesConsumed} kcal remaining
        </p>
      </motion.div>

      {/* Macro Split */}
      <div className="px-5 mb-6">
        <div className="rounded-2xl bg-card border border-border/50 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-display font-semibold text-foreground">Macros</h3>
            <span className="text-xs text-muted-foreground">Goal: 40/30/30</span>
          </div>
          <div className="flex gap-4">
            {[
              { label: "Protein", value: "92g", goal: "132g", pct: 70, color: "bg-primary" },
              { label: "Carbs", value: "148g", goal: "220g", pct: 67, color: "bg-info" },
              { label: "Fat", value: "38g", goal: "73g", pct: 52, color: "bg-warning" },
            ].map((macro) => (
              <div key={macro.label} className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">{macro.label}</span>
                  <span className="text-xs font-semibold text-foreground">{macro.value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${macro.pct}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${macro.color}`}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">{macro.goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="px-5 grid grid-cols-2 gap-3 mb-6">
        <StatCard icon={Footprints} label="Steps" value="6,842" subtitle="/ 10,000" trend="+12%" />
        <StatCard icon={Droplets} label="Water" value="5" subtitle="/ 8 glasses" color="text-info" />
        <StatCard icon={Dumbbell} label="Workout" value="Done" subtitle="Upper Body" color="text-warning" />
        <StatCard icon={Flame} label="Burned" value="380" subtitle="kcal active" />
      </div>

      {/* AI Insight */}
      <div className="px-5 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <Sparkles size={18} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-display font-semibold text-foreground mb-1">AI Insight</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                You're 40g short on protein today. Consider adding a protein shake or Greek yogurt 
                to your next meal to hit your target. Your workout consistency is 🔥 this week!
              </p>
            </div>
            <ChevronRight size={16} className="text-primary mt-1" />
          </div>
        </motion.div>
      </div>

      {/* Daily Checklist */}
      <div className="px-5 mb-6">
        <DailyChecklist items={checklistItems} />
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
