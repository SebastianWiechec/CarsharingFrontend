import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(),
  },
  Container:{
    marginTop: "100px",
  }
}));

const sections = [
  { title: 'Samochody', url: '/Cars' },
  { title: 'Koszty', url: '/Costs' },
  { title: 'O firmie', url: 'http://www.nitro-gear.pl/pl/page/o-nas/2/' },
  { title: 'Kontakt', url: '/Contact' },
];

const mainFeaturedPost = {
  title: 'Wypożyczalnia samochodów "Nitro - Gear"',
  description:
    "Wypożyczysz u nas auto dostosowane do własnych potrzeb",
  image: '../Maybah/MAybah.jpg',
  imgText: 'Nitro - Gear',
  linkText: 'Kontynuuj…',
};

const featuredPosts = [
  {
    title: 'Promocja dla stałych klientów',
    date: 'Jan 2021',
    description:
      'Dla posiadaczy karty stałego klienta rabat na wynajem samochodu nawet do 20%',
    image: '../rabat.jpg',
    imageText: 'Rabat',
  },
  {
    title: 'Samochód dla każdego',
    date: 'Dec 2020',
    description:
      'Posiadamy szeroką gamę dostępnych pojazdów',
    image: '../ToyotaYaris/toyota-yaris.jpg',
    imageText: 'AutoDlaKazdego',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'O Nas',
  description:
    'Na rynku lokalnym obsługujemy pojazdy osobowe wszystkich marek z silnikami benzynowymi i diesla. Dysponujemy profesjonalnym sprzętem oraz wieloletnim doświadczeniem. Wykonujemy usługi wg. norm technicznych oraz naprawy i modyfikacje niestandardowe. Każdy klient korzystający z naszych usług ma zapewnioną obsługę w doborze części zamiennych jak i oryginalnych. Nasze usługi są objęte 24 miesięczną gwarancją.',
  archives: [
    { title: 'Ford Focus', url: '/Car/4' },
    { title: 'Opel Astra', url: '/Car/1' },
    { title: 'Skoda Octavia', url: '/Car/3' },
    { title: 'Toyota Yaris', url: '/Car/2' },
    { title: 'Mercedes S550', url: '/Car/6' },
    { title: 'Mercedes Maybah', url: '/Car/5' },
    ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.Container}>
        <Header title="Nitro - Gear" sections={sections} marginTop="50px"/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Sidebar" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
