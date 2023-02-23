//TODO custom button
function CustomButton({img_src, url, className}) {
    const style= {
        width: '30px'
    }
    return (
        <div className={className}>
            <a href={url}><img style={style} src={img_src} alt="valami"/></a>
        </div>
    )
}

export default CustomButton;