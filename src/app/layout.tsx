import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Valijon — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in TypeScript, React/Next.js, Node.js, and Python. Based in Tashkent, open to remote opportunities worldwide.",
  keywords: [
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Remote Developer",
  ],
  openGraph: {
    title: "Valijon — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in TypeScript, React/Next.js, Node.js, and Python.",
    type: "website",
    url: "https://sv211.xyz",
  },
  metadataBase: new URL("https://sv211.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme"),d=t==="dark"||(t===null&&matchMedia("(prefers-color-scheme:dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
