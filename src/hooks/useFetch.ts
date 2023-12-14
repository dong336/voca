import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  // 렌더링 직후 한번 호출하려면 빈배열을 전달

  return data;
}
