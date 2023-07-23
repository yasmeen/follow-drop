import "./globals.css";
import { Inter } from "next/font/google";
import { WagmiProvider } from "@/utils/wagmi";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FollowDrop",
  description: "Leveraging Social Networks for Tokenized Incentives",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <img className="logo" src="logo.png" alt="Logo" />
        <WagmiProvider>{children}</WagmiProvider>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </body>
    </html>
  );
}
