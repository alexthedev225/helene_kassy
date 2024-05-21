"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  // Fonction utilitaire pour vérifier si un lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex justify-between items-center bg-white border h-24 px-60">
      <div className="flex flex-col items-center w-max">
        <h1 className="font-extrabold text-xl tracking-widest">
          HELENE KASSY
        </h1>
        <p>Coach de vie </p>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" passHref>
          <span className={isActive("/") ? "text-green-500" : ""}>Accueil</span>
        </Link>
        <Link href="/a-propos" passHref>
          <span className={isActive("/a-propos") ? "text-green-500" : ""}>À propos</span>
        </Link>
        <Link href="/services" passHref>
          <span className={isActive("/services") ? "text-green-500" : ""}>Services</span>
        </Link>
        <Link href="/contact" passHref>
          <span className={isActive("/contact") ? "text-green-500" : ""}>Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
