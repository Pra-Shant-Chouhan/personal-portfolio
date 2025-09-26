import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type TypographyProps = HTMLAttributes<HTMLParagraphElement>; // can adjust per element

export function TypographyH1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold", className)}
      {...props}
    />
  );
}

export function TypographyH2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("scroll-m-20 text-3xl font-semibold", className)}
      {...props}
    />
  );
}

export function TypographyLead({ className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  );
}

export function TypographyP({ className, ...props }: TypographyProps) {
  return (
    <p className={cn("leading-7", className)} {...props} />
  );
}
