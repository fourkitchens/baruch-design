import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import Image from "next/image";
import HeroBigSideBySide from "@/components/heroBigSideBySide";
import LayoutPage from "@/components/layoutPage";
import RelatedArticles from "@/components/relatedArticles";
import image1 from "@/assets/images/news/61mK1bQ4j9L._AC_UF894,1000_QL80_.jpg"
import image2 from "@/assets/images/news/abhishek-rai-eucPfcmTQig-unsplash.jpg"
import image3 from "@/assets/images/news/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import image4 from "@/assets/images/news/greg-edwards-oz2wj86hGxA-unsplash.jpg"

const news = {
  title: "Baruch Senior Wins United Nations Association-USA Fellowship",
  date: "January 31, 2025",
  image: photo,
  content: <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
}

const sidebar = (
  <div>
    <h2>Sidebar</h2>
  </div>
)

export default function Basic() {
  return (
    <div>
      {/* <HeroBigSideBySide image={news.image} title={news.title} content={news.content} date={news.date} /> */}
      <LayoutPage>
        <article className="prose lg:prose-lg max-w-none mx-auto">
          <div className="mb-16">
            <h1 className="!mb-0">No Accounting for Taste: Zicklin School’s Accountants Audit “The Accountant” Franchise</h1>
            <p className="text-neutral-charcoal">May 12, 2025</p>
          </div>
          <figure className="not-prose w-1/2 lg:mb-16 float-right -mr-64 ml-16">
            <Image 
              src={image1} 
              alt="Photo" 
              className="aspect-2/3 object-cover" 
            />
          </figure>
          <p className="lead">If you’ve been a troglodyte for the past decade, you might not have heard about <em>The Accountant</em>, a 2016 action movie starring Ben Affleck as Christian Wolff, an autistic accountant who, when not adding long sums in his head, is busy using his bare-knuckle-fighting, sharpshooting, trained-killer expertise against money launderers and the like.</p>
          <p>When The Accountant 2 was released last month, Zicklin News asked Zicklin School accounting students, alumni, and professors what they thought of the movies. Here’s what they told us. </p>
          <p>“I saw the first movie and liked some of the accounting references, although thinking about it now, the idea of Christian Wolff using accounting knowledge for both legitimate and illegal activities was pretty distasteful. My friends and I did try to see the sequel but it was sold out by the time we got there.”<br/>
          <em>—Deven Sanghavi (MS, ’23)</em> </p>
          <p>“I saw The Accountant years ago and thought that the accounting references were pretty mixed up and didn’t make sense. I don’t plan to see the sequel.”<br/>
          <em>—Donal Byard, Professor and Chair, Stan Ross Department of Accountancy</em> </p>
          <p>“I liked The Accountant and I plan to see the sequel. I’ve always been a fan of mystery and detective plots, so seeing it through the eyes of an accountant was right up my alley—especially when  Christian Wolff is uncovering fraud in financial statements or discovering shell companies. And it was refreshing to hear the reference to ‘Crazy Eddie and the Panama Pump’ [the owner of a New York electronics store who stole money from his own company and then pumped it back in via offshore accounts in order to artificially inflate the stock prior to an IPO]. We teach some of those scandals at the Baruch Accounting Society because there’s a lot to learn from history—scammers tend to follow similar patterns.”<br/>
          <em>—Vincent Perretti (BBA, ’26), President, Baruch Accounting Society</em> </p>
          
        </article>
      </LayoutPage>
      <RelatedArticles />
    </div>
  );
}
