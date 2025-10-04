import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/home.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Batches from "./Components/Batches/Batches.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import About from "./Components/About/About.jsx";
import { RevealBentoR } from "./Components/GalleryCard/Grid/GridRight.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Gallery/image" element={<RevealBentoR/>}/>
      <Route path="Batches:2026" element={<Batches year='2026' />} />
      <Route path="Batches:2027" element={<Batches year='2027' />} />
      <Route path="Batches:2028" element={<Batches year='2028' />} />
      <Route path="Batches:2029" element={<Batches year='2029' />} />
      <Route path="About" element={<About />} />
      <Route path="Profile" element=  {<Profile refresh='1'/>} />

    </Route>
  )
);
// createRoot(document.getElementById("root")).render(
//   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   </ClerkProvider>
// );
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    // domain="dev-dp8f6whkbw1lttty.us.auth0.com"
    // clientId="vPA46GlO1ZGBm7iKFtHp6iYkgovwU2SN"
    domain = {import.meta.env.VITE_AUTH0_DOMAIN}
    clientId = {import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
    ,
  </Auth0Provider>
);
