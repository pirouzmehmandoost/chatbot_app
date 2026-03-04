import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "medium",
  subsets: ["latin"],
});

export const metadata = {
  title: "PíChat",
  description: "A Simple OpenAI Chatbot Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased bg-slate-950 overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
