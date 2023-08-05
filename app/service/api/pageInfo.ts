import { groq } from "next-sanity";
import { sanityClient } from "../client";

const query = groq`
  *[_type == "pageInfo"][0]
  `;

const getPageInfo = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export { getPageInfo };
