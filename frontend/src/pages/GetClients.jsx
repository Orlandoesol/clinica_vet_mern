import { useEffect, useState } from "react";
import { getClientsRequest } from "../api/clients.js";


function GetClients(){
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchClients(){
            try {
                const response = await getClientsRequest();
                setClients(response.data);
            } catch (error) {
                console.error('Errro fetching clients:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchClients();
    }, []);

    if (loading){
        return <div>Loading...</div>;
    }

    return(
        <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center p-9">Listado de Clientes</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr>
                <th className="px-4 py-2 border-b">Documento</th>
                <th className="px-4 py-2 border-b">Nombre</th>
                <th className="px-4 py-2 border-b">Primer Apellido</th>
                <th className="px-4 py-2 border-b">Segundo Apellido</th>
                <th className="px-4 py-2 border-b">Teléfono 1</th>
                <th className="px-4 py-2 border-b">Teléfono 2</th>
                <th className="px-4 py-2 border-b">Email</th>
                </tr>
            </thead>
            <tbody>
                {clients.length > 0 ? (
                clients.map((clients) => (
                    <tr key={clients.documento} className="border-b">
                    <td className="px-4 py-2">{clients.documento}</td>
                    <td className="px-4 py-2">{clients.nombre}</td>
                    <td className="px-4 py-2">{clients.primerApellido}</td>
                    <td className="px-4 py-2">{clients.segundoApellido}</td>
                    <td className="px-4 py-2">{clients.telefono_1}</td>
                    <td className="px-4 py-2">{clients.telefono_2}</td>
                    <td className="px-4 py-2">{clients.email}</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="7" className="px-4 py-2 text-center">No se encontraron clientes</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    );
}

export default GetClients;