import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Id", "Team", "Type", "Size", "Image", "Price", "Arrival", ""];
 
const TABLE_ROWS = [
  { id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
  {
    id: "1",
    team: "Redbull",
    type: "Tshirt",
    size: "S",
    image: "yes",
    price: "54",
    arrival: "",
  },
];
 
export function AdminProductsElement() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-40 ">
        <div className="h-full"></div>
        <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Products</h1>
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
          {TABLE_ROWS.map(({ id, team,type, size, image, price,arrival}, index) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {team}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {type}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {size}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {image}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {price}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-formulafont-regular">
                  {arrival}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-formulafont-regular">
                  Edit
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
