import { Check } from "lucide-react";

interface CheckItem {
  label: string;
  done: boolean;
}

interface DailyChecklistProps {
  items: CheckItem[];
}

const DailyChecklist = ({ items }: DailyChecklistProps) => {
  const completed = items.filter((i) => i.done).length;

  return (
    <div className="rounded-2xl bg-card border border-border/50 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-semibold text-foreground">Daily Goals</h3>
        <span className="text-xs font-medium text-muted-foreground">
          {completed}/{items.length}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
              item.done ? "bg-primary/5" : "bg-secondary/50"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                item.done
                  ? "bg-primary text-primary-foreground"
                  : "border-2 border-muted-foreground/30"
              }`}
            >
              {item.done && <Check size={12} strokeWidth={3} />}
            </div>
            <span
              className={`text-sm ${
                item.done
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyChecklist;
