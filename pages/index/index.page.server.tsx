// https://vite-plugin-ssr.com/data-fetching

export async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        test: "TEST_VALUE"
      }
    }
  }
}

export const passToClient = ['pageProps']