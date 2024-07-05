"use client"

import useDebounce from "@/app/Hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
    const pathname = usePathname()
    const {replace} = useRouter()

    const searchParams = useSearchParams()

    const doSearch = useDebounce((term)=>{
        const params = new URLSearchParams(searchParams)
        if(params){
            params.set("query", term)
        }else{
            params.delete("query")
        }

        replace(`${pathname}?${params.toString()}`)
    })
    const  handleSearch =(term)=>{
       doSearch(term)
    }
  return (
    <div>
      <input 
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e)=>{handleSearch(e.target.value)}}
        type="text"
        placeholder="Search..."
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
      />
    </div>
  );
};

export default Search;
