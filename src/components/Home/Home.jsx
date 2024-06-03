import { useState } from "react";
import useAxiosPublic from "../../useAxiosPublic";
import HomeCard from "./HomeCard";
import SearchBox from "./SearchBox";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const axiosPublic = useAxiosPublic()
    const [asc,setAsc] = useState(true)
    const [search,setSearch] = useState('')
  
    const {  data: postsData = [] , isLoading} = useQuery({
        queryKey: ['posts',asc,search],
        queryFn: async () => {
            const response = await axiosPublic.get(`/posts?sort=${asc ? 'asc' : 'dsc' }&search=${search}`);
            console.log(response.data,'knhi')
            return response.data;  
        }
    });
    
    console.log(postsData);

    const handleSortPopularity = ()=>{
        setAsc(!asc)
        console.log(asc)

    }

    function handleSubmit(e){
  
        e.preventDefault()
        const tag = e.target.tag.value
        
        setSearch(tag)
      }
      console.log(search)


    return (
        <div>
           <SearchBox handleSubmit={handleSubmit}></SearchBox>
           <HomeCard asc={asc} handleSortPopularity={handleSortPopularity} postsData={postsData} isLoading={isLoading}></HomeCard>

        </div>
    );
};

export default Home;