export const featuredWork = {
  image: "/illustrations/illus-feature.png",
  video: "/illustrations/illus-feature.MP4",
  alt: "Hà Nội Folk Theatre",
  title: "Hà Nội Folk Theatre",
  subtitle: "Traditional Hát Bội performance",
};

export const splitWork = [
  {
    image: "/illustrations/BTS.png",
    video: "/illustrations/BTS.mov",
    alt: "Behind the scene - Hát Bội",
    title: "Behind the scene - Hát Bội",
    subtitle: "The “language” of the face",
    className: "split-left",
  },
  {
    image: "/illustrations/instruments.png",
    video: "/illustrations/instruments.mov",
    alt: "Instruments",
    title: "Instruments",
    subtitle: "Musical dialogue performance in Hát Bội",
    className: "split-right",
  },
];

export const characters = ["01", "02", "03", "04"].map((n) => ({
  image: `/illustrations/character-${n}.png`,
  video: `/illustrations/character-${n}.mov`,
  alt: `Character ${n}`,
  title: `Character ${n}`,
  subtitle: "Theatrical performance in Hát Bội",
}));

export const mascots = [
  {
    image: "/illustrations/mascot-a.png",
    video: "/illustrations/mascot-a.mov",
    alt: "Mascot 01",
  },
  {
    image: "/illustrations/mascot-b.png",
    video: "/illustrations/mascot-b.mov",
    alt: "Mascot 02",
    title: "Tết 2023",
    subtitle: "Year of the Fire Horse",
    className: "mascot-featured",
  },
  {
    image: "/illustrations/mascot-c.png",
    video: "/illustrations/mascot-c.mov",
    alt: "Mascot 03",
  },
];
