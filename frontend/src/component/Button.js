//TODO custom button
function CustomButton({img_src, url, className, onClick}) {
    const style= {
        width: '30px'
    }
    return (
        <div className={className} onClick={onClick}>
            <a href={url}><img style={style} src={img_src} alt="valami"/></a>
        </div>
    )
}

export default CustomButton;
