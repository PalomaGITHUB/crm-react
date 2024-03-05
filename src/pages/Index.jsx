import { useLoaderData } from "react-router-dom"
import { obtenerClientes } from "../data/clientes"
import Cliente from "../components/Cliente"

export function loader(){
    const clientes = obtenerClientes()

    return clientes
}

const Index = () => {
    const clientes = useLoaderData()

  return (
    <>
    <h1 className="font-black text-4xl text-orange-900">Clientes actuales</h1>
    <p className="mt-3">Administra aquí tus clientes.</p>
    <p>Selecciona 'Editar' si deseas modificar algún campo. Recuerda que todos los campos son obligatorios.</p>
    <p>Con la opción 'Eliminar', el cliente seleccionado se eliminará de manera permanente.</p>

    {/* mostrar los clientes */}
    {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-orange-800 text-white">
                <tr>
                    <th className="p-2">Cliente</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map (cliente => (
                    <Cliente 
                        cliente = {cliente}
                        key = {cliente.id}
                    />
                ))}
            </tbody>
        </table>
    ) : (
        <p className="text-center nt-10 mt-5 font-bold">Todavía no hay clientes. 
        Puedes añadir clientes seleccionando 'Nuevos clientes' en el menú lateral.</p>
    )
}
    </>
  )
}

export default Index