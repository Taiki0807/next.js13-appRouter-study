import { useEffect, useRef, useState } from "react";

import { Input } from "@/app/_components/parts";

import { useDebounce } from "./useDebounce";

type Props = {
  performSearch: (keyword: string) => void | Promise<void>;
};
const Search = ({ performSearch }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword, isDebouncing] = useDebounce(searchKeyword, 2000);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    if (!hasTypedRef.current) return;
    performSearch(debouncedSearchKeyword);
  }, [debouncedSearchKeyword]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    hasTypedRef.current = true;
  };
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        value={searchKeyword}
        onChange={handleSearchChange}
        className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default Search;
