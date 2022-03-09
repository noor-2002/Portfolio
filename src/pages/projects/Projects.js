import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader, publicationsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          <div>
            <Fade bottom duration={2000} distance="40px">
              <div
                className="repo-card-div"
                // key={repo.id}
                // onClick={() => openRepoinNewTab(repo.url)}
                onClick={() =>
                  window.open("https://bishops.co.in/bishops-service/")
                }
                style={{ backgroundColor: theme.highlight }}
              >
                <div className="repo-name-div">
                  <p
                    className="repo-name"
                    style={{ color: theme.imageHighlight }}
                  >
                    Bishops
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  The Bishops Service Program is designed to offer complete
                  after-sales support to the customer consisting of
                  Installation.
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Created on 25-07-2021
                  </p>
                  {/* <ProjectLanguages
                    className="repo-languages"
                    // logos={repo.languages}
                  /> */}
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <Fade bottom duration={2000} distance="40px">
              <div
                className="repo-card-div"
                // key={repo.id}
                // onClick={() => openRepoinNewTab(repo.url)}
                onClick={() =>
                  window.open("https://www.klenty.com/feature/calls-and-tasks")
                }
                target="_blank"
                rel="noopener noreferrer"
                href="http://your_url_here.html"
                style={{ backgroundColor: theme.highlight }}
              >
                <div className="repo-name-div">
                  <p
                    className="repo-name"
                    style={{ color: theme.imageHighlight }}
                  >
                    Klenty
                    {/* {repo.name} */}
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  The Sales Engagement Platform that gets more replies and
                  meetings booked
                  {/* {repo.description} */}
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {/* Created on {repo.createdAt.split("T")[0]} */}
                    Created on 14-10-2021
                  </p>
                  {/* <ProjectLanguages
                    className="repo-languages"
                    // logos={repo.languages}
                  /> */}
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <Fade bottom duration={2000} distance="40px">
              <div
                className="repo-card-div"
                // key={repo.id}
                // onClick={() => openRepoinNewTab(repo.url)}
                onClick={() => window.open("https://barbequeelite.com")}
                style={{ backgroundColor: theme.highlight }}
              >
                <div className="repo-name-div">
                  <p
                    className="repo-name"
                    style={{ color: theme.imageHighlight }}
                  >
                    Barbequeelite
                    {/* {repo.name} */}
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  Our primary goal as a barbecue restaurant is your
                  satisfaction! With every dish, meal, and barbecue we make, we
                  do our best to ensure that it is.
                  {/* {repo.description} */}
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {/* Created on {repo.createdAt.split("T")[0]} */}
                    Created on 09-08-2021
                  </p>
                  {/* <ProjectLanguages
                    className="repo-languages"
                    // logos={repo.languages}
                  /> */}
                </div>
              </div>
            </Fade>
          </div>
          <div>
            <Fade bottom duration={2000} distance="40px">
              <div
                className="repo-card-div"
                // key={repo.id}
                // onClick={() => openRepoinNewTab(repo.url)}
                onClick={() => window.open("https://forkify-noor.netlify.app")}
                style={{ backgroundColor: theme.highlight }}
              >
                <div className="repo-name-div">
                  <p
                    className="repo-name"
                    style={{ color: theme.imageHighlight }}
                  >
                    Forkify
                    {/* {repo.name} */}
                  </p>
                </div>
                <p className="repo-description" style={{ color: theme.text }}>
                  This project is purely done by Vanilla JS. We fetch all the
                  dishes from a API and even the user and add their own Dishes.
                  {/* {repo.description} */}
                </p>
                <div className="repo-details">
                  <p
                    className="repo-creation-date subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {/* Created on {repo.createdAt.split("T")[0]} */}
                    Created on 09-08-2021
                  </p>
                  {/* <ProjectLanguages
                    className="repo-languages"
                    // logos={repo.languages}
                  /> */}
                </div>
              </div>
            </Fade>
          </div>
          {/* {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })} */}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/NoorMohamed-intern"
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}

        {/* <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="repo-cards-div-main">
          {PublicationData.data.map((repo) => {
            return <PublicationCard repo={repo} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
