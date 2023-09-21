import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Gupta",
  description: "Develop and design by Aman Gupta",
};

/**
 * This code defines a React functional component called `RootLayout` that serves as the layout for the root of the application.
 * It takes a `children` prop as input and renders it within an HTML structure.
 * The component also includes a link to import a CSS file and a font from Google Fonts.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered within the layout.
 * @returns {ReactNode} The rendered HTML structure with the provided `children` content.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
