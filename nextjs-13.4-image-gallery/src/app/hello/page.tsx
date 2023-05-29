// main example - server side rendered
export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw Error("Bazninga");
    return <><div><h1>Hello, NextJS 13.5</h1></div></>
}

// to get an error message use:
// throw Error("Bazninga");

// second example - client side rendered
// "use client"
// import { useEffect } from  "react";
//  export default function Page() {
//    useEffect{() => {}, {}}
//    return <><div><h1>Hello, NextJS 13.5</h1></div></>
//  }
