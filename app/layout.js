import "./globals.css";

export const metadata = {
  title: "Simple Blog",
  description: "A simple blog project by Muhaimin Shihab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
