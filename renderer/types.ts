import type { Component } from 'solid-js'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'

export type PageProps = {}

type Page = Component<PageProps>

export type PageContext = PageContextBuiltIn<Page> & {
  pageProps: PageProps
  config: {
    title: string
    description?: string
  }
}