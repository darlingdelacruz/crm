import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()

    const { nombre, cedula, email,telefono,departamento, id} = cliente

    return (
        <tr className="border-b hover:bg-gray-50">

            <td className="p-3">{nombre}</td>

            <td className="p-3">{cedula}</td>

            <td className="p-3"> {email} </td>

            <td className='p-3'>{telefono}</td>
           
            <td className="p-3">{departamento}</td>
            
            <td className="p-3">

                <button 
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>

                <button 
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>

                <button 
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => handleEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente
