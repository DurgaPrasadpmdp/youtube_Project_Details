import { Link } from "react-router-dom";

const ProjectInfo = (props) => {
  const { project_title, code_link, repo_link } = props?.projDetails;
  return (
    <ul>
      <li>
        <span className="w-[130px] inline-block">Project Title </span>
        <span>:</span>
        <span className="ml-[60px]">{project_title}</span>
      </li>
      <li>
        <span className="w-[130px] inline-block">Repo </span>
        <span>:</span>
        <span className="ml-[60px]">
          <Link to={code_link}>{code_link}</Link>
        </span>
      </li>
      <li>
        <span className="w-[130px] inline-block">Demo Link</span>
        <span>:</span>
        <span className="ml-[60px]">
          <Link to={repo_link}>{repo_link}</Link>
        </span>
      </li>
    </ul>
  );
};

export default ProjectInfo;
