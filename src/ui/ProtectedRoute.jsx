import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = -useNavigate();

  //1. Load the authenticated
  const { isLoading, isAuthenticated } = useUser();

  //2. if there is no auth user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/navigate");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
