import { Clock, ChevronRight } from "lucide-react";

interface MealCardProps {
  name: string;
  time: string;
  calories: number;
  items: string[];
  logged: boolean;
}

const MealCard = ({ name, time, calories, items, logged }: MealCardProps) => {
  return (
    <div className={`rounded-2xl border p-4 transition-all ${
      logged
        ? "bg-card border-border/50"
        : "bg-secondary/30 border-dashed border-primary/30"
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            logged ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
          }`}>
            <Clock size={18} />
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {logged ? (
            <span className="text-sm font-semibold text-foreground">{calories} kcal</span>
          ) : (
            <span className="text-xs font-medium text-primary">+ Log</span>
          )}
          <ChevronRight size={16} className="text-muted-foreground" />
        </div>
      </div>
      {logged && items.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {items.map((item, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealCard;
