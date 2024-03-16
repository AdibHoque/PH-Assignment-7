import CookingTableRow from "./CookingTableRow";
import TableRow from "./TableRow";

export default function Sidebar({wantCook, currentCook, handleAddCurrentCook}) {
  return (
    <>
      <div className="card bg-white rounded-2xl border border-[#12132D26] p-4 animate-fade-down animate-once">
        <div className="my-4">
          <h3 className="text-xl text-center font-semibold text-[#282828]">
            Want to cook: {wantCook.length}
          </h3>
          <hr className="bg-[#282828] opacity-10"></hr>
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
                  handleAddCurrentCook={handleAddCurrentCook}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-xl text-center font-semibold text-[#282828]">
          Currently Cooking: {currentCook.length}
        </h3>
        <hr className="bg-[#282828] opacity-10"></hr>
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
              {currentCook.map((data, index) => (
                <CookingTableRow
                  key={Math.random() * 6969}
                  num={index + 1}
                  data={data}
                  handleAddCurrentCook={handleAddCurrentCook}
                ></CookingTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
