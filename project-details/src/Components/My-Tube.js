import Accordion from "./Accordion";
import ConnectwithMe from "./ConnectwithMe";
import ProjectInfo from "./Project_Info";

const My_Tube = () => {
  const projectConfigDetails = {
    project_title: "My-Tube",
    code_link: "https://github.com/DurgaPrasadpmdp/mytube_durga",
    repo_link: "https://my-tube-77df4.web.app/",
  };

  const introAccordianDetails = {
    title: "Introduction",
    description:
      "MyTube is a full-featured YouTube clone that I developed from the ground up. This project was designed to mimic the core functionalities of YouTube, providing a platform for users to watch, upload, comment on videos, and subscribe to channels. My goal was to understand and implement the intricate web technologies behind video streaming services, along with user authentication and interaction features.",
    defaultOpen: true,
    isDescriptionList: false,
    isSubCategory: false,
  };
  const keyFeatures = {
    title: "Key Features ",
    description: [
      "Implemented OAuth 2.0 for secure user authentication, allowing users to sign in using their Google accounts.",
      "Enabled streaming of video content with custom controls, ensuring a smooth user experience across different devices.",
      "Users can subscribe to channels and leave comments on videos, fostering a community environment.",
      "Implemented advanced search algorithms to allow users to find videos quickly based on titles, descriptions, and tags.",
      "Crafted a responsive design to ensure the platform is accessible on desktop, tablet, and mobile devices.",
    ],
    defaultOpen: false,
    isDescriptionList: true,
    isSubCategory: false,
  };
  const techStack = {
    title: "Tech Stack",
    description: [
      { category: "Frontend", technology: "React.js, HTML5,CSS5" },
      { category: "API", technology: "YouTube Data API v3" },
      { category: "Authentication", technology: "Google Developer Console" },
      {
        category: "Library",
        technology: "React Router DOM, Redux, Tailwind CSS",
      },
    ],
    defaultOpen: false,
    isDescriptionList: true,
    isSubCategory: true,
  };

  const outcome = {
    title: "What I Learned?",
    description: [
      {
        category: "Technical Insights",
        technology: [
          "Gain insights into managing complex data structures and rendering dynamic UI components, particularly in the context of nested comments implementation.",
          "Understand the intricacies of integrating third-party authentication systems, such as Google Authorization, and managing user authentication tokens securely.",
        ],
      },
      {
        category: "Problem-Solving Skills",
        technology: [
          "Develop effective problem-solving strategies to address technical challenges encountered during the development process, enhancing adaptability and resilience as a developer.",
          "Learn to debug and troubleshoot issues systematically, utilizing a combination of debugging tools, online resources, and community support.",
        ],
      },
    ],
    defaultOpen: false,
    isDescriptionList: true,
    isSubCategory: true,
  };
  return (
    <>
      <div className="m-5">
        <div className="pb-4 border-b border-solid border-[#333]">
          <h2 className="text-xl font-semibold">Project Details</h2>
          <ProjectInfo projDetails={projectConfigDetails} />
        </div>
        <div>
          <Accordion accConfig={introAccordianDetails} />
        </div>
        <div>
          <Accordion accConfig={keyFeatures} />
        </div>
        <div>
          <Accordion accConfig={techStack} />
        </div>
        <div>
          <Accordion accConfig={outcome} />
        </div>
      </div>
    </>
  );
};

export default My_Tube;
