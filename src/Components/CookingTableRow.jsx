import PropTypes from "prop-types";
CookingTableRow.propTypes = {
  data: PropTypes.object,
  num: PropTypes.number,
};

export default function CookingTableRow({data, num}) {
  const {recipe_name, preparing_time, calories} = data;
  return (
    <>
      <tr className="container border-b bg-base-200 border-customPrimary animate-fade-left">
        <th>{num}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </>
  );
}
