import { RouterProvider } from "react-router-dom";
import { ReservationCartProvider } from "./lib/context/ReservationContext.tsx";
import { router } from "./lib/routerConfig";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ToastContainer } from "react-toastify";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReservationCartProvider>
        <RouterProvider router={router} />
        {/* <ToastContainer /> */}
      </ReservationCartProvider>
    </QueryClientProvider>
  );
};

export default App;
