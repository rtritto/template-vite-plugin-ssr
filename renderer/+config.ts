// https://vite-plugin-ssr.com/config

import type { Config as ConfigCore } from 'vite-plugin-ssr/types'

import type { Component } from './types.ts'

export type Config = ConfigCore & {
  /** Solid element renderer and appended into &lt;head>&lt;/head> */
  Head?: Component
  Layout?: Component
  title?: string
  description?: string
  /**
   * @default 'en'
   */
  lang?: string
  Page?: Component
}

// alias
export type UserConfig = Config

export default {
  clientRouting: true,
  meta: {
    // We define a new config 'title'
    title: {
      // The value of 'title' should only be loaded on the server
      env: 'server-only'
    }
  },
  passToClient: [
    // 'documentProps',
    'pageProps',
    'title'
  ]
} satisfies ConfigCore