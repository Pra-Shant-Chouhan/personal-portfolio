import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type TypographyProps = HTMLAttributes<HTMLParagraphElement>;

/* ------------------- Headings ------------------- */

export function TypographyH1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight",
        "text-foreground leading-tight",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight",
        "text-foreground leading-snug",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight",
        "text-foreground leading-snug",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH4({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight",
        "text-foreground leading-snug",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH5({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg sm:text-xl font-medium tracking-tight",
        "text-foreground leading-snug",
        className
      )}
      {...props}
    />
  );
}

/* ------------------- Paragraphs ------------------- */

export function TypographyLead({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg sm:text-xl text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export function TypographyP({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg leading-7 text-foreground/90",
        className
      )}
      {...props}
    />
  );
}

export function TypographyMuted({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-sm sm:text-base text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export function TypographySmall({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xs sm:text-sm text-muted-foreground leading-snug",
        className
      )}
      {...props}
    />
  );
}
