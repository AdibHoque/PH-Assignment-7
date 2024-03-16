import TableRow from "./TableRow";

export default function Sidebar() {
  return (
    <>
      <div className="card bg-white rounded-2xl border border-[#12132D26] p-4">
        <h3 className="text-2xl text-center font-semibold text-[#282828]">
          Want to cook: 01
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <TableRow></TableRow>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
