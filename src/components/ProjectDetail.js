import React, { useCallback, useEffect, useRef, useState } from "react";
import { useProjectCategory } from "../contexts/CategoriesContext";
import { useHttp } from "../hooks/http.hook";
import Loader from "./Loader";
import { Slide } from "react-slideshow-image";

const ProjectDetail = () => {
  const {
    projectDetailIsOpen,
    setProjectDetailIsOpen,
    projectId,
  } = useProjectCategory();

  const { loading, request } = useHttp();
  const modalRef = useRef(null);
  const bodyRef = useRef(document.querySelector("body"));
  const [projectDetail, setProjectDetail] = useState({});

  useEffect(() => {
    if (projectId) {
      fetchProjectDetail(projectId);
    }
  }, [projectId]);

  useEffect(() => {
    if (projectDetailIsOpen) {
      bodyRef.current.classList.add("scroll-hidden");
    } else {
      bodyRef.current.classList.remove("scroll-hidden");
    }
  }, [projectDetailIsOpen]);

  const fetchProjectDetail = useCallback(
    async (id) => {
      if (id) {
        const fetchedProject = await request(`/api/project/${id}`);
        setProjectDetail(fetchedProject);
      }
    },
    [request]
  );

  function closeModal() {
    setProjectDetailIsOpen(false);
  }

  function modalClickHandler(event) {
    if (event.target === modalRef.current) {
      closeModal();
    }
  }

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div
          className={`modal${projectDetailIsOpen && !loading ? " active" : ""}`}
          onClick={modalClickHandler}
          ref={modalRef}
        >
          <div className="modal-window">
            <div className="header">
              {projectDetail.images && (
                <div className="slide-container">
                  <Slide autoplay={false} transitionDuration={300}>
                    {projectDetail.images.map((image, idx) => (
                      <div
                        className="slide"
                        style={{ backgroundImage: `url(${image})` }}
                        key={idx}
                      />
                    ))}
                  </Slide>
                </div>
              )}
            </div>
            <div className="body">
              <div className="title">{projectDetail.title}</div>
              <div className="subtitle">{projectDetail.subtitle}</div>
              <div className="separator" />
              <div className="description">{projectDetail.text}</div>
            </div>

            <div className="footer">
              {projectDetail.link && (
                <a
                  className="base-button button-open-site"
                  href={projectDetail.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="mdi mdi-open-in-new" />
                  &nbsp;Открыть сайт
                </a>
              )}

              <div>
                <span className="mdi mdi-close" onClick={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
