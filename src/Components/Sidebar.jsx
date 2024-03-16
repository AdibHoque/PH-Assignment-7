import TableRow from "./TableRow";

export default function Sidebar({wantCook}) {
  return (
    <>
      <div className="card bg-white rounded-2xl border border-[#12132D26] p-4">
        <h3 className="text-2xl text-center font-semibold text-[#282828]">
          Want to cook: {wantCook.length}
        </h3>
        <div className="">
          <table className="table table-xs md:table-sm">
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
              {wantCook.map((data) => (
                <TableRow
                  key={Math.random() * 6969}
                  num={wantCook.indexOf(data) + 1}
                  data={data}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
