import { useState } from "react";
import PersonalInfoPanel from "./personal-info";
import EmploymentPanel from "./employment";
import EducationPanel from "./education";

export default function InputPanels() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PersonalInfoPanel
        title = "Personal Information"
        isActive = {activeIndex === 0}
        onShow = {() => setActiveIndex(0)}
      />
      <EmploymentPanel
        title = "Employment"
        isActive = {activeIndex === 1}
        onShow = {() => setActiveIndex(1)}
      />
      <EducationPanel
        title = "Education"
        isActive = {activeIndex === 2}
        onShow = {() => setActiveIndex(2)}
      />
    </>
  )
}