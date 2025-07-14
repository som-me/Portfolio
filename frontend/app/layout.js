import "./globals.css";

export const metadata = {
  title: "Som-Me",
  description: "Som Meher - A designer & Programmer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
