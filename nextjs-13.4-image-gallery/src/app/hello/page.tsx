export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return <><div><h1>Hello, NextJS 13.5</h1></div></>
}