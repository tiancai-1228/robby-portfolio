import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_Id || "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: true,
};

const sanityClient = createClient(config);

const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export { sanityClient, urlFor };
