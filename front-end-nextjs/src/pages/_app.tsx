import "https://meyerweb.com/eric/tools/css/reset/reset.css";   // Meyers reset first
import "crud-next/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
