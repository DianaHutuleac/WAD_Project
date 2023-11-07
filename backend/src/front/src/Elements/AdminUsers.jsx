import React from "react";
import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["Id", "First Name", "Last Name", "Username", "Email"];


 
export function AdminUsersElement() {
  const [products, setProducts ] = useState([]);

React.useEffect(() => {

axios.get("http://localhost:8080/api/v1/getAllUsers").then(response => {setProducts(response.data.products) }).catch( err => console.log(err));
}, [])

  return (
    <div className="max-w-7xl mx-auto px-4 pt-40 ">
        <div className="h-full"></div>
        <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Users</h1>
        <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red "></div>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-formulafont-regular leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          {products.map(({ id, firstName, lastName, username, email}, index) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {firstName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {lastName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {email}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
  );
}
