function SimpleCustomButton(props) {

    return (
            <button
                className={props.className}
                style={props.style}
                type={props.type}
            >
                {props.text}
            </button>
    )
}

export default SimpleCustomButton;