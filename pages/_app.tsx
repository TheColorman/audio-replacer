import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerWorker = () => {
        // Register service worker
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("COOP/COEP Service Worker registered", registration.scope)
            // If the registration is active, but it's not controlling the page
            if (registration.active && !navigator.serviceWorker.controller) {
              window.location.reload()
            }
          },
          function (err) {
            console.log("COOP/COEP Service Worker failed to register", err)
          }
        )
      }
      window.addEventListener("load", registerWorker)
      return function cleanupListener() {
        window.removeEventListener("load", registerWorker)
      }
    } else {
      console.warn("Cannot register a service worker")
    }
  })
  return <Component {...pageProps} />
}

export default MyApp
