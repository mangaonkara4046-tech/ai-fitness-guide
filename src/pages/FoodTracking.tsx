import { motion } from "framer-motion";
import { Camera, Mic, Search, RotateCcw, Plus } from "lucide-react";
import MealCard from "@/components/MealCard";
import BottomNav from "@/components/BottomNav";

const meals = [
  {
    name: "Breakfast",
    time: "8:30 AM",
    calories: 420,
    items: ["Oatmeal", "Banana", "Almond Butter"],
    logged: true,
  },
  {
    name: "Lunch",
    time: "1:00 PM",
    calories: 650,
    items: ["Grilled Chicken", "Rice", "Broccoli"],
    logged: true,
  },
  {
    name: "Snack",
    time: "4:00 PM",
    calories: 180,
    items: ["Greek Yogurt", "Berries"],
    logged: true,
  },
  {
    name: "Dinner",
    time: "7:30 PM",
    calories: 0,
    items: [],
    logged: false,
  },
];

const quickActions = [
  { icon: Camera, label: "Scan Food", desc: "Photo recognition" },
  { icon: Mic, label: "Voice Log", desc: "Say what you ate" },
  { icon: Search, label: "Search", desc: "Find food" },
  { icon: RotateCcw, label: "Repeat", desc: "Yesterday's meals" },
];

const FoodTracking = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-2xl font-bold font-display text-foreground">Food</h1>
          <p className="text-sm text-muted-foreground">1,250 of 2,200 kcal consumed</p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map(({ icon: Icon, label, desc }, i) => (
            <motion.button
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="p-2 rounded-xl bg-primary/10">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{label}</span>
              <span className="text-[10px] text-muted-foreground">{desc}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Calorie Bar */}
      <div className="px-5 mb-6">
        <div className="rounded-2xl bg-card border border-border/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-display font-semibold text-foreground">Today's Calories</span>
            <span className="text-xs text-muted-foreground">950 remaining</span>
          </div>
          <div className="h-3 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "57%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-primary"
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
            <span>Consumed: 1,250</span>
            <span>Goal: 2,200</span>
          </div>
        </div>
      </div>

      {/* Meals */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-display font-semibold text-foreground">Meals</h3>
          <button className="flex items-center gap-1 text-xs font-medium text-primary">
            <Plus size={14} /> Add Meal
          </button>
        </div>
        <div className="space-y-3">
          {meals.map((meal, i) => (
            <motion.div
              key={meal.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <MealCard {...meal} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frequent Meals */}
      <div className="px-5 mt-6">
        <h3 className="font-display font-semibold text-foreground mb-3">Frequent Meals</h3>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5">
          {["Protein Shake", "Chicken & Rice", "Egg Sandwich", "Salad Bowl"].map((meal) => (
            <button
              key={meal}
              className="flex-shrink-0 px-4 py-2.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all"
            >
              {meal}
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default FoodTracking;
