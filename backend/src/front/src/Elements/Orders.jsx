export default function OrdersElement(){
    return(
        <div className="max-w-7xl mx-auto px-4 pt-40 ">
        <div className="h-full"></div>
        <h1 className=" font-formulafont-bold text-formula-grey text-2xl">Orders</h1>
        <div className="border-[6px] flex justify-center border-l-0 border-b-0 border-formula-red "></div>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full border text-center text-sm font-formulafont-regular dark:border-neutral-500">
          <thead class="border-b font-formulafont-bold dark:border-neutral-500">
            <tr>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Order No.
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Items
              </th>
              <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">
                Quantity
              </th>
              
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-formulafont-regular dark:border-neutral-500">
                1
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                Red Bull Racing, 2023 Team T-shirt, € 60.00, size M
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                1
              </td>
              
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                2
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                Mercedes-AMG F1, Lewis Hamilton LH44 T-shirt, € 31.50, size S

              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                1
              </td>
              
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                3
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                Scuderia Ferrari F1, Charles Leclerc Monaco GP T-shirt, € 55.00, size M

              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                3
              </td>
              
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                4
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
               Scuderia Ferrari F1, 2023 Charles Leclerc Driver Cap, € 45.00

              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                1
              </td>
              
            </tr>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                5
              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                McLaren F1, 2023 Team Polo, € 56.25, size S

              </td>
              <td
                class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                2
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>


    )
}