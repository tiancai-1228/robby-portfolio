import { groq } from "next-sanity";
import { sanityClient } from "../client";

const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
  `;

const getExperience = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export { getExperience };
