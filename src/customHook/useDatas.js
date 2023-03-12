import { useEffect, useState } from "react";

const useDatas = (value) => {
  console.log(value);
  const [datas, setDatas] = useState([]);
  const [relode, setRelode] = useState(false);

  // 0123000041

  useEffect(() => {
    fetch(`http://192.168.31.94/api/proposal_no.php?FDPS_NO=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.Proposal_info);
        setRelode(!relode);
      });
  }, [value, relode]);

  return [datas, setDatas];
};

export default useDatas;
