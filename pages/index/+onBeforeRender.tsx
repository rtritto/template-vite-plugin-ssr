// https://vite-plugin-ssr.com/data-fetching

async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        test: "TEST_VALUE"
      }
    }
  }
}

export default onBeforeRender