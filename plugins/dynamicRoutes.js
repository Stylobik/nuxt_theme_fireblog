import axios from "axios";
export default async () => {
  const query = `
  query {
   blog {
     name
     description
     image {
       url
       alt
     }
   }
   posts(last: 100) {
     totalCount
     edges {
       cursor
       node {
         _id
         slug
         title
         content
         image {
           url
           alt
         }
         teaser
         updatedAt
         publishedAt
         author {
           name
           picture
         }
       }
     }
   }
 }`;
  const q = await axios
    .post("https://api.fireblogcms.com/graphql/blog/5e0cc6b2c96420000444d376", {
      query
    })
    .then(res => {
      return res
    });

  return q.data;
};
