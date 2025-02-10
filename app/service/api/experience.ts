import { groq } from "next-sanity";
import { sanityClient } from "../client";
import { I_experience } from "../interface";

const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
  `;

const getExperience = async () => {
  const data: I_experience[] = await sanityClient.fetch(query);
  return data.sort((a, b) => a.sort - b.sort);
};

export { getExperience };
