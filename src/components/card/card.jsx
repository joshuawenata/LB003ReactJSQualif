export default function Card({children, ...attr}){

    return <div style={{
        backgroundColor: "#ffffff",
        color: "#000000"
    }} {...attr}>{children}</div>
}

export function CardImage({src, ...attr}){
    return <img style={{
        maxHeight: "400px",
        width: "100%",
    }} src={src} alt="" {...attr}/>
}

export function CardDetail({children}){
    return <div style={{padding:"8px"}}>{children}</div>
}