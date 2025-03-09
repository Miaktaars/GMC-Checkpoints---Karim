import Player from "./player";
import top10Players from "./players";


export default function ListPlayer() {
    return (
        <div>
            {top10Players.map(player => {
                const { name, team, nationality, jerseyNumber, age, imageURL } = player
                return (<Player name={name} team={team} nationality={nationality} jerseyNumber={jerseyNumber} age={age} imageURL={imageURL} />)
            })}
        </div>
    )

}