// https://vite-plugin-ssr.com/onRenderHtml

import { generateHydrationScript, renderToStream } from 'solid-js/web'
import { escapeInject, dangerouslySkipEscape, stampPipe } from 'vite-plugin-ssr/server'

import { PageLayout } from './PageLayout'
import logoUrl from './logo.svg'
import type { PageContext } from './types'

function onRenderHtml(pageContext: PageContext) {
  const { pipe } = renderToStream(() => <PageLayout pageContext={pageContext} />)
  stampPipe(pipe, 'node-stream')

  // See https://vite-plugin-ssr.com/head
  const { config } = pageContext
  const description = config.description || 'App using Vite + vite-plugin-ssr'

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${config.title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${pipe}</div>
      </body>
    </html>`
}

export default onRenderHtml