import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_BUSOLA_CMS_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_BUSOLA_CMS_ENVIRONMENT,
  accessToken: process.env.NEXT_PUBLIC_BUSOLA_CMS_API_KEY!,
});

export default contentfulClient;
