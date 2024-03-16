export default function TableRow({data, num}) {
  const {recipe_name, preparing_time, calories} = data;
  return (
    <>
      <tr className="container border-b bg-base-200 border-customPrimary animate-fade-left">
        <th>{num}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td>
          <button className="border-customPrimary btn btn-xs bg-customPrimary rounded-3xl text-[#150B2B] font-semibold ">
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
}
