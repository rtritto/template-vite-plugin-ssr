import type { Component } from 'solid-js'

const Page: Component = (pageProps) => {
  if (pageProps.is404) {
    // Return a UI component "Page Not Found."
    return (
      <>404 - Page Not Found.</>
    )
  } else {
    // Return a UI component "Our server is having problems. Sincere apologies. Try again later."
    return (
      <>Our server is having problems. Sincere apologies. Try again later.</>
    )
  }
}

export { Page }
