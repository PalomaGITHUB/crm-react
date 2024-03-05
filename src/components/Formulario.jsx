const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre completo del cliente"
                    name="nombre"
                    //con ? indicamos que el obj puede o no existir
                    defaultValue={cliente?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa para la que trabaja el cliente"
                    name="empresa"
                    defaultValue={cliente?.empresa}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >Email:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Correo electrónico de contacto"
                    name="email"
                    defaultValue={cliente?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono de contacto"
                    name="telefono"
                    defaultValue={cliente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Anotaciones de interés"
                    name="notas"
                    defaultValue={cliente?.notas}
                />
            </div>
        </>
    )
}

export default Formulario