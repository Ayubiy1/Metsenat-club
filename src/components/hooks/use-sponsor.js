import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

export const useSponsor = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const sponsorsT = useSelector((state) => state?.sponsorsT?.sponsors);
  // console.log(sponsorsT);
  const sponsorIndex = useMemo(
    () => sponsorsT?.findIndex((item) => item?.id == id),
    [sponsorsT]
  );

  const sponsorI = useMemo(
    () => (sponsorIndex > -1 ? sponsorsT[sponsorIndex] : {}),
    [sponsorIndex, searchParams.get("edit")]
  );
  // console.log(sponsorI, "useSponsor");

  return [sponsorI, sponsorIndex]; // Obyekt o'rniga massiv qaytaring
};

// import { useParams, useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useMemo } from "react";

// export const useSponsor = () => {
//   let [searchParams, setSearchParams] = useSearchParams();

//   const { id } = useParams();
//   const sponsorsT = useSelector((state) => state?.sponsorsT?.sponsors);
//   const sponsorIndex = useMemo(
//     () => sponsorsT?.findIndex((item) => item?.id == id),
//     [sponsorsT]
//   );

//   const sponsorI = useMemo(
//     () => (sponsorIndex > -1 ? sponsorsT[sponsorIndex] : {}),
//     [sponsorIndex, searchParams.get("edit")]
//   );
//   console.log(sponsorI, "useSponsor");

//   return { sponsorI, sponsorIndex };
// };
