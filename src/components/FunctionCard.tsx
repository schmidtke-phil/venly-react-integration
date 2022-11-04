import JSONPretty from "react-json-pretty"

type FunctionCardProps = {
    title: string,
    button: string,
    func: () => Promise<void>,
    result: any
}

export default function FunctionCard({title, button, func, result}: FunctionCardProps) {
    return (
        <div className="w-1/2 border border-indigo-700 rounded-xl">
            <h3 className="text-center">{title}</h3>
            <button onClick={() => func()} className="flex mx-auto mt-2">{button}</button>
            <div className="mt-2 p-4">
                <div className="w-full h-full bg-indigo-700 rounded-xl p-2 text-ellipsis overflow-y-auto overflow-x-hidden h-64">
                    <JSONPretty id="json-pretty" data={result}></JSONPretty>
                </div>
            </div>
        </div>
)
}