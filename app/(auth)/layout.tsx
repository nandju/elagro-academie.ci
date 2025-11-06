// app/auth/layout.tsx
import React from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { NavbarAuth } from "@/components/auth-page/navbar/navbar";
import FooterAuth from "@/components/auth-page/footer/footer";

export const metadata = {
  title: "ELAGRO ACADEMY — Authentification",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <NavbarAuth/>
        {children}
        <FooterAuth/>
    </div>
  );
}
