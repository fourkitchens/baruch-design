import photo from "@/assets/images/UNA-USA-Fellow_.gif";
import Image from "next/image";
import HeroBigSideBySide from "@/components/heroBigSideBySide";
import LayoutPage from "@/components/layoutPage";
import AccordionGroup from "@/components/accordionGroup";
import CardLinkList from "@/components/cardLinkList";
import cardListImage from '@/assets/images/admissions-trim.jpg';
import cardListImage2 from '@/assets/images/students_2265_hor.jpg';
import RelatedArticles from "@/components/relatedArticles";
import Slideshow from "@/components/slideshow";
import Blockquote from "@/components/blockquote";

const news = {
  title: "Baruch Senior Wins United Nations Association-USA Fellowship",
  date: "January 31, 2025",
  image: photo,
  content: <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
}

const accordionData = [
  {
    question: "Undergraduate Admissions Information and Major Declaration",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
  {
    question: "Public Affairs Learning Goals",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
  {
    question: "The Hagedorn Internship",
    content:
      <p>Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
  },
]

const cardLinkListData = [
  {
    header: 'Undergraduate Admissions',
    image: cardListImage,
    content: [
      {
        title: 'Undergraduate Admissions',
        link: 'https://www.baruch.cuny.edu/admissions/undergraduate/public-affairs-learning-goals/'
      },
      {
        title: 'International Admissions',
        link: 'https://www.baruch.cuny.edu/admissions/international/international-admissions/'
      },
      {
        title: 'Transfer Students',
        link: 'https://www.baruch.cuny.edu/admissions/transfer-students/'
      },
      {
        title: 'Request Information',
        link: 'https://www.baruch.cuny.edu/admissions/request-information/'
      }
    ]
  },
  {
    header: 'Graduate Admissions & Programs for Baruch Students',
    image: cardListImage2,
    content: [
      {
        title: 'Marxe School of Public and International Affairs',
        link: 'https://www.baruch.cuny.edu/admissions/undergraduate/public-affairs-learning-goals/'
      },
      {
        title: 'Weissman School of Arts and Sciences',
        link: 'https://www.baruch.cuny.edu/admissions/international/international-admissions/'
      },
      {
        title: 'Zicklin School of Business',
        link: 'https://www.baruch.cuny.edu/admissions/transfer-students/'
      },
    ]
  }
]

export default function Everything() {
  return (
    <div>
      <HeroBigSideBySide image={news.image} title={news.title} content={news.content} />
      <LayoutPage>
        <article className="prose lg:prose-lg max-w-none mx-auto">
          <p className="lead">Baruch College student Adriana Maria Lopez-Tavares (’25) is set to fulfill her dream of advancing human rights by joining the United Nations Secretariat, Office for Disarmament in the spring.</p>
          <p>Lopez-Tavares won a coveted United Nations Association-USA Fellowship (UNA-USA) which provides financial assistance to those from underrepresented communities who receive internships with the United Nations. This Fellowship, a &ldquo;first-of-its-kind&rdquo; scholarship, comes with numerous benefits such as stipends of up to $13,000, mentorships, networking opportunities, and access to expert-led conferences and meetings on international peace and security.</p>
          <figure className="not-prose lg:-mx-16 lg:my-16">
            <Image 
              src={photo} 
              alt="Photo" 
              className="w-full h-100 object-cover object-left" 
            />
            <figcaption className="mt-2 text-sm text-neutral-charcoal italic">
              Adriana Lopez-Tavares secured a fellowship with the United Nations Office for Disarmament Affairs that supports her goal of advancing human rights through international economic development.
            </figcaption>
          </figure>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>Lopez-Tavares won a coveted United Nations Association-USA Fellowship (UNA-USA) which provides financial assistance to those from underrepresented communities who receive internships with the United Nations. This Fellowship, a &ldquo;first-of-its-kind&rdquo; scholarship, comes with numerous benefits such as stipends of up to $13,000, mentorships, networking opportunities, and access to expert-led conferences and meetings on international peace and security.</p>
          <figure className="not-prose w-1/2 lg:mb-16 float-right -mr-64 ml-16">
            <Image 
              src={photo} 
              alt="Photo" 
              className="aspect-2/3 object-cover" 
            />
            <figcaption className="mt-2 text-sm text-neutral-charcoal italic">
              Adriana Lopez-Tavares secured a fellowship with the United Nations Office for Disarmament Affairs that supports her goal of advancing human rights through international economic development.
            </figcaption>
          </figure>
          <p>She added, &ldquo;As a first-generation low-income student, unpaid internships can present financial challenges, but this fellowship has provided the necessary support to overcome them. This internship will be instrumental in shaping my understanding of global security issues and human rights efforts.&rdquo;</p>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>She added, &ldquo;As a first-generation low-income student, unpaid internships can present financial challenges, but this fellowship has provided the necessary support to overcome them. This internship will be instrumental in shaping my understanding of global security issues and human rights efforts.&rdquo;</p>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>Lopez-Tavares won a coveted United Nations Association-USA Fellowship (UNA-USA) which provides financial assistance to those from underrepresented communities who receive internships with the United Nations. This Fellowship, a &ldquo;first-of-its-kind&rdquo; scholarship, comes with numerous benefits such as stipends of up to $13,000, mentorships, networking opportunities, and access to expert-led conferences and meetings on international peace and security.</p>
          <figure className="not-prose w-1/2 lg:mb-16 float-left -ml-64 mr-16">
            <Image 
              src={photo} 
              alt="Photo" 
              className="aspect-2/3 object-cover" 
            />
            <figcaption className="mt-2 text-sm text-neutral-charcoal italic">
              Adriana Lopez-Tavares secured a fellowship with the United Nations Office for Disarmament Affairs that supports her goal of advancing human rights through international economic development.
            </figcaption>
          </figure>
          <p>She added, &ldquo;As a first-generation low-income student, unpaid internships can present financial challenges, but this fellowship has provided the necessary support to overcome them. This internship will be instrumental in shaping my understanding of global security issues and human rights efforts.&rdquo;</p>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <p>She added, &ldquo;As a first-generation low-income student, unpaid internships can present financial challenges, but this fellowship has provided the necessary support to overcome them. This internship will be instrumental in shaping my understanding of global security issues and human rights efforts.&rdquo;</p>
          <p>&ldquo;This experience will broaden my horizons, helping me see what the world has to offer and encouraging me to think bigger for my career,&rdquo; said Lopez-Tavares, who is majoring in business administration with Honors in Economics and a minor in Latin America and Caribbean Studies.</p>
          <AccordionGroup data={accordionData} />
          <h2>Career Focus on Human Rights</h2>
          <p>For Lopez-Tavares, the mission of the United Nations Office for Disarmament Affairs—which provides support to disarmament issues, preventive measures, and regional disarmament efforts—align with her deep interest in human rights.</p>
          <p>&ldquo;Disarmament is a critical aspect of human rights that helps end violence and allows communities to grow and thrive,&rdquo; Lopez-Tavares explained. &ldquo;I am so grateful for the opportunity to explore this field through the initiatives my office pursues.&rdquo;</p>
          <Blockquote>&ldquo;The field of human rights attracts me because I want to serve others and contribute to community development.&rdquo;</Blockquote>
          <p>Lopez-Tavares credits her background for inspiring her to pursue solutions to economic disparities and supporting marginalized communities.</p>
          <p>&ldquo;My family is from a small village in the Dominican Republic, and we immigrated to Brooklyn, New York when I was a child,&rdquo; she stated. &ldquo;My background has fueled my interest in addressing poverty, empowering low-income communities, and advancing human rights through international economic development.&rdquo;</p>
          <p>&ldquo;The field of human rights attracts me because I want to serve others and contribute to community development.&rdquo;</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardLinkListData.map((item) => (
              <CardLinkList key={item.header} header={item.header} image={item.image} content={item.content} />
            ))}
          </div>
          <h2>Fellowship Advising Support for Baruch Students&nbsp;</h2>
          <p>Baruch College&rsquo;s Fellowship Advising Office supports students interested in applying for nationally competitive scholarships to study abroad, get professional development, and receive graduate study assistance.</p>
          <Slideshow />
          <p><a href="https://blogs.baruch.cuny.edu/fellowships/" target="_blank" rel="noopener">Learn more</a> about how the office mentors and advises all Baruch students through the application process for various fellowships and scholarships such as Fulbright awards, Schwarzman Scholarships, Jeannette K. Watson Fellowships, Gilman International Scholarships, Freeman-ASIA scholarships, and more.</p>
        </article>
      </LayoutPage>
      <RelatedArticles />
    </div>
  );
}
