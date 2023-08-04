const Card = ({backgroundColor, body, title, iconSrc, footer}) => {
    const backgroundColorStyle = backgroundColor ? {backgroundColor: backgroundColor} : {}; 
    
    return <div className="card" style={backgroundColorStyle}>
        <div className="card-header">
            {iconSrc && <img className="card-icon" src={iconSrc} alt="card-icon"/>}
            <div className="card-title">{title}</div>
        </div>
        <div className="card-body">{body}</div>
        <div className="card-footer">
            {footer}
        </div>
    </div>
}

export default Card;