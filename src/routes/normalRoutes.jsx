import GlobalLayout from "../layouts/GlobalLayout";
import SettingsLayout from "../layouts/SettingsLayout";
import TaskRequests from "../pages/AllTasks/TaskRequests";
import BoatDetails from "../pages/Boats/BoatDetails";
import AddBoat from "../pages/Dashboard/AddBoat";
import AddTask from "../pages/Dashboard/AddTask";
import AllEmployeesList from "../pages/Dashboard/AllEmployeesList";
import AllManagersList from "../pages/Dashboard/AllManagersList";
import Boats from "../pages/Dashboard/Boats";
import Dashboard from "../pages/Dashboard/Dashboard";
import TaskDetails from "../pages/Dashboard/TaskDetails";
import TaskList from "../pages/Dashboard/TaskList";
import Tasks from "../pages/Dashboard/Tasks";
import PrivacyPolicy from "../pages/privacypolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

export const normalRoutes = [
  {
    title: "Home",
    url: "/home",
    page: <GlobalLayout page={<Dashboard />} />,
  },
  {
    title: "Tasks",
    url: "/tasks",
    page: <GlobalLayout page={<Tasks />} />,
  },
  {
    title: "Task Details",
    url: "/tasks/:id",
    page: <GlobalLayout page={<TaskDetails />} />,
  },


  {
    title: "Tasks",
    url: "/boats",
    page: <GlobalLayout page={<Boats />} />,
  },
  {
    title:"Managers List Page",
    url:'/dashboard/managers-list',
    page: <GlobalLayout page={<AllManagersList />} />,
  },
  {
    title:"Employees List Page",
    url:"/dashboard/employees-list",
    page:<GlobalLayout page={<AllEmployeesList/>}/>
  },
  {
    title:"Task list",
    url:"/dashboard/tasks",
    page:<GlobalLayout page={<TaskList/>}/>
  },
  {
    title:"Add Boat",
    url:"/dashboard/add-boat",
    page:<GlobalLayout page={<AddBoat/>}/>
  },
  // {
  //   title: "Add a Employee",
  //   url: "/add-employee",
  //   page: <GlobalLayout page={<AddEmployee />} />,
  // },
  // {
  //   title: "Employee List",
  //   url: "/employees",
  //   page: <GlobalLayout page={<Employees />} />,
  // },
  // {
  //   title: "Employee Detail",
  //   url: "/employees/:id",
  //   page: <GlobalLayout page={<EmployeeDetail />} />,
  // },
  // {
  //   title: "Employee Edit",
  //   url: "/edit-employee/:id",
  //   page: <GlobalLayout page={<EditEmployee />} />,
  // },
  // {
  //   title: "All Tasks",
  //   url: "/tasks",
  //   page: <GlobalLayout page={<Tasks />} />,
  // },
  // {
  //   title: "Task Detail",
  //   url: "/tasks/:id",
  //   page: <GlobalLayout page={<TaskDetail />} />,
  // },
  // {
  //   title: "Edit Task",
  //   url: "/edit-task/:id",
  //   page: <GlobalLayout page={<EditTask />} />,
  // },
  {
    title: "Add Task",
    url: "/add-task",
    page: <GlobalLayout page={<AddTask />} />,
  },
  // {
  //   title: "Assign reported Task",
  //   url: "/assign-reported-task",
  //   page: <GlobalLayout page={<AssignReportedTask />} />,
  // },
  
  {
    title: "Boat Details",
    url: "/boats/:id",
    page: <GlobalLayout page={<BoatDetails />} />,
  },
  {
    title: "New Task Request",
    url: "/new-tasks-request",
    page: <GlobalLayout page={<TaskRequests />} />,
  },
  // {
  //   title: "New Task Details",
  //   url: "/new-tasks-request/:id",
  //   page: <GlobalLayout page={<NewTaskRequestPage />} />,
  // },
  // {
  //   title: "Inactive Employees",
  //   url: "/inactive-employees",
  //   page: <GlobalLayout page={<DeactivatedEmployees />} />,
  // },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
    page: <GlobalLayout page={<TermsAndConditions />} />,
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    page: <GlobalLayout page={<PrivacyPolicy />} />,
  },
  // {
  //   title: "Tides Tales & Guide",
  //   url: "/blogs",
  //   page: <GlobalLayout page={<Blogs />} />,
  // },
  // {
  //   title: "Blogs Detail",
  //   url: "/blogs/:id",
  //   page: <GlobalLayout page={<BlogDetails />} />,
  // },
  // {
  //   title: "Notifications",
  //   url: "/notifications",
  //   page: <GlobalLayout page={<Notifications />} />,
  // },
  // {
  //   title: "Profile",
  //   url: "/profile",
  //   page: (
  //     <GlobalLayout page={<SettingsLayout page={<UserManagementPage />} />} />
  //   ),
  // },

  // {
  //   title: "Settings",
  //   url: "/settings/change-password",
  //   page: (
  //     <GlobalLayout page={<SettingsLayout page={<ChangePasswordPage />} />} />
  //   ),
  // },
  // {
  //   title: "Settings",
  //   url: "/settings/notifications",
  //   page: (
  //     <GlobalLayout
  //       page={<SettingsLayout page={<NotificationSettingsPage />} />}
  //     />
  //   ),
  // },
];
