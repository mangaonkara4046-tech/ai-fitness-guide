import { motion } from "framer-motion";
import { Dumbbell, Timer, Flame, ChevronRight, Plus, Play } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const workouts = [
  { name: "Upper Body", duration: "45 min", calories: 320, exercises: 6, done: true },
  { name: "Running", duration: "30 min", calories: 280, exercises: 1, done: true },
];

const plans = [
  { name: "Push/Pull/Legs", desc: "6-day split", level: "Intermediate" },
  { name: "Full Body 3x", desc: "3-day program", level: "Beginner" },
  { name: "5x5 Strength", desc: "5-day strength", level: "Advanced" },
];

const Activity = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold font-display text-foreground">Activity</h1>
          <p className="text-sm text-muted-foreground">2 workouts today · 600 kcal burned</p>
        </motion.div>
      </div>

      {/* Quick Start */}
      <div className="px-5 mb-6">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl p-5 flex items-center gap-4 border border-primary/30 bg-primary/5"
        >
          <div className="p-3 rounded-2xl bg-primary text-primary-foreground">
            <Play size={24} />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-display font-bold text-foreground">Start Workout</h3>
            <p className="text-xs text-muted-foreground">Begin a new session or continue a plan</p>
          </div>
          <ChevronRight className="text-primary" />
        </motion.button>
      </div>

      {/* Today's Activity */}
      <div className="px-5 mb-6">
        <h3 className="font-display font-semibold text-foreground mb-3">Today</h3>
        <div className="space-y-3">
          {workouts.map((workout, i) => (
            <motion.div
              key={workout.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Dumbbell size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{workout.name}</h4>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Timer size={10} /> {workout.duration}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Flame size={10} /> {workout.calories} kcal
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Completed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workout Plans */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-foreground">Workout Plans</h3>
          <button className="flex items-center gap-1 text-xs text-primary font-medium">
            <Plus size={14} /> Create
          </button>
        </div>
        <div className="space-y-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50"
            >
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm">{plan.name}</h4>
                <p className="text-xs text-muted-foreground">{plan.desc} · {plan.level}</p>
              </div>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="px-5 mb-6">
        <div className="rounded-2xl bg-card border border-border/50 p-4">
          <h3 className="font-display font-semibold text-foreground mb-3">This Week</h3>
          <div className="flex gap-1.5">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
              const active = i < 5;
              const today = i === 4;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full aspect-square rounded-xl flex items-center justify-center text-xs font-medium transition-all ${
                      today
                        ? "bg-primary text-primary-foreground"
                        : active
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {active ? "✓" : ""}
                  </div>
                  <span className="text-[10px] text-muted-foreground">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Activity;
