import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import {
  Category,
  // Spinner,
  Create,
  Feed,
  NavBar,
  Search,
  UserProfile,
  VideoPinDetail,
  VideoPin,
} from "../Components";
import Spinner from "../Components/Spinner";
import { Routes, Route } from "react-router-dom";
import { categories } from "../data";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase-config";
import { getAllFeeds } from "../utils/fetchData";
const Home = ({ user }) => {
  // const [searchTerm, setsearchTerm] = useState("");
  return (
    <>
      <NavBar user={user} />
      {/* // setsearchTerm={setsearchTerm}  */}

      <Flex width={"100vw"}>
        <Flex
          direction={"column"}
          justifyContent="start"
          alignItems={"center"}
          width="5%"
        >
          {/* <Category/> */}
          {categories &&
            categories.map((data) => <Category key={data.id} data={data} />)}
        </Flex>

        <Flex
          width={"95%"}
          px={4}
          justifyContent="center"
          alignItems={"center"}
          // px={4}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/category/:categoryId" element={<Feed />} />
            <Route path="/create" element={<Create />} />
            <Route path="/videoDetail/:videoId" element={<VideoPinDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/userDetail/:userId" element={<UserProfile />} />
          </Routes>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
