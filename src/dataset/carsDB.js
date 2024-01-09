import { createClient } from "contentful";

const client = createClient({
  space: "ovp5n7y1dc46",
  accessToken: "ew-00t3AZPmeIpMLrcivgWxYW6UPGfkuJLSSv5uy7Ho",
});

export const fetchContent = async () => {
  try {
    const response = await client.getEntries();
    return response.items;
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
    return [];
  }
};
