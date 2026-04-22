import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden flex items-center justify-center px-4 py-10">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Sparkles className="w-8 h-8 text-primary-foreground" strokeWidth={2.5} />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight">
            Nutri<span className="text-primary">Sarthi</span>-AI
          </h1>
          <p className="text-sm text-muted-foreground mt-1.5">
            Your intelligent fitness companion
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl border border-border/50 p-7 shadow-2xl backdrop-blur-xl"
          style={{ background: "var(--gradient-card)" }}
        >
          {/* Tabs */}
          <div className="flex bg-muted/40 rounded-xl p-1 mb-6">
            <button
              onClick={() => setMode("signin")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                mode === "signin"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                mode === "signup"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Create account
            </button>
          </div>

          <motion.div
            key={mode}
            initial={{ opacity: 0, x: mode === "signin" ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-xl font-semibold mb-1">
              {mode === "signin" ? "Welcome back" : "Start your journey"}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              {mode === "signin"
                ? "Log in to continue tracking your goals"
                : "Create an account to begin your transformation"}
            </p>

            {/* Social buttons */}
            <div className="space-y-2.5 mb-5">
              <Button
                variant="outline"
                className="w-full h-11 bg-card hover:bg-muted/60 border-border/60 font-medium"
                type="button"
              >
                <GoogleIcon />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-11 bg-card hover:bg-muted/60 border-border/60 font-medium"
                type="button"
              >
                <AppleIcon />
                Continue with Apple
              </Button>
            </div>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/60" />
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-card px-3 text-muted-foreground">or with email</span>
              </div>
            </div>

            {/* Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs text-muted-foreground">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-11 bg-muted/30 border-border/60"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs text-muted-foreground">
                    Password
                  </Label>
                  {mode === "signin" && (
                    <button
                      type="button"
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-11 bg-muted/30 border-border/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 font-semibold text-primary-foreground group"
                style={{ background: "var(--gradient-primary)" }}
              >
                {mode === "signin" ? "Sign in" : "Create account"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-5 leading-relaxed">
              By continuing, you agree to our{" "}
              <span className="text-foreground/80 hover:text-primary cursor-pointer">Terms</span>{" "}
              and{" "}
              <span className="text-foreground/80 hover:text-primary cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </motion.div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link to="/" className="hover:text-foreground transition-colors">
            ← Back to app preview
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5c-.24 1.4-1.66 4.1-5.5 4.1-3.31 0-6.01-2.74-6.01-6.12s2.7-6.12 6.01-6.12c1.88 0 3.14.8 3.86 1.5l2.63-2.54C16.83 3.4 14.66 2.4 12 2.4 6.69 2.4 2.4 6.7 2.4 12s4.29 9.6 9.6 9.6c5.55 0 9.22-3.9 9.22-9.4 0-.63-.07-1.12-.16-1.6H12z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.365 1.43c0 1.14-.46 2.23-1.21 3.04-.81.86-2.13 1.52-3.22 1.43-.13-1.11.41-2.27 1.16-3.06.83-.88 2.24-1.55 3.27-1.41zM20.5 17.27c-.55 1.27-.81 1.84-1.51 2.96-1 1.6-2.41 3.59-4.16 3.6-1.55.02-1.95-1-4.06-.99-2.11.01-2.55 1.01-4.1.99-1.75-.02-3.09-1.81-4.09-3.41C-.27 15.65-.55 10.4 1.81 7.65c1.55-1.81 4-2.87 6.3-2.87 2.34 0 3.81 1.28 5.74 1.28 1.87 0 3.01-1.28 5.71-1.28 2.04 0 4.21 1.11 5.75 3.03-5.05 2.77-4.23 10-4.81 9.46z" />
  </svg>
);

export default Auth;
