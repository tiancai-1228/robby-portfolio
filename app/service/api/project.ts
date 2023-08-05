import { groq } from "next-sanity";
import { sanityClient } from "../client";

const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
  `;

const getProject = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export { getProject };
