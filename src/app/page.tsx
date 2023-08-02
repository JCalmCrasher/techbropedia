import fs from "fs";
import matter from "gray-matter";
import Landing from "../components/landing";

const getUsers = async () => {
 // Getting all our contents at build time

 // Get all the contents from contents folder
 const files = fs.readdirSync(`src/contents`);

 // Randomly shuffle the files array
 files.sort(() => Math.random() - 0.5);

 // Loop over each post to extract the frontmatter which we need
 const contents = files.map((file) => {
  // getting the slug here which we will need as a URL query parameter
  const slug = file.replace(".md", "");
  // Reading the contents of the file
  const filecontent = fs.readFileSync(`src/contents/${file}`, "utf-8");
  const parsedContent = matter(filecontent);
  //The parsed content contains data and content we only need the data which is the frontmatter
  const { data, content } = parsedContent;
  return {
   slug,
   data,
   content
  };
 });
 return { contents };
};

const Home = async () => {
 const data = await getUsers();

 return <Landing contents={data.contents} />;
};

export default Home;
