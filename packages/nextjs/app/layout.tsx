import type { Metadata } from "next";
import "~~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Header } from "~~/components/Header";
import { StarkAppProviders } from "~~/providers/StarkAppProviders";

export const metadata: Metadata = {
  title: "Netstrike",
  description: "Hack your way to the top!",
  icons: "/logo.ico",
};

const ScaffoldStarkApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <StarkAppProviders>
          <div className="text-primary font-console flex relative flex-col min-h-screen bg-main">
            {children}
          </div>
          <Toaster />
        </StarkAppProviders>
      </body>
    </html>
  );
};

export default ScaffoldStarkApp;
