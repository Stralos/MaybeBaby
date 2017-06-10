// @flow
import React from "react";
import Main from "./components/index.jsx";


type Props = { greeting: string, date: number };

const Index = (props : Props) => {
  return(
    <html>
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <Main {...props}/>
      <script src="./bundle.js"/>
    </body>
    </html>
  )
}

export default Index