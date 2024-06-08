import { useState } from "react";
import useAxiosPublic from "../../useAxiosPublic";
import HomeCard from "./HomeCard";
import SearchBox from "./SearchBox";
import { useQuery } from "@tanstack/react-query";
import Announcement from "./Announcement";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");

  // pagi

  const { data: totalAll = [] } = useQuery({
    queryKey: ["onlyOneAll"],
    queryFn: async () => {
      const res = await axiosPublic.get("/page");
      return res.data;
    },
  });
  console.log(totalAll, "totalall");

  // const {totalPosts} = totalAll
  const totalPosts = totalAll.totalPosts || 0;
  const [currentPage, setCurrentPage] = useState(0);

  const itemPerPage = 5;
  const numberOfPage = Math.ceil(totalPosts / itemPerPage);

  const pages = [...Array(numberOfPage).keys()];
  console.log(pages);
  // pagi

  const { data: postsData = [], isLoading } = useQuery({
    queryKey: ["posts", asc, search, currentPage],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/posts?page=${currentPage}&size=${itemPerPage}&sort=${
          asc ? "asc" : "dsc"
        }&search=${search}`
      );
      console.log(response.data, "knhi");
      return response.data;
    },
  });

  console.log(postsData);

  const handleSortPopularity = () => {
    setAsc(!asc);
    console.log(asc);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const tag = e.target.tag.value;

    setSearch(tag);
  }
  console.log(search);

  //

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <SearchBox handleSubmit={handleSubmit}></SearchBox>
      <HomeCard
        asc={asc}
        handleSortPopularity={handleSortPopularity}
        postsData={postsData}
        isLoading={isLoading}
      ></HomeCard>
      <h1 className="text-center">current page {currentPage + 1}</h1>
      <div className="flex items-center justify-center">
        <h1
          onClick={handlePrevPage}
          className="p-3 border rounded-xl hover:text-white cursor-pointer hover:bg-blue-600"
        >
          Prev
        </h1>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className="p-3 border hover:text-white hover:bg-blue-600 m-2 rounded-2xl"
          >
            {page + 1}
          </button>
        ))}
        <h1
          onClick={handleNextPage}
          className="p-3 border cursor-pointer rounded-xl hover:text-white hover:bg-blue-600"
        >
          Next
        </h1>
      </div>
      <Announcement></Announcement>
    </div>
  );
};

export default Home;
