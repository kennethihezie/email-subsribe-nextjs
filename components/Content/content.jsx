import Form from "../Form/form"

const Content = () => {
    return (
        <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                Get diet and fitness tip in your inbox
            </h2>

            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                Eat better and exercise better. Sigin up for the Diet&Fitness newsletter
            </p>

            <Form />
        </div>
    )
}

export default Content