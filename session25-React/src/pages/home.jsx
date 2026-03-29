import { TestComp } from "./testComp"


export const Home = ()=>{
    return (
        <>
            <h1>Home Page</h1>

            <TestComp>
                <h1>h1 inside alert</h1>
            </TestComp>
            <TestComp>
                <h2>h2 inside alert </h2>
            </TestComp>
        </>
    )
}