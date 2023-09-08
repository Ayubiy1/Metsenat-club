import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

export const useSponsor = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  // const sponsorsT = useSelector((state) => state?.sponsorsT?.sponsors);
  const sponsorsT = useSelector((state) => state.sponsorsT.sponsors);

  // useEffect(() => {}, [sponsorsT]);
  const sponsorIndex = useMemo(
    () => sponsorsT?.findIndex((item) => item?.id == id),
    [sponsorsT, id]
  );
  const sponsorI = useMemo(
    () => (sponsorIndex > -1 ? sponsorsT[sponsorIndex] : {}),
    [sponsorIndex, sponsorsT]
  );

  return [sponsorI, sponsorIndex]; // Obyekt o'rniga massiv qaytaring
};
