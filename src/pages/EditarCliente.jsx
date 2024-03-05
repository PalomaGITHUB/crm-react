import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import { obtenerCliente, actualizarCliente } from "../data/clientes"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId)

  //validar que el cliente no existe
  if(Object.values(cliente).length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'No se han encontrado resultados.'
    })
  } 
  return cliente
}

export async function action({request, params}){

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const errores = []
  
  //validar email
  const email = formData.get('email')

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email no es válido')
  }
  
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }
  
  if(Object.keys(errores).length){
    return errores
  }

  //actualizar cliente
  await actualizarCliente(params.clienteId, datos)
  return redirect('/')
}

function EditarCliente() {
  const navigate = useNavigate()
  const cliente = useLoaderData()
  const errores = useActionData()

  return (
    <>
      <h1 className="font-black text-4xl text-orange-900">Editar Cliente</h1>
      <p className="mt-3">Modifica los datos del cliente.</p>
      <div className="flex justify-end">
        <button className="bg-orange-800 text-white px-3 py-1 font-bold uppercase"
        onClick={() => navigate('/')}
        >Volver</button>
      </div>
      <div className="bg-white shadow mt-20 rounded-md md:w-3/4 mx-auto px-5 py-10">
        
        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <Formulario 
          cliente = {cliente}
          />
            <input 
            type="submit" 
            className="mt-5 w-full bg-orange-800 p-3 uppercase font-bold text-white text-lg"
            value="Actualizar cliente"
            />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente