"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Dumbbell, Target, HeartPulse, Armchair, Clock, Sparkles, ExternalLink } from "lucide-react";
import clsx from "clsx";

/* ---------- Types ---------- */
export type ExerciseItem = {
  id: string | number;
  name: string;
  videoUrl?: string;   // YouTube video link
  sets?: number;
  reps?: number;
  duration?: string;
  target?: string;
  bodyPart?: string;
  equipment?: string;
  description?: string;
  link?: string; // For optional details page
};

/* ---------- Small UI Components ---------- */
function Pill({
  children,
  tone = "primary",
  icon: Icon,
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "muted";
  icon?: React.ComponentType<any>;
}) {
  const tones = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    muted: "bg-muted/20 text-muted-foreground border-border",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded border text-xs font-medium",
        tones[tone]
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

/* ---------- Main Component ---------- */
export default function ExerciseGallery({
  title = "AI-Enhanced Exercises",
  subtitle = "Watch YouTube tutorials and learn correct form instantly",
  stats = [
    { label: "EXERCISES", value: "20+" },
    { label: "AVG DURATION", value: "35 min" },
    { label: "PERSONALIZED", value: "100%" },
  ],
  exercises,
}: {
  title?: string;
  subtitle?: string;
  stats?: { label: string; value: string }[];
  exercises: ExerciseItem[];
}) {
  return (
    <div className="w-full pb-24 pt-16 relative">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              <span className="text-sm text-primary font-medium">Exercise Library</span>
            </div>
            <div className="text-sm text-muted-foreground">Form • Target • Equipment</div>
          </div>

          <div className="p-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">{title.split(" ")[0]} </span>
              <span className="text-primary">{title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">{subtitle}</p>

            <div className="flex items-center justify-center gap-16 mt-10 font-mono">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <p className="text-3xl text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exercises.map((ex) => (
            <Card
              key={ex.id}
              className="flex flex-col bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-primary">EX.{ex.id}</span>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {ex.duration ?? "—"}
                </div>
              </div>

              {/* CONTENT */}
              <CardHeader className="pt-6 px-5">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    {ex.name}
                  </CardTitle>
                  <Pill icon={Sparkles} tone="muted">Guided</Pill>
                </div>

                <div className="flex flex-wrap gap-2">
                  {ex.target && <Pill icon={Target} tone="primary">{ex.target}</Pill>}
                  {ex.bodyPart && <Pill icon={HeartPulse} tone="secondary">{ex.bodyPart}</Pill>}
                  {ex.equipment && <Pill icon={Armchair} tone="muted">{ex.equipment}</Pill>}
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-5 flex flex-col justify-between">
                {/* YOUTUBE PREVIEW */}
                {ex.videoUrl ? (
                  <a
                    href={ex.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-md border border-border hover:opacity-90 transition-all"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeId(ex.videoUrl)}/0.jpg`}
                      alt={`${ex.name} YouTube thumbnail`}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <ExternalLink className="h-10 w-10 text-white opacity-80" />
                    </div>
                  </a>
                ) : (
                  <div className="rounded-md border border-border p-6 text-center text-sm text-muted-foreground">
                    No video available
                  </div>
                )}

                {/* META */}
                <div className="flex items-center flex-wrap gap-2 mt-4">
                  {ex.sets && (
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-mono border border-primary/20">
                      {ex.sets} SETS
                    </span>
                  )}
                  {ex.reps && (
                    <span className="px-2 py-1 rounded bg-secondary/20 text-secondary text-xs font-mono border border-secondary/20">
                      {ex.reps} REPS
                    </span>
                  )}
                  {ex.duration && (
                    <span className="px-2 py-1 rounded bg-muted/20 text-muted-foreground text-xs font-mono border border-border">
                      {ex.duration}
                    </span>
                  )}
                </div>

                {/* DESCRIPTION */}
                {ex.description && (
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                    {ex.description}
                  </p>
                )}
              </CardContent>

              <CardFooter className="px-5 py-4 border-t border-border mt-auto">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={ex.videoUrl} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Helper ---------- */
function getYouTubeId(input?: string): string | null {
  if (!input) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) return url.pathname.replace("/", "") || null;
    if (url.hostname.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/");
      const idx = parts.findIndex((p) => p === "embed");
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
    }
  } catch {}
  return null;
}
