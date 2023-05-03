// https://vite-plugin-ssr.com/onRenderClient

import { createStore, reconcile } from 'solid-js/store'
import { hydrate, render } from 'solid-js/web'
import type { PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types'

import { PageLayout } from './PageLayout'
import type { PageContext } from './types'

type PageContextClient = PageContextBuiltInClient & PageContext

let dispose: () => void
let rendered = false

const [pageContextStore, setPageContext] = createStore<PageContextClient>({} as PageContextClient)

async function onRenderClient(pageContext: PageContextClient) {
  if (rendered === true) {
    document.title = pageContext.config.title
    setPageContext(reconcile(pageContext))
  } else {
    // Dispose to prevent duplicate pages when navigating.
    if (dispose) dispose()

    setPageContext(pageContext)

    const container = document.getElementById('page-view')!
    if (pageContext.isHydration) {
      dispose = hydrate(() => <PageLayout pageContext={pageContextStore} />, container)
    } else {
      dispose = render(() => <PageLayout pageContext={pageContextStore} />, container)
    }
    rendered = true
  }
}

export default onRenderClient