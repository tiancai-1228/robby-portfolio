import { groq } from "next-sanity";
import { sanityClient } from "../client";

const query = groq`
  *[_type == "skill"]
  `;

const getSkill = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export { getSkill };
