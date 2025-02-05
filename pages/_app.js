import "../styles/globals.css";
import { LightsProvider } from "../context/LightContext";

export default function App({ Component, pageProps }) {
  return (
    <LightsProvider> {/* Wrap the entire app with LightsProvider */}
      <Component {...pageProps} />
    </LightsProvider>
  );
}
