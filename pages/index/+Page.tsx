import type { Component } from 'solid-js'

import { Counter } from './Counter'

const Page: Component<{
  test: string
}> = (pageProps) => {
  return (
    <>
      <h1>{pageProps.test}</h1>

      <h1>Welcome</h1>

      <div>
        This page is:
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Page