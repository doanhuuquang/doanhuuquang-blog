import type { Metadata } from "next";
import Header from "@/components/OurComponents/Header";

export const metadata: Metadata = {
  title: "Doan Huu Quang",
  description: "Hello world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
