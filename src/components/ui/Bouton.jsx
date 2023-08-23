export default function Bouton(props)
{
    return(
        <button style={{backgroundColor: props.couleur }} onClick={props.onClick}>{props.children}</button>
    );
}

