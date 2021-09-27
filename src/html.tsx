import React from "react";

interface Props {
  body: string;
  bodyAttributes: object;
  headComponents: Array<any>;
  htmlAttributes: object;
  postBodyComponents: Array<any>;
  preBodyComponents: Array<any>;
}

export default function HTML(props: Props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta name="csrf-token" content="random" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="facebook-domain-verification"
          content="tl7q8m56efveaqplbesmph2i148qsg"
        />

        {props.headComponents}
      </head>
      <body id="body" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
