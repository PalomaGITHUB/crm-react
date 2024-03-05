import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import { agregarCliente } from "../data/clientes"

export async function action({request}) {
  //formData contiene toda la info que el usuario ingresa en el formulario
  const formData = await request.formData()
  //hay varias formas de recuperar valores de un formData:
  //console.log (formData.get('nombre'))
  //console.log([...formData])
  const datos = Object.fromEntries(formData)
  //console.log(datos)

  //validar los campos del formulario
  const errores = []

  //validar email
  const email = formData.get('email')
  //expresion regular de usuario @ y dominio
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  //si NO se cumple la condicion
  if(!regex.test(email)){
    errores.push('El email no es válido')
  }

  //si algun valor está vacío
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //retornar errores
  if(Object.keys(errores).length){
    //detiene la ejecucion
    return errores
  }

  //pasamos los datos a la funcion agregarClientes
  //con await evitamos que la siguiente funcion se ejecute antes
  await agregarCliente(datos)

  //al enviar el form, redirigir a index
  return redirect('/')
}

function NuevoCliente() {
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-orange-900">Nuevo cliente</h1>
      <p className="mt-3">Registra un nuevo cliente rellenando el formulario.</p>
      <p>Recuerda que todos los campos son obligatorios. <br /> El email debe tener una estructura propia de correo electrónico.</p>
      <p>Podás modificar los datos una vez añadas el cliente desde la pestaña 'Clientes'.</p>
      <div className="flex justify-end">
        <button className="bg-orange-800 text-white px-3 py-1 font-bold uppercase"
        onClick={() => navigate('/')}
        >Volver</button>
      </div>
      <div className="bg-white shadow mt-20 rounded-md md:w-3/4 mx-auto px-5 py-10">
        
        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <Formulario />
            <input 
            type="submit" 
            className="mt-5 w-full bg-orange-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar cliente"
            />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente