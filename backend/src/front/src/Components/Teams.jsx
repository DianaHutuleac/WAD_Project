import TeamContent from "../Elements/TeamContent";


const teams = { data : [
    {id: 1, teamName: "Oracle Red Bull Racing", imgSrc: "redbull.svg", href:"/products/redbull"},
    {id: 2, teamName: "Mercedes AMG Petronas-F1 Team", imgSrc: "mercedes.svg", href:"/products/mercedes"},
    {id: 3, teamName: "Scuderia Ferrari", imgSrc: "ferrari.svg", href:"/products/ferrari"},
    {id: 4, teamName: "McLaren Formula 1 Team", imgSrc: "mclaren.svg", href:"/products/mclaren"},
    {id: 5, teamName: "Aston Martin Aramco", imgSrc: "astonmartin.svg", href:"/products/astonmartin"},
    {id: 6, teamName: "BWT Alpine F1 Team", imgSrc: "alpine.svg", href:"/products/alpine"},
    {id: 7, teamName: "Williams Racing", imgSrc: "williams.svg", href:"/products/williams"},
    {id: 8, teamName: "Alfa Romeo F1 Team Stake", imgSrc: "alfaromeo.svg", href:"/products/alfaromeo"},
    {id: 9, teamName: "MoneyGram Haas F1 Team", imgSrc: "haas.svg", href:"/products/haas"},
    {id: 10, teamName: "Scuderia AlphaTauri", imgSrc: "alphatauri.svg", href:"/products/alphatauri"}
] }

export default function Teams() {
    return(
        <div id= "teams">
            <div className="max-w-7xl mx-auto px-4 pt-12 overflow-hidden">
                <h1 className=" text-center text-4xl font-formulafont-bold mb-10">TEAMS</h1>
                <div className="grid grid-cols-5 gap-5 mb-20">
                {teams.data.map((team) => (
                    <TeamContent 
                    data = {team}
                    />
                ))}
                </div>                
            </div>
            
        </div>

    )
}