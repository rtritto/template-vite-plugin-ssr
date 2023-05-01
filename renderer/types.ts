import type { Component } from 'solid-js'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'

export type PageProps = {}

type Page = Component<PageProps>

export type PageContext = PageContextBuiltIn<Page> & {
  pageProps: PageProps
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}