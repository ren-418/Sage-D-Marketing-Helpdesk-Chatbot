

interface WorkCardProps {
    title: string;
    description: string;
    image: string;
}

const WorkCard = (props: WorkCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-black text-center md:text-3xl text-xl font-medium">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WorkCard;
