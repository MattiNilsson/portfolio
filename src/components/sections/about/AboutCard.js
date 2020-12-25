import Icon from '@material-ui/core/Icon';


export default function AboutCard(props){

    return(
        <div>
            <div className="about-hitbox"></div>
            <p className="about-card-small-headline">
                {props.headline}
            </p>
            <div className="about-card">
                <div className="about-svg-icon">
                    <Icon>{props.icon}</Icon>
                </div>
                <h3 className="about-card-headline">
                    {props.headline}
                </h3>
                <p className="about-card-text">
                    {props.text}
                </p>
            </div>
        </div>
    )
}