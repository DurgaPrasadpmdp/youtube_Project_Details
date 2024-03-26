import { useState } from "react";

const Accordion = (props) => {
  const { title, description, defaultOpen, isDescriptionList,isSubCategory  } =
    props?.accConfig;
  const [isShow, setIsShow] = useState(defaultOpen);
  return (
    <div className="pb-4 border-b border-solid border-[#333]">
      <span className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
        <span className="text-2xl w-[18px] inline-block">
          {!isShow ? "+" : "-"}
        </span>
        <span className="text-xl font-semibold">{title}</span>
      </span>
      {/* Accordian List */}
      {isShow && (
        <p className="pl-[20px]">
          {AccordionList(description, isDescriptionList,isSubCategory)}
        </p>
      )}
    </div>
  );
};

const AccordionList = (list, isList,isSubCategory) => {
  return isList ? (
    <ul>
      {list.map((listItem) => {
        return !isSubCategory ? <li className="ml-4 pb-2 list-disc">{listItem}</li> : 
        (<li className="ml-4 pb-2 list-disc"><span className="font-semibold">{listItem?.category} </span> : {listItem?.technology}</li>)
      })}
    </ul>
  ) : (
    <p className="pl-[20px]">{list}</p>
  );
};
export default Accordion;
