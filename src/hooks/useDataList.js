import { useState, useEffect } from "react";
import { UserAPI } from "../api";

export const useDataList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataList, setDataList] = useState([]);

  const fetchDataList = async () => {
    const data = await UserAPI.getUserList()
      .then((res) => {
        if(!res.ok){
          return setIsError(true)
        }
        return res.json()})
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
    setDataList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataList();
  }, []);

  return {isLoading, isError, dataList};
};
