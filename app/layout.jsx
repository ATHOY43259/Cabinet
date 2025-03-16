import "./globals.css";

export const metadata = {
  title: "Cabinet Dashboard",
  description: "A dashboard for managing cabinets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}