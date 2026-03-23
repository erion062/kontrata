import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kontratë Bashkëpunimi",
  description: "Sistem për nënshkrimin elektronik të kontratave",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
