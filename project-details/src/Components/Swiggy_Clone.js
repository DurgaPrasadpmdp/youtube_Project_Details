import ProjectInfo
 from "./Project_Info";
 import Accordion from "./Accordion";
const Swiggy_Clone = ()=>{
  const projectConfigDetails = {
        project_title : "Foodiest",
        code_link:"comming soon...",
        repo_link:"comming soon..."
    }
    const introAccordianDetails = {
        title:'Introduction',
        description : 'Developed a full-stack restaurant and food delivery application featuring functionalities such as browsing restaurants, viewing menus, and managing cart items. Implemented front-end using React, with Redux for state management, and Node.js for the backend.',
        defaultOpen : true,
        isDescriptionList : false,
        isSubCategory : false
    }
    const keyFeatures = {
        title:'Key Features ',
        description : [
          "Implemented a feature for users to browse through a list of restaurants, utilizing React for the frontend to ensure a responsive, user-friendly interface.",
          "Developed a dynamic menu display system, allowing users to view detailed menus from different restaurants, highlighting React's capability to handle real-time data updates and interactive UIs.",
          "Engineered a robust cart management functionality, enabling users to add or remove items from their cart. Leveraged Redux for efficient state management, ensuring a seamless and intuitive user experience."
        ],
        defaultOpen : false,
        isDescriptionList : true,
        isSubCategory : false
    }
    const techStack = { 
        title : "Tech Stack",
        description : [
        { category: 'Frontend', technology: 'React.js, HTML5,CSS3' },
        { category: 'API', technology: 'Swiggy Data API' },
        { category: 'Authentication', technology: 'Google Developer Console' },
        { category: 'Library', technology: 'React Router DOM, Redux, Tailwind CSS' }
      ],
      defaultOpen:false,
      isDescriptionList : true,
      isSubCategory : true
    }

    const outcome = {
        title : "What I Learned?",
        description : [
            {
              category: "Technical Insights",
              technology: [
                "Enhanced proficiency in building dynamic, responsive user interfaces with React, including mastering component-based architecture and state management techniques.",
                "Gained valuable experience in managing complex application states, understanding the importance of predictable state containers in large-scale applications"
              ]
            },
            {
              category: "Problem-Solving Skills",
              technology: [
                "Develop effective problem-solving strategies to address technical challenges encountered during the development process, enhancing adaptability and resilience as a developer.",
                "Learn to debug and troubleshoot issues systematically, utilizing a combination of debugging tools, online resources, and community support."
              ]
            }
        ],
        defaultOpen:false,
        isDescriptionList : true,
        isSubCategory : true
    }
  return (
    <div className="m-5">
      <div className="pb-4">
        <h2 className="text-xl font-bold">Project Details</h2>
        <ProjectInfo projDetails = {projectConfigDetails} />
      </div>
      <div>
        <Accordion accConfig = {introAccordianDetails}/>
      </div>
      <div>
        <Accordion accConfig = {keyFeatures}/>
        
    </div>
    <div>
        <Accordion accConfig = {techStack}/>
        
    </div><div>
        <Accordion accConfig = {outcome}/>
        
    </div>
    </div>
  );
}

export default Swiggy_Clone