import { Slide, ToastContainer } from "react-toastify";

type Props = {
  errors?: string[];
};

const DisplayErrors = ({ errors }: Props) => {
  return (
    <>
      {errors && errors.length > 0 ? (
        <ul className="text-red-500">
          {errors.map((error, i) => (
            <li key={i}>
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
              />
              {error}
              <ToastContainer />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default DisplayErrors;
