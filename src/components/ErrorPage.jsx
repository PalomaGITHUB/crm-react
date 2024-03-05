import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    const mensaje = error.message
    const texto = error.statusText

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20">CRM - Clientes</h1>
            <p className="text-center">Lo sentimos, hubo un error</p>
            <p className="text-center">{texto || mensaje}</p>
        </div>
    )
}