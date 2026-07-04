export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  type: string;
  video: string;
  poster: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "01",
    title: "Modern Daire",
    location: "İstanbul",
    type: "2+1 Daire",
    video: "/videos/tour-01.mp4",
    poster: "/images/produck-showcase.jpeg",
  },
  {
    id: "02",
    title: "Ferah Konut",
    location: "İstanbul",
    type: "3+1 Daire",
    video: "/videos/tour-02.mp4",
    poster: "/images/produck-showcase.jpeg",
  },
  {
    id: "03",
    title: "Stüdyo Daire",
    location: "İstanbul",
    type: "Stüdyo",
    video: "/videos/tour-03.mp4",
    poster: "/images/produck-showcase.jpeg",
  },
];
