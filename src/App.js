import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./adminPages/dashboard/home";
import CutomerApproved from "./adminPages/dashboard/approved-by-customer";
import PendingToAllot from "./adminPages/dashboard/pending-to-allot";
import Dsahboard from "./adminPages/dashboard/dsahboard";
import CreateResume from "./userPages/createresume";
import Payment from "./adminPages/dashboard/payment";
import ResumeList from "./adminPages/dashboard/resumelist";
import Profile from "./adminPages/dashboard/profile";
import AllCustomer from "./adminPages/dashboard/all-customer";
import ActiveCustomer from "./adminPages/dashboard/active-customer";
import CompletedCustomer from "./adminPages/dashboard/completed-customer";
import ResumePending from "./adminPages/dashboard/resume-pending";
import ResumeAllottedAi from "./adminPages/dashboard/resume-allotted-ai";
import ResumeAllottedFormatting from "./adminPages/dashboard/resume-allotted-formatting";
import ResumeAllottedManualEdit from "./adminPages/dashboard/resume-allotted-manualedit";
import CustomerApprovalPending from "./adminPages/dashboard/customer-approval-pending";
import PaymentPending from "./adminPages/dashboard/payment-pending";
import ReworkNeeded from "./adminPages/dashboard/rework-needed";
import Completed from "./adminPages/dashboard/completed";
import UserTemplates from "./userPages/templates/index";
import EmployeeTemplates from "./employeePages/templates/index";
import AdminLogin from "./adminPages/login & register/admin-login";
import UploadProfile from "./userPages/dashboard/uploadProfile";
import EmployeeCreation from "./adminPages/dashboard/employeeCreation";
import AdminPrivateRoute from "./privateRoutes/adminPrivateRoute";
import UserPrivateRoute from "./privateRoutes/userPrivateRoute";
import CustomerLogin from "./userPages/login & register/customer-login";
import CustomerSignUp from "./userPages/login & register/customer-sign";
import EmployerLogin from "./employeePages/login & register/employer-login";
import EmployerSignUp from "./employeePages/login & register/employer-sign";
import EmployeePrivateRoute from "./privateRoutes/employeePrivateRoute";
import EmployeeCreateResume from "./employeePages/createresume/index";
import PageNotFound from "./userPages/common/404";
import AdminPageNotFound from "./adminPages/common/404";
import EmployeePageNotFound from "./employeePages/common/404";
import { ProfileSummaryTextEditor } from "./userPages/common/textEditor";
import UserResumeList from "./userPages/dashboard/resumelist";
import UserPaymentPage from "./userPages/dashboard/payment";
import UserProfilePage from "./userPages/dashboard/profile";
import EmployeeProfilePage from "./employeePages/dashboard/profile";
import EmployeeCompleted from "./employeePages/dashboard/completed";
import EmployeeProductivity from "./employeePages/dashboard/employee-productivity";
import EmployeeAiEnhanced from "./employeePages/dashboard/resume-allotted-ai";
import EmployeeAlloted from "./employeePages/dashboard/resume-allotted-formatting";
import EmployeePerformanceReport from "./adminPages/dashboard/employeePerformanceReport";
import AllEmployees from "./adminPages/dashboard/all-employees";
import EmployeeAllResumes from "./employeePages/dashboard/allResumes";
import UserEmailVerification from "./userPages/dashboard/verify-email";
import EmployeeEmailVerification from "./employeePages/dashboard/verify-email";
import CustomerForgotPassword from "./userPages/login & register/forgotPassword";
import CustomerResetPassword from "./userPages/login & register/resetPassword";
import EmployerForgotPassword from "./employeePages/login & register/employerForgotPass";
import EmployerResetPassword from "./employeePages/login & register/employerResetPass";
import AdminForgotPassword from "./adminPages/login & register/forgot-password";
import AdminResetPassword from "./adminPages/login & register/reset-password";
import AdminEmailVerification from "./adminPages/dashboard/verify-email";
import ViewIndividualEmployee from "./adminPages/dashboard/viewIndividualEmployee";
import CommonPageNotFound from "./common/404";
import Subscribers from "./adminPages/dashboard/subscribers";
import AdminDashboard from "./adminPages/dashboard/dashboard";
import UserDashboard from "./userPages/dashboard/dashboard";
import Landing from "./landingPage/Landing";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAdmin, setEmployee, setUser } from "./state/reducer/userNameSlice";
function App() {
  const userToken = localStorage.getItem("customerAuthToken");
  const adminToken = localStorage.getItem("adminAuthToken");
  const employeeToken = localStorage.getItem("employeeAuthToken");
  const dispatch = useDispatch();
  useEffect(() => {
    if (userToken) {
      axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/user/user-info",
        headers: {
          Authorization: userToken,
        },
      })
        .then((res) => {
          console.log(res?.data?.data?.user_info);
          let user = res?.data?.data?.user_info;
          dispatch(setUser(`${user?.first_name} ${user?.last_name}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (adminToken) {
      axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/admin/user-info",
        headers: {
          Authorization: adminToken,
        },
      })
        .then((res) => {
          console.log(res?.data?.data, "data");
          let user = res?.data?.data;
          dispatch(setAdmin(`${user?.first_name} ${user?.last_name}`));
        })
        .catch((err) => {
          console.log(err, "data");
        });
    }
    if (employeeToken) {
      axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/employee/employeer-profile",
        headers: {
          Authorization: employeeToken,
        },
      })
        .then((res) => {
          console.log(res?.data?.data?.employee_info);
          let user = res?.data?.data?.employee_info;
          dispatch(setEmployee(`${user?.first_name} ${user?.last_name}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<CommonPageNotFound />} />
        {/* <Route path="/my-orders" element={<MyOrders />} /> */}
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route
            path=""
            element={
              <AdminPrivateRoute>
                <AdminDashboard />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="subscribers"
            element={
              <AdminPrivateRoute>
                <Subscribers />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <AdminPrivateRoute>
                <AdminDashboard />
              </AdminPrivateRoute>
            }
          />

          <Route path="forgot-password" element={<AdminForgotPassword />} />
          <Route
            path="reset-password/:token"
            element={<AdminResetPassword />}
          />
          {/* <Route
            path="verify-email/:token"
            element={<AdminEmailVerification />}
          /> */}
          <Route
            path="view-individual-employee/:id"
            element={
              <AdminPrivateRoute>
                <ViewIndividualEmployee />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="alloted-resume-page"
            element={
              <AdminPrivateRoute>
                <CutomerApproved />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="non-alloted-resume"
            element={
              <AdminPrivateRoute>
                <PendingToAllot />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="employee-performance-report/:id"
            element={
              <AdminPrivateRoute>
                <EmployeePerformanceReport />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="all-employees"
            element={
              <AdminPrivateRoute>
                <AllEmployees />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="customer-info/:id"
            element={
              <AdminPrivateRoute>
                <Dsahboard />
              </AdminPrivateRoute>
            }
          />

          <Route
            path="payment"
            element={
              <AdminPrivateRoute>
                <Payment />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="all-customer"
            element={
              <AdminPrivateRoute>
                <AllCustomer />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="active-customer"
            element={
              <AdminPrivateRoute>
                <ActiveCustomer />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="completed-customer"
            element={
              <AdminPrivateRoute>
                <CompletedCustomer />
              </AdminPrivateRoute>
            }
          />

          <Route
            path="resume-list"
            element={
              <AdminPrivateRoute>
                <ResumeList />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="resume-pending"
            element={
              <AdminPrivateRoute>
                <ResumePending />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="resume-allotted-ai"
            element={
              <AdminPrivateRoute>
                <ResumeAllottedAi />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="resume-allotted-formatting"
            element={
              <AdminPrivateRoute>
                <ResumeAllottedFormatting />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="resume-allotted-manualedit"
            element={
              <AdminPrivateRoute>
                <ResumeAllottedManualEdit />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="customer-approval-pending"
            element={
              <AdminPrivateRoute>
                <CustomerApprovalPending />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="payment-pending"
            element={
              <AdminPrivateRoute>
                <PaymentPending />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="rework-needed"
            element={
              <AdminPrivateRoute>
                <ReworkNeeded />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="completed"
            element={
              <AdminPrivateRoute>
                <Completed />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <AdminPrivateRoute>
                <Profile />
              </AdminPrivateRoute>
            }
          />

          <Route
            path="employee-creation"
            element={
              <AdminPrivateRoute>
                <EmployeeCreation />
              </AdminPrivateRoute>
            }
          />
          <Route path="*" element={<AdminPageNotFound />} />
        </Route>

        {/* Routes for Employee including auth */}
        <Route path="/employee">
          <Route
            path=""
            element={
              <EmployeePrivateRoute>
                <EmployeeAllResumes />
              </EmployeePrivateRoute>
            }
          />
          <Route path="login" element={<EmployerLogin />} />
          <Route path="sign" element={<EmployerSignUp />} />
          <Route path="forgot-password" element={<EmployerForgotPassword />} />
          <Route
            path="reset-password/:token"
            element={<EmployerResetPassword />}
          />

          <Route
            path="verify-email/:token"
            element={<EmployeeEmailVerification />}
          />

          <Route
            path="create-resume/:id"
            element={
              <EmployeePrivateRoute>
                <EmployeeCreateResume />
              </EmployeePrivateRoute>
            }
          />
          <Route
            path="all-resumes"
            element={
              <EmployeePrivateRoute>
                <EmployeeAllResumes />
              </EmployeePrivateRoute>
            }
          />
          <Route
            path="templates/:id"
            element={
              <EmployeePrivateRoute>
                <EmployeeTemplates />
              </EmployeePrivateRoute>
            }
          />

          <Route
            path="my-profile"
            element={
              <EmployeePrivateRoute>
                <EmployeeProfilePage />
              </EmployeePrivateRoute>
            }
          />
          <Route
            path="productivity"
            element={
              <EmployeePrivateRoute>
                <EmployeeProductivity />
              </EmployeePrivateRoute>
            }
          />

          <Route
            path="completed"
            element={
              <EmployeePrivateRoute>
                <EmployeeCompleted />
              </EmployeePrivateRoute>
            }
          />

          <Route
            path="ai-enhanced"
            element={
              <EmployeePrivateRoute>
                <EmployeeAiEnhanced />
              </EmployeePrivateRoute>
            }
          />

          <Route
            path="allotted"
            element={
              <EmployeePrivateRoute>
                <EmployeeAlloted />
              </EmployeePrivateRoute>
            }
          />

          <Route path="*" element={<EmployeePageNotFound />} />
        </Route>

        {/* Routes for User including auth */}
        <Route path="/user">
          <Route
            path=""
            element={
              <UserPrivateRoute>
                <UserDashboard />
              </UserPrivateRoute>
            }
          />
          <Route path="sign" element={<CustomerSignUp />} />
          <Route path="login" element={<CustomerLogin />} />
          <Route path="forgot-password" element={<CustomerForgotPassword />} />
          <Route
            path="reset-password/:token"
            element={<CustomerResetPassword />}
          />
          <Route path="text-editor" element={<ProfileSummaryTextEditor />} />
          <Route
            path="create-resume/:id"
            element={
              <UserPrivateRoute>
                <CreateResume />
              </UserPrivateRoute>
            }
          />
          <Route
            path="resume-list"
            element={
              <UserPrivateRoute>
                <UserResumeList />
              </UserPrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <UserPrivateRoute>
                <UserDashboard />
              </UserPrivateRoute>
            }
          />
          <Route
            path="verify-email/:token"
            element={<UserEmailVerification />}
          />
          <Route
            path="payment"
            element={
              <UserPrivateRoute>
                <UserPaymentPage />
              </UserPrivateRoute>
            }
          />
          <Route
            path="upload-resume"
            element={
              <UserPrivateRoute>
                <UploadProfile />
              </UserPrivateRoute>
            }
          />
          <Route
            path="my-profile"
            element={
              <UserPrivateRoute>
                <UserProfilePage />
              </UserPrivateRoute>
            }
          />
          <Route
            path="templates/:id"
            element={
              <UserPrivateRoute>
                <UserTemplates />
              </UserPrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
