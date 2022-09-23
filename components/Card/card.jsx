import Form from "../Form/form"

const Card = ({ children }) => {
    return (
        <div className="flex bg-zinc-800 mx-6 p-2 rounded-2xl">
             <div className="flex flex-col md:flex-row round-l-xl">
                { children }
             </div>
        </div>
    )
}

export default Card