import { Link, withRouter  } from 'react-router-dom';
export default function TeamContent(props) {
    return(
        <Link to={props.data.href}>
            <div key={props.data.id} className="rounded box-content w-auto h-28 bg-formula-grey-second flex items-center justify-center grayscale hover:grayscale-0  ease-out transition-all duration-1000">
                <img className="h-16 w-auto p-2 " src={`../../${props.data.imgSrc}`} alt={props.data.teamName} />
            </div>
        </Link>
    )
}