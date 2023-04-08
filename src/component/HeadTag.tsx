import { HeadTagType } from "../types/HeadTagType"

export default function HeadTagContent(props:HeadTagType){
    return(
        <>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name="description" content={props.description} />
        <meta name="keywords" content= {props.keywords} />
        <meta name="author" content={props.authorName} />
        <meta property="og:title" content={props.authorName} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="favicon.ico" />
        </>
    )
}