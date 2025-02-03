import "../styles/globals.css";
import { LightsProvider } from "../context/Lightcontext";

export default function App({ Component, pageProps }) {
  return (
    <LightsProvider> {/* Wrap the entire app with LightsProvider */}
      <Component {...pageProps} />
    </LightsProvider>
  );
}
