

export const TestComp = ({children})=>{
    // console.log(props.children)
    return <>
    <div className="alert alert-primary">
    {children}
    </div>
    </>
}