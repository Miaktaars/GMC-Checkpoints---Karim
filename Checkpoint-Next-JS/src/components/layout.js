import "./globals.css";
import { ThemeProvider } from "next-themes";




export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
    <head />
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
  );
}
