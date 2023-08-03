import "./style/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Robby's portfolio`,
  description: "Robby's portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
