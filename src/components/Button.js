export default function Button({link, text}){
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={link} target="_blank" rel="noreferer">{text}</a>
    )
}