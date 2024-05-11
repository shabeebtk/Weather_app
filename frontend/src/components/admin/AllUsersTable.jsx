import axios from "axios";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../api/BaseUrl";
import { getUsers } from "../../api/EndPoints";

function AllUsersTable() {

    const [users, setUsers] = useState(null)
    const token = localStorage.getItem('token')

    console.log(users)
    useEffect(() => {
        if (token) {
            axios.get(`${BaseUrl + getUsers}`, {
                headers: {
                    Authorization: `Token ${token}`,
                    Accept: 'application/json'
                }
            })
                .then((response) => {
                    console.log(response)
                    setUsers(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [])

    return (

        <div className="px-5">
            <div className="py-4 flex justify-center">
                <h1 className="text-xl font-bold">User Details</h1>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user, key) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.id}
                                    </th>
                                    <td className="px-6 py-4">{user.first_name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
};


export default AllUsersTable;