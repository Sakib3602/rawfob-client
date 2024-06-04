import { useContext } from "react";
import { AuthContext } from "../../AuthHere/AuthProvider";

const AddPost = () => {
    const {person} = useContext(AuthContext)

    

    function handleClick(e) {
        e.preventDefault(); // Prevent default form submission behavior
      
        const email = e.target.email.value;
        const author_name = e.target.name.value;
        const post_title = e.target.title.value;
        const tag = e.target.tag.value;
        const post_description = e.target.des.value;
        const upvote = 0
        const downvote = 0
        const post_time = new Date()
        const dataForPost = {
            email, post_title, tag, post_description,author_name ,upvote,downvote,post_time
        }
      
      
        console.log(dataForPost);
        
      
        // Add your desired functionality here, e.g., sending data, validation, etc.
      }



    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen ">
  <div className="w-full max-w-md  rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-black mb-4">
      Fill & Post
    </h2>
    <form onSubmit={handleClick} className="flex flex-col">
      <input
        placeholder="Full Name"
        className="border focus:text-white   rounded-md p-2 mb-4 focus:bg-[#1976D2] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type="email"
        name="email"
        value={person.email}
      />
      <input
        placeholder="Post Title"
        className="border focus:text-white  rounded-md p-2 mb-4 focus:bg-[#1976D2] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type="text"
        name="title"
        
      />
       <input
        placeholder="Your Name"
        defaultValue={person?.displayName || ""} 
        className="border focus:text-white  rounded-md p-2 mb-4 focus:bg-[#1976D2] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type="text"
        name="name"
        
      />
      <select
         className="border focus:text-white rounded-md p-2 mb-4 focus:bg-[#1976D2] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        id="product"
        name="tag"
      >
        <option value="product-1">Product 1</option>
        <option value="product-2">Product 2</option>
        <option value="product-3">Product 3</option>
      </select>
      
      <textarea
        placeholder="Post Descriptions"
        className="border focus:text-white  rounded-md p-2 mb-4 focus:bg-[#1976D2] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
   
        defaultValue={""}
        name="des"
      />
      <button
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</div>

        </div>
    );
};

export default AddPost;