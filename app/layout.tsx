import "./style/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
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
