"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import React from "react";

export const HeaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith("/dashboard");

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
};
