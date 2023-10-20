import { Link, useParams, useLocation } from "react-router-dom";
import "../CourseNavigation/CourseNavigation.css";  

function CourseNavigation() {
  const links = [
    "Home", 
    "Modules", 
    "Piazza", 
    "Zoom Meetings", 
    "Assignments", 
    "Grades", 
    "People", 
    "Panopto Video", 
    "Discussions", 
    "Announcements", 
    "Pages", 
    "Files", 
    "Rubrics", 
    "Outcomes", 
    "Collaborations", 
    "Syllabus", 
    "Settings"
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  return (
    <ul className="list-unstyled course-nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={pathname.includes(link) ? "active" : ""}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
