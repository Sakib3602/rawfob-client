

const SearchBox = () => {
    return (
        <div className="">
            <div className="hero h-[400px] " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1469554308573-c535e2a0e1de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Welcome To Our <br /> <span className="text-5xl "> RAWFOB Nation</span></h1>
      <p className="mb-5"></p>
      <div  >
        <form  >
        <input type="text" placeholder="Type here" className="h-[50px] pl-4 rounded-xl input-bordered w-full" />
        <div className="w-full flex mt-2">
        <input type="submit" className="btn btn-outline w-full bg-[#1976D2] text-white border-none" value="Search Now"  />
        
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SearchBox;