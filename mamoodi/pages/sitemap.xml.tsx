import SiteMapServices from "../services/sitemap";

function generateSiteMap(arryList: string[]) {

  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
       <!-- Add the static URLs manually -->
       <url>
          <loc>https://blog.scoutout.co</loc>
          <lastmod>2024-03-25</lastmod> 
          <changefreq>daily</changefreq>
          <priority>1.0</priority> 
       </url>
       <url>
         <loc>https://blog.scoutout.co/articles</loc>
         <lastmod>2024-03-25</lastmod> 
         <changefreq>daily</changefreq>
         <priority>1.0</priority> 
       </url>
       ${arryList
      .map((item) => {
        return `
            <url>
                <loc>${`https://blog.scoutout.co/articles/${item}`}</loc>
                <lastmod>2024-03-25</lastmod> 
                <changefreq>daily</changefreq>
                <priority>1.0</priority> 
            </url>
          `;
      })
      .join("")}
     </urlset>
   `;
}

export async function getServerSideProps({ res }) {

  const result = await SiteMapServices().fetchBlogPosts();
  if (result) {
    const articles = result.result;
    const arryList = new Array();
    articles.map((item) => {

      arryList.push(item.uuid);
    })

    const sitemap = generateSiteMap(arryList);
    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  }





}

export default function SiteMap() { }