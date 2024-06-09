import { useState } from "react";


const TableRow = ({t}) => {
  const [opValue,setOpValue] = useState('')
  function handle(e){
    e.preventDefault()
    console.log(e.target.value)
    setOpValue(e.target.value);

  }
    return (
        <tr key={t?._id}>
        
        <td className="text-[16px]">{t?.email}</td>
        <td className="text-[16px]">
          {t.comment.slice(0, 20)}
          {t.comment.length > 20 ? (
            <span
              className="text-blue-800 cursor-pointer hover:underline ml-2"
              onClick={() =>
                document.getElementById("my_modal_5").showModal()
              }
            >
              Read More...
            </span>
          ) : (
            " "
          )}
        </td>
        <td>
          <form onChange={handle}>
          <select name="op" className="select select-accent w-full max-w-xs">
            <option  >
              FeedBack
            </option>
            <option value={"GOOD"}>GOOD</option>
            <option value={"BULLING"}>BULLING</option>
            <option value={"HARASMENT"}>HARASMENT</option>
           
          </select>
          </form>
        </td>
        <td>
          <button disabled={opValue === '' || opValue === "FeedBack"} className="btn btn-sm bg-[#1976D2] text-white hover:bg-orange-400">
           Report
          </button>
        </td>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Full Comment!</h3>
            <hr />
            <p className="py-4 text-[16px]">{t.comment}</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-outline btn-accent btn-sm ">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </tr>
    );
};

export default TableRow;