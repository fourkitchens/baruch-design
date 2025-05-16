import Header from "@/components/header";
import Hero from "@/templates/home/hero";
import SlidingCards from "@/templates/home/slidingCards";
import Testimonials from "@/templates/home/testimonials";
import Footer from "@/components/footer";
import News from "@/templates/home/news";
import Stats from "@/templates/home/stats";
import Bento from "@/sections/bento";

const stats = [
  {
    id: 7,
    header: '#1 ',
    subhead: 'Public College in New York State',
    attribution: 'U.S. News & World Report (Best Colleges-North Ranking)',
  },
  {
    id: 8,
    header: '#1',
    subhead: 'In the Nation',
    attribution: 'The Wall Street Journal (U.S. Colleges Offering the Best Value'
  },
  {
    id: 9,
    header: 'Top 25',
    headerSpecial: '<span class="text-5xl mr-2">Top</span>25',
    subhead: 'Public College in the U.S.',
    attribution: 'Forbes Magazine'
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats stats={stats} />
      <SlidingCards />
      <Bento />
      <Testimonials />
      <News />
      <Footer />
    </>
  );
} 