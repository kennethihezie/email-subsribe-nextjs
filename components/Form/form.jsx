import Input from '../Input/input'
import Button from '../Button/button'
const Form = () => {
    return (
        <div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-3 md:space-y-0">
            <Input />
            <Button />
        </div>
    )
}

export default Form