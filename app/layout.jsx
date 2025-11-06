import "./globals.css";

export const metadata = {
  title: "The Discipline Blueprint",
  description: "A self-help guide on discipline, focus, rules, and pillars for success."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
