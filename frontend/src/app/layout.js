import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import PageConnectKit from "@/context/PageConnectKit";
import ReduxProvider from "@/providers/reduxProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavProvider } from "@/context/nav_context";

const roboto_Slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Verxio Protocol",
  description:
    "Verxio is revolutionalizing the way people learn and interact with the blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_Slab.className}>
        <ReduxProvider>
          <NavProvider>
            <PageConnectKit>{children}</PageConnectKit>
          </NavProvider>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
