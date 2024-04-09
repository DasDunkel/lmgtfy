/**
 * This file is used as a template for all pages during the Gatsby SSR process.
 */

import React from 'react'

interface Props {
  htmlAttributes: Record<string, unknown>
  bodyAttributes: Record<string, unknown>
  headComponents: React.ReactElement | null
  preBodyComponents: React.ReactElement | null
  postBodyComponents: React.ReactElement | null
  // Body HTML generated by Gatsby
  body: string
}

const title = 'LMGTFY'
const DESCRIPTION = 'Let me Google that for you...'
const siteUrl = 'https://lmgtfy.dunk.dev/'

const GatsbySsrHtmlTemplate: React.FC<Props> = props => {
  return (
    <html {...props.htmlAttributes} lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* <!-- Search Engine --> */}
        <meta name="description" content={DESCRIPTION} />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={DESCRIPTION} />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={DESCRIPTION} />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={DESCRIPTION} />
        <meta name="og:url" content={siteUrl} />
        <meta name="og:locale" content="en_GB" />
        <meta name="og:type" content="website" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default GatsbySsrHtmlTemplate
