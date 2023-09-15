import { useContext, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { ContextApi } from "../data/api";

export const useSponsor = () => {
  const api = useContext(ContextApi);
  const { data, isLoading, isError } = useQuery("sponsors", () =>
    api.get("/sponsors")
  );

  let [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  // const sponsorsT = useSelector((state) => state?.sponsorsT?.sponsors);
  const sponsorsT = useSelector((state) => state.sponsorsT.sponsors);

  // useEffect(() => {}, [sponsorsT]);
  const sponsorIndex = useMemo(
    () => data?.data?.findIndex((item) => item?.id == id),
    [data, id, api]
  );
  const sponsorI = useMemo(
    () => (sponsorIndex > -1 ? data?.data[sponsorIndex] : {}),
    [sponsorIndex, data, api]
  );

  return [sponsorI, sponsorIndex]; // Obyekt o'rniga massiv qaytaring
};
