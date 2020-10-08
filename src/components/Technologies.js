import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const { request } = useHttp();

  const fetchTechnologies = useCallback(async () => {
    const response = await request("/api/technology");
    setTechnologies(response);
  }, [request]);

  useEffect(() => {
    fetchTechnologies();
  }, [fetchTechnologies]);

  return (
    <div className="about-technologies__list">
      {technologies.map((item) => (
        <div
          className="about-technologies__item"
          key={item.id}
          style={{ backgroundColor: item["bgColor"], color: item["textColor"] }}
        >
          <span
            className={`mdi mdi-${item.mdiClass}`}
            style={{ color: item["mdiColor"] }}
          />
          &nbsp;
          {item.title}
        </div>
      ))}

      {/*// <!--        <div class="about-technologies__item">-->*/}
      {/*// <!--          <span class="mdi "></span>-->*/}
      {/*// <!--          English Intermediate-->*/}
      {/*// <!--        </div>-->*/}
    </div>
  );
};

export default Technologies;
